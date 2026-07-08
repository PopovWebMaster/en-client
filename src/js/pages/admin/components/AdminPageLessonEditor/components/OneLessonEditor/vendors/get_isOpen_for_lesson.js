
import store from './../../../../../../../redux/admin/store.js';

export const get_isOpen_for_lesson = () => {
    let result = true;
    let { lessons } = store.getState();
    let {
        currentLessonDescription,
        currentLessonLevelName,
        currentLessonTitle,
    } = lessons;

    if( currentLessonDescription !== '' && currentLessonLevelName !== '' && currentLessonTitle !== '' ){
        result = false;
    };

    return result;

};