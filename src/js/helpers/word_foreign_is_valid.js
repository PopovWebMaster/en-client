
import { LANGUAGES } from './../config/languages.js';

import store from './../redux/store.js';

export const word_foreign_is_valid = ( str ) => {
    let result = false;
    let { language } = store.getState();
    let { languageKeyName } = language;

    // if( LANGUAGES[ languageKeyName ].regex.test( str ) ){
        if( str.length <= LANGUAGES[ languageKeyName ].max ){
            result = true;
        };
    // };

    return result;

}