

export const get_is_ready_status = ( data ) => {
    let {
        files,
        word_en,
        word_ru,
        transcription,
    } = data;

    let result = false;

    let enTrim = word_en.trim();
    let ruTrim = word_ru.trim();

    if( enTrim !== '' ){
        if( ruTrim !== '' ){
            result = true;
        };
    };

    return result;

};