
import store from './../redux/admin/store.js';
import { setLessonList, setLessonListById, } from './../redux/admin/lessonsSlice.js';

export const set_lesson_list_to_store = ( lesson_list ) => {

    let arr = [];
    let obj = {};

    let last_order = 0

    let arr_0 = [];
    for( let i = 0; i < lesson_list.length; i++ ){
        let item = structuredClone( lesson_list[ i ] );
        if( item.order !== null ){
            if( item.order > last_order ){
                last_order = item.order;
            };
        };
        arr_0.push( item );
    };

    let arr_1 = [];
    for( let i = 0; i < arr_0.length; i++ ){
        let item = structuredClone( arr_0[ i ] );
        if( item.order === null ){
            item.order = last_order;
            last_order++;
        };
        arr_1.push( item );
    };

    let arr_2 = [];
    arr_2 = arr_1.sort( ( a, b ) => {
        if( a.order > b.order ){
            return 1;
        }else{
            return -1;
        };

    } );


    for( let i = 0; i < arr_2.length; i++ ){
        let item = structuredClone( arr_2[ i ] );
        let { id } = item;
        arr.push( item );
        obj[ id ] = item;
    };

    store.dispatch( setLessonList( arr ) );
    store.dispatch( setLessonListById( obj ) );

};