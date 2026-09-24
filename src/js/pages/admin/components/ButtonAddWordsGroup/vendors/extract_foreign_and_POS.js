
import store from './../../../../../redux/admin/store.js';

export const extract_foreign_and_POS = ( str ) => {
    let result = {
        foreign: null,
        POS_id: null,
        remainder: '',
    };

    let { appWords } = store.getState();
    let { partOfSpeechList } = appWords;

    let pos = str.indexOf( '/' );
    if( pos !== -1 ){

        let val = str.slice( 0, pos );
        let remVal = str.slice( pos );

        for( let i = 0; i < partOfSpeechList.length; i++ ){
            let { name, id } = partOfSpeechList[ i ];
            let pos_2 = val.indexOf( name );
            if( pos_2 !== -1 ){
                result.POS_id = id;
                val = val.replace( name, '' );
                break;
            };
        };

        val = val.toLowerCase();

        result.foreign = val.trim();
        result.remainder = remVal.trim();

    };

    return result;
}