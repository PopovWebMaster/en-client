
import { LANGUAGE_DEFAULT, LANGUAGES, LOCAL_STORAGE_KEY_NAME, LANGUAGE_LIST } from './../config/languages.js';
import { set_language_info_into_localStorage } from './set_language_info_into_localStorage.js';

export const get_language_info_from_localStorage = () => {

    let result = {
        alias: '',
        name: '',
        icon: '',
        keyName: '',
    };


    let keyName = localStorage.getItem( LOCAL_STORAGE_KEY_NAME );

    if( keyName ){
        let isActual = false;
        for( let i = 0; i < LANGUAGE_LIST.length; i++ ){
            if( LANGUAGE_LIST[ i ].keyName === keyName ){
                isActual = true;
                break;
            };
        };

        if( isActual ){
            result.alias = LANGUAGES[ keyName ].alias;
            result.name = LANGUAGES[ keyName ].name;
            result.icon = LANGUAGES[ keyName ].icon;
            result.keyName = LANGUAGES[ keyName ].keyName;
        }else{

            result.alias = LANGUAGE_DEFAULT.alias;
            result.name = LANGUAGE_DEFAULT.name;
            result.icon = LANGUAGE_DEFAULT.icon;
            result.keyName = LANGUAGE_DEFAULT.keyName;

            set_language_info_into_localStorage( LANGUAGE_DEFAULT.keyName );

        };

    }else{
        result.alias = LANGUAGE_DEFAULT.alias;
        result.name = LANGUAGE_DEFAULT.name;
        result.icon = LANGUAGE_DEFAULT.icon;
        result.keyName = LANGUAGE_DEFAULT.keyName;

    };

    return result;


}