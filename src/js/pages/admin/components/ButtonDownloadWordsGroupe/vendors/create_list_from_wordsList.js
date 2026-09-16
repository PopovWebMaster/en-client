
import store from './../../../../../redux/admin/store.js';

export const create_list_from_wordsList = ( alIsSelected = true ) => {
    let result = [];

    let { words } = store.getState();
    let { wordList } = words;

    for( let i = 0; i < wordList.length; i++ ){
        let {
            audio,
            foreign,
            id,
            part_of_speech_id,
            ru,
            transcription,
        } = wordList[ i ];

        result.push({
            isSelected: alIsSelected,
            audioLength: audio.length,
            foreign,
            id,
            part_of_speech_id,
            ru,
            transcription,
        });
    };


    return result;
};