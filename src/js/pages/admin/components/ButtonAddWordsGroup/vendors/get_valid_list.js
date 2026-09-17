
import store from './../../../../../redux/admin/store.js';

export const get_valid_list = ( arr ) => {

    let result = [];

    if( Array.isArray( arr ) ){

        let { appWords } = store.getState();
        let { partOfSpeechListById, topicsListById } = appWords;

        for( let i = 0; i < arr.length; i++ ){
            let transcription = '';
            let ru = '';
            let foreign = '';
            let audio = [];
            let part_of_speech_id = null;
            let topic_id = null;


            if( arr[ i ].transcription ){
                transcription = arr[ i ].transcription;
            };

            if( arr[ i ].ru ){
                ru = arr[ i ].ru;
            };

            if( arr[ i ].foreign ){
                foreign = arr[ i ].foreign;
            };

            if( arr[ i ].audio ){
                if(  Array.isArray( arr[ i ].audio ) ){
                    for( let y = 0; y < arr[ i ].audio.length; y++ ){
                        if( arr[ i ].audio[ y ].name ){
                            if( arr[ i ].audio[ y ].base64 ){
                                audio.push({
                                    name: arr[ i ].audio[ y ].name,
                                    base64: arr[ i ].audio[ y ].base64,
                                });
                            };
                        };
                    };
                };
            };
            if( arr[ i ].part_of_speech_id !== null ){
                if( partOfSpeechListById[ arr[ i ].part_of_speech_id ]){
                    part_of_speech_id = arr[ i ].part_of_speech_id;
                }
            };

            if( arr[ i ].topic_id !== null ){
                if( topicsListById[ arr[ i ].topic_id ]){
                    topic_id = arr[ i ].topic_id;
                }
            };



            result.push({
                transcription,
                ru,
                foreign,
                audio,
                part_of_speech_id,
            });
        };

    };

    return result;

}