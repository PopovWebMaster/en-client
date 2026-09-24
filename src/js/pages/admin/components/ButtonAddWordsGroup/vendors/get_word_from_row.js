

import { extract_number } from './extract_number.js';
import { extract_foreign_and_POS } from './extract_foreign_and_POS.js';
import { extract_transcription } from './extract_transcription.js';

export const get_word_from_row = ( str ) => {

    let result = {
        number: null,
        foreign: null,
        transcription: null,
        ru: null,
        part_of_speech_id: null,
    }

    let { number, remainder } = extract_number( str );
    if( number !== null ){
        result.number = number;

        let foreignRes = extract_foreign_and_POS( remainder );
        if( foreignRes.foreign !== null ){
            result.foreign =            foreignRes.foreign;
            result.part_of_speech_id =  foreignRes.POS_id;

            let transRes = extract_transcription( foreignRes.remainder );
            if( transRes !== null ){
                result.transcription = transRes.transcription;

                let rem = transRes.remainder;
                if( rem !== null ){
                    result.ru = rem.toLowerCase();
                };
            };
        };
    };

    return result;
}