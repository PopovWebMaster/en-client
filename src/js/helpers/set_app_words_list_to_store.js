
import store from './../redux/store.js';
import { setAppWordsList, setAppWordsListById } from './../redux/appWordsSlice.js';

export const set_app_words_list_to_store = ( app_words ) => {

    let arr = [];
    let obj = {};

    for( let i = 0; i < app_words.length; i++ ){
        let item = structuredClone( app_words[ i ] );
        let { id } = item;

        let item_arr = {};
        for( let key in item ){
            if( key !== 'audio' ){
                item_arr[ key ] = item[ key ];
            };
        };

        arr.push( item_arr );
        obj[ id ] = item;
    };

    store.dispatch( setAppWordsList( arr ) );
    store.dispatch( setAppWordsListById( obj ) );

};