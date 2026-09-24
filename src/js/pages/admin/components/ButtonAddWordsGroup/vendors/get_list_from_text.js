
import { parse_one_row } from './parse_one_row.js';

export const get_list_from_text = ( text ) => {

    let result = {
        list: [],
        remainder: '',
    };

    console.dir( 'text' );
    console.dir( text );


    let arr = text.split( '\n' );

    let lastTopicName = '';
    let lastTopicRow = '';
    let topicRowWasUsed = false;

    
    for( let i = 0; i < arr.length; i++ ){

        let res = parse_one_row( arr[ i ] );

        if( res.isTopic === true ){

            lastTopicName = res.topicName;
            lastTopicRow = arr[ i ];
            topicRowWasUsed = false;

        }else if( res.isWord === true ){
            let {
                foreign,
                part_of_speech_id,
                ru,
                transcription,

            } = res.data;

            result.list.push({
                transcription,
                ru,
                foreign,
                audio: [],
                part_of_speech_id,
                topic_id: null,
                topic_name: lastTopicName,
                // isSelected,
                message: '',
            });

        }else{
            if( arr[ i ].trim() !== '' ){
                if( topicRowWasUsed ){
                    result.remainder = `${result.remainder}${arr[ i ]}\n`;
                }else{
                    topicRowWasUsed = true;
                    result.remainder = `${result.remainder}${lastTopicRow}\n${arr[ i ]}\n`;
                };
            }
            
        };

    }

    console.dir( 'result' );
    console.dir( result );

    return result;





}