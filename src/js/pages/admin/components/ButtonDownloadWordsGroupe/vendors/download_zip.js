
import JSZip from 'jszip';
import FileSaver from 'file-saver';

export const download_zip = ( params ) => {
    let { 
        list,
        projectName,
        project,
    } = params;


    function base64ToBlob(base64String, contentType) {

        let result = null;
        const [ prefix, data ] = base64String.split(',');
        try {
            const byteCharacters = atob(data);
            const byteArrays = [];
            for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
                const slice = byteCharacters.slice(offset, offset + 1024);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
                }
                byteArrays.push(new Uint8Array(byteNumbers));
            };
            result = new Blob(byteArrays, { type: contentType });

        } catch (error) {

        }

        return result;
    };


    const zip = new JSZip();
    const folder = zip.folder( projectName );
    folder.folder( 'audio' );

    let files = [];

    let list_without_audio = [];
    let list_with_audio = [];


    let errorsText = '';

    for( let i = 0; i < list.length; i++ ){
        let { audio } = list[ i ];
        let newAudio = [];
        for( let y = 0; y < audio.length; y++ ){
            let blob = base64ToBlob( audio[ y ].base64, 'audio/mp3' );
            if( blob === null ){
                errorsText = `${errorsText}Проблемы с аудио файлом "${audio[ y ].name}". Он не добавлен в список  \n`;
            }else{
                files.push({
                    name: audio[ y ].name,
                    blob: blob,
                });

                newAudio.push( structuredClone( audio[ y ] ) );
            };
        };

        let item = structuredClone( list[ i ] );
        let item_2 = structuredClone( list[ i ] );

        item.audio = [];
        item_2.audio = newAudio;
        list_without_audio.push( item );
        list_with_audio.push( item_2 );
    };

    for( let i = 0; i < files.length; i++ ){
        folder.file( 'audio/' + files[ i ].name, files[ i ].blob );
    };


    folder.file( 'words.json', JSON.stringify( list_with_audio ) );
    folder.file( 'words_without_audio.json', JSON.stringify( list_without_audio ) );

    if( project !== null ){
        // project.words = list_with_audio;
        folder.file( 'project.json', JSON.stringify( project ) );
    };

    if( errorsText !== '' ){
        folder.file( 'errors.txt', errorsText );
    }

    zip.generateAsync( {type:"blob"} ).then(function(content) {
        saveAs(content, `${projectName}.zip`);
    });

}