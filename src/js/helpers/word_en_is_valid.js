
import { MAX_LENGTH, REGEX } from './../config/words';

export const word_en_is_valid = ( str ) => {
    let result = false;

    // устарела, не использовать

    // if( REGEX.EN.test( str ) ){
        if( str.length <= MAX_LENGTH.EN ){
            result = true;
        };
    // };

    return result;

}