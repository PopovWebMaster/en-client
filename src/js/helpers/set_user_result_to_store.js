
import store from './../redux/admin/store.js';
import { setUserResult, setUserResultByLessonId } from './../redux/appDataSlice.js';

export const set_user_result_to_store = ( userResult ) => {

    let arr = [];
    let obj = {};

    for( let i = 0; i < userResult.length; i++ ){
        let item = structuredClone( userResult[ i ] );
        let { lessonId } = item;
        arr.push( item );
        obj[ lessonId ] = item;
    };

    store.dispatch( setUserResult( arr ) );
    store.dispatch( setUserResultByLessonId( obj ) );

};