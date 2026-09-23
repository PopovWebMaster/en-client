
import store from './../../../../../redux/admin/store.js';


export const get_one_item_data = ( item ) => {

    let result = {
        transcription: '',
        ru: '',
        foreign: '',
        audio: [],
        part_of_speech_id: null,
        topic_id: null,
        isSelected: true,
        message: '',
    };

    let { appWords } = store.getState();
    let { partOfSpeechListById, topicsListById } = appWords;

    if( item.transcription ){
        result.transcription = item.transcription;
    };

    if( item.ru ){
        result.ru = item.ru;
    };

    if( item.foreign ){
        result.foreign = item.foreign;
    };

    if( item.audio ){
        if(  Array.isArray( item.audio ) ){
            for( let y = 0; y < item.audio.length; y++ ){
                if( item.audio[ y ].name ){
                    if( item.audio[ y ].base64 ){
                        result.audio.push({
                            name: item.audio[ y ].name,
                            base64: item.audio[ y ].base64,
                        });
                    };
                };
            };
        };
    };

    if( item.part_of_speech_id !== null ){
        if( partOfSpeechListById[ item.part_of_speech_id ]){
            result.part_of_speech_id = item.part_of_speech_id;
        };
    };

    if( item.topic_id !== null ){
        if( topicsListById[ item.topic_id ]){
            result.topic_id = item.topic_id;
        }
    };

    if( item.message ){
        result.message = item.message;
    };

    return result;


};