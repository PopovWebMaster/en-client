
import store from './../../../../../../../redux/admin/store.js';

export const get_words_list_without_one_word = ( wordId ) => {

    let { words } = store.getState();
    let { wordList } = words;

    let result = [];

    for( let i = 0; i < wordList.length; i++ ){
        let item = structuredClone( wordList[ i ] );
        if( item.id !== wordId ){
            result.push( item );
        };
    };



    return result;

};