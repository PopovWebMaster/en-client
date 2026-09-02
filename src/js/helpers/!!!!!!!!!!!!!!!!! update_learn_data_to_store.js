
import store from './../redux/store.js';
import { setLearnWordsGroupe, setNextLearnWordsIndex, setCurrentGroupIndex, setLearnIsStarted } from './../redux/appDataSlice.js';
import { update_learn_words_list_to_store } from './update_learn_words_list_to_store.js';

export const update_learn_data_to_store = () => {

    
    /*
    
    Устарела не брать
    
    */

    let { settings } = store.getState();
    let { repeatCircleLength } = settings;

    let learn_words_list = update_learn_words_list_to_store();

    let group_list = [];
    let nextLearnWordsIndex = 0;

    for( let i = 0; i < learn_words_list.length; i++ ){

        if( i < repeatCircleLength ){
            let item = structuredClone( learn_words_list[ i ] );
            group_list.push( item );

            if( learn_words_list[ nextLearnWordsIndex + 1 ]){
                nextLearnWordsIndex = nextLearnWordsIndex + 1;
            };
        }else{
            break;
        };
    };

    console.dir('<<<<<<<<<<');
    console.dir({
        group_list,
        nextLearnWordsIndex
    });


    store.dispatch( setLearnWordsGroupe( group_list ) );
    store.dispatch( setNextLearnWordsIndex( nextLearnWordsIndex ) );
    store.dispatch( setCurrentGroupIndex( 0 ) );
    store.dispatch( setLearnIsStarted( true ) );



};