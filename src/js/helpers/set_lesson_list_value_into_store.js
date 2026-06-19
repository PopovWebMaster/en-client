

import store from './../redux/admin/store.js';
import { set_lesson_list_to_store } from './set_lesson_list_to_store.js';
import { setLessonListIsChanged } from './../redux/admin/lessonsSlice.js';

export const set_lesson_list_value_into_store = ( lessonId, objValues = {} ) => {

    let { lessons } = store.getState();
    let { lessonList } = lessons;

    let arr = [];

    for( let i = 0; i < lessonList.length; i++ ){
        let { id } = lessonList[ i ] ;
        let item = {};
        if( lessonId === id ){
            item = { ...lessonList[ i ], ...objValues };
        }else{
            item = { ...lessonList[ i ] };
        };

        arr.push( item );
        
    };

    set_lesson_list_to_store( arr );
    store.dispatch( setLessonListIsChanged( true ) )

}