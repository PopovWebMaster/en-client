
import { make_fit_format_word_en } from './../../../../../../../../../helpers/make_fit_format_word_en.js';
import { make_fit_format_word_ru } from './../../../../../../../../../helpers/make_fit_format_word_ru.js';
import { make_fit_format_transcription } from './../../../../../../../../../helpers/make_fit_format_transcription.js';

import store from './../../../../../../../../../redux/admin/store.js';


export const get_prepared_data = ( data ) => {
    let {
        files,
        word_en,
        word_foreign,
        word_ru,
        transcription,
    } = data;

    let { language } = store.getState();
    let { languageKeyName } = language;

    let result = {
        files: [ ...files ],
        word_foreign: null,
        word_ru: make_fit_format_word_ru( word_ru ),
        transcription: make_fit_format_transcription( transcription ),
        keyName: languageKeyName,
    };

    if( languageKeyName === 'EN' ){
        result.word_foreign = make_fit_format_word_en( word_foreign );
    }else{
        console.error( 'get_prepared_data' );
        console.error( 'не прописан метод получения данных для '+ languageKeyName );

    };

   



    return result;



};