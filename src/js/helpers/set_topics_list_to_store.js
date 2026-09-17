
import store from './../redux/admin/store.js';
import storeApp from './../redux/store.js';

import { 
    setTopicsList,
    setTopicsListById,

} from './../redux/appWordsSlice.js';

export const set_topics_list_to_store = ( topicsList ) => {

    let { userInfo } = store.getState();
    let { user_position } = userInfo;

    let arr = [];
    let obj = {};

    for( let i = 0; i < topicsList.length; i++ ){
        let { id, name } = topicsList[ i ];
        let item = { id, name };
        arr.push( item );
        obj[ id ] = item

    };

    let arr_sort = arr.sort( ( a, b ) => {
        if( a.name > b.name ){
            return 1;
        }else{
            return -1;
        };
    } );

    if( user_position === 'admin' ){
        store.dispatch( setTopicsList( arr_sort ) );
        store.dispatch( setTopicsListById( obj ) );
    }else{
        storeApp.dispatch( setTopicsList( arr_sort ) );
        storeApp.dispatch( setTopicsListById( obj ) );
        
    };
    

}