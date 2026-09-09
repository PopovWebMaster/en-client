
import store from './../redux/admin/store.js';
import storeApp from './../redux/store.js';

import { 
    setPartOfSpeechList,
    setPartOfSpeechListById,

} from './../redux/appWordsSlice.js';

export const set_part_of_speech_list_to_store = ( partOfSpeechList ) => {

    let { userInfo } = store.getState();
    let { user_position } = userInfo;

    let arr = [];
    let obj = {};

    for( let i = 0; i < partOfSpeechList.length; i++ ){
        let { id, name } = partOfSpeechList[ i ];
        let item = { id, name };
        arr.push( item );
        obj[ id ] = item

    };

    if( user_position === 'admin' ){
        store.dispatch( setPartOfSpeechList( arr ) );
        store.dispatch( setPartOfSpeechListById( obj ) );
    }else{
        storeApp.dispatch( setPartOfSpeechList( arr ) );
        storeApp.dispatch( setPartOfSpeechListById( obj ) );
        
    };
    

}