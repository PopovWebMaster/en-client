
import { get_icon_image_puth } from './../helpers/get_icon_image_puth.js';

export const LANGUAGES = {

    EN: {
        name: 'Английский',
        alias: 'en',
        icon: get_icon_image_puth( 'uk_flags_flag_8834.png' ),
        keyName: 'EN',
        regex: /^[a-zA-Z,.'!?:;()-\s]+$/,
        max: 80,
    },

    DE: {
        name: 'Немецкий',
        alias: 'de',
        icon: get_icon_image_puth( 'Germany_29761.png' ),
        keyName: 'DE',
        regex: /^[a-zA-Z,.'!?:;()-\s]+$/,
        max: 80,
    },

    CN: {
        name: 'Китайский',
        alias: 'cn',
        icon: get_icon_image_puth( 'cnchinaflag_111955.png' ),
        keyName: 'CN',
        regex: /^[a-zA-Z,.'!?:;()-\s]+$/,
        max: 80,
    },

    FR: {
        name: 'Французский',
        alias: 'fr',
        icon: get_icon_image_puth( 'frfranceflag_111874.png' ),
        keyName: 'FR',
        regex: /^[a-zA-Z,.'!?:;()-\s]+$/,
        max: 80,
    },


};


export const LANGUAGE_LIST = [
    /*
        Здесь список тех яхыков, которые учавствуют в сайте
    */
    { ...LANGUAGES.EN },
    { ...LANGUAGES.DE },
    { ...LANGUAGES.CN },
    { ...LANGUAGES.FR },

];

export const LANGUAGE_DEFAULT = LANGUAGES.EN;

export const LOCAL_STORAGE_KEY_NAME = 'currentLanguage';