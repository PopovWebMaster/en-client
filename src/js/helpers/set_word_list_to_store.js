
import store from './../redux/admin/store.js';
import { setWordList, setWordListById } from './../redux/admin/wordsSlice.js';

export const set_word_list_to_store = ( wordList ) => {

    let arr = [];
    let obj = {};

    for( let i = 0; i < wordList.length; i++ ){
        let item = structuredClone( wordList[ i ] );
        let { id } = item;
        arr.push( item );
        obj[ id ] = item;
    };

    store.dispatch( setWordList( arr ) );
    store.dispatch( setWordListById( obj ) );


};