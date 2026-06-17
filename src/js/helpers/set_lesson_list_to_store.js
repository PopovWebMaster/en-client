
import store from './../redux/admin/store.js';
import { setLessonList, setLessonListById, } from './../redux/admin/lessonsSlice.js';

export const set_lesson_list_to_store = ( lesson_list ) => {

    let arr = [];
    let obj = {};

    for( let i = 0; i < lesson_list.length; i++ ){
        let item = structuredClone( lesson_list[ i ] );
        let { id } = item;
        arr.push( item );
        obj[ id ] = item;
    };

    store.dispatch( setLessonList( arr ) );
    store.dispatch( setLessonListById( obj ) );

};