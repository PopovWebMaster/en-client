
import store from './../redux/admin/store.js';
import { setCurrentLessonId } from './../redux/admin/lessonsSlice.js';

export const set_lesson_id_to_store = ( lessonId ) => {
    store.dispatch( setCurrentLessonId( lessonId ) );

};