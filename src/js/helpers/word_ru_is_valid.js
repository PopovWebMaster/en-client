
import { LANGUAGES } from './../config/languages.js';

// import store from './../redux/store.js';

export const word_ru_is_valid = ( str ) => {

    let result = false;

    // if( LANGUAGES[ 'RU' ].regex.test( str ) ){
        if( str.length <= LANGUAGES[ 'RU' ].max ){
            result = true;
        };
    // };

    return result;

}