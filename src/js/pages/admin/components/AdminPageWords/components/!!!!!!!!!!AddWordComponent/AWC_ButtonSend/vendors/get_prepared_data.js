
import { make_fit_format_word_en } from './../../../../../../../../helpers/make_fit_format_word_en.js';
import { make_fit_format_word_ru } from './../../../../../../../../helpers/make_fit_format_word_ru.js';
import { make_fit_format_transcription } from './../../../../../../../../helpers/make_fit_format_transcription.js';

import store from './../../../../../../../../redux/admin/store.js';


export const get_prepared_data = ( data ) => {
    let {
        files,
        word_en,
        word_ru,
        transcription,
    } = data;

    let { language } = store.getState();
    let { languageKeyName } = language;

    let result = {
        files: [ ],
        word_en: '',
        word_ru: '',
        transcription: '',
    };

    if( languageKeyName === 'EN' ){
        result = {
            files: [ ...files ],
            word_en: make_fit_format_word_en( word_en ),
            word_ru: make_fit_format_word_ru( word_ru ),
            transcription: make_fit_format_transcription( transcription ),
        };
    }

   



    return result;



};