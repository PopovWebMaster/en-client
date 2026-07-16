
import { LANGUAGES } from './../config/languages.js';

// import store from './../redux/store.js';

export const word_transcription_is_valid = ( str ) => {

    let result = false;

    // if( LANGUAGES[ 'TRANSCRIPTION' ].regex.test( str ) ){
        if( str.length <= LANGUAGES[ 'TRANSCRIPTION' ].max ){
            result = true;
        };
    // };

    return result;

}