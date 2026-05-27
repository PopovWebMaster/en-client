
import { LANGUAGE_DEFAULT, LANGUAGES, LOCAL_STORAGE_KEY_NAME } from './../config/languages.js';

export const set_language_info_into_localStorage = ( keyName ) => {

    localStorage.setItem( LOCAL_STORAGE_KEY_NAME, keyName );


}