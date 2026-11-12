
import store from './../../../../../../../../redux/admin/store.js';

export const get_arr_sort_by_topics = ( wordList ) => {

    let arr = structuredClone( wordList );

    let { appWords } = store.getState();
    let { topicsListById } = appWords;

    let result = [];
    
    if( arr[ 0 ] ){
        if( arr[ 0 ].topic_id === null ){
            result = arr.sort( ( a, b ) => {
                if( a.topic_id === null && b.topic_id !== null ){
                    return 1;
                }else{
                    if( a.topic_id !== null && b.topic_id !== null){
                        if( topicsListById[ a.topic_id ].name > topicsListById[ b.topic_id ].name){
                            return 1;
                        }else{
                            return -1;
                        };
                    }else{
                        return -1;
                    };
                };
            } );
        }else{
            result = arr.sort( ( a, b ) => {
                if( a.topic_id === null && b.topic_id !== null ){
                    return -1;
                }else{
                    if( a.topic_id !== null && b.topic_id !== null){
                        if( topicsListById[ a.topic_id ].name > topicsListById[ b.topic_id ].name){
                            return 1;
                        }else{
                            return -1;
                        };
                    }else{
                        return 1;
                    };
                };
            } );
        }
    };
    return result;

};