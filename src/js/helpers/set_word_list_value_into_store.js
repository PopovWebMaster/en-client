

import store from './../redux/admin/store.js';
import { set_word_list_to_store } from './set_word_list_to_store.js';
import { setWordListIsChanged } from './../redux/admin/wordsSlice.js';

export const set_word_list_value_into_store = ( wordId, objValues = {} ) => {

    let { words } = store.getState();
    let { wordList } = words;

    let arr = [];

    for( let i = 0; i < wordList.length; i++ ){
        let { id } = wordList[ i ] ;
        let item = {};
        if( wordId === id ){
            item = { ...wordList[ i ], ...objValues };
        }else{
            item = { ...wordList[ i ] };
        };

        arr.push( item );
        
    };

    set_word_list_to_store( arr );
    store.dispatch( setWordListIsChanged( true ) )

}