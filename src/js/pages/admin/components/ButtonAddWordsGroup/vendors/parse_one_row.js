
import { get_topic_from_row } from './get_topic_from_row.js';
import { get_word_from_row } from './get_word_from_row.js';

export const parse_one_row = ( str ) => {
    let result = {
        isTopic: false,
        topicName: '',
        isWord: false,
        numberRow: null,
        data: {
            foreign: '',
            part_of_speech_id: null,
            ru: '',
            transcription: '',
        },
    };

    let trimStr = str.trim();
    if( trimStr !== '' ){
        if( firstCharIsNumber( str ) ){
            let { number, foreign, transcription, ru, part_of_speech_id, } = get_word_from_row( str );
            if( number !== null ){
                if( foreign !== null ){
                    if( transcription !== null ){
                        if( ru !== null ){

                            result.isWord = true;
                            result.numberRow = number;

                            result.data.foreign =           foreign;
                            result.data.part_of_speech_id = part_of_speech_id;
                            result.data.ru =                ru;
                            result.data.transcription =     transcription;

                        };
                    };
                };
            };
        }else{
            let topicName = get_topic_from_row( str );
            if( topicName !== null ){
                result.isTopic = true;
                result.topicName = topicName;
            };
        }
    };


    return result;

}

function firstCharIsNumber( str ){
    return /\d/.test(str[ 0 ]);
}