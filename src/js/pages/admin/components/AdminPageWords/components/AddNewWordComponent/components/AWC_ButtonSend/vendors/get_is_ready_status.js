

export const get_is_ready_status = ( data ) => {
    let {
        files,
        word_foreign,
        word_ru,
        transcription,
    } = data;

    let result = false;

    let foreignTrim = word_foreign.trim();
    let ruTrim = word_ru.trim();

    if( foreignTrim !== '' ){
        if( ruTrim !== '' ){
            result = true;
        };
    };

    return result;

};