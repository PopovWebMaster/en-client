
import store from './../redux/admin/store.js';

export const get_lessonId_for_admin = () => {
    let { lessons } = store.getState();
    let { currentLessonId } = lessons;
    return currentLessonId;

};