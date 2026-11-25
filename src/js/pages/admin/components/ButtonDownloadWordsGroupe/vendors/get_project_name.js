
import store from './../../../../../redux/admin/store.js';


export const get_project_name = ( selectedCount ) => {

    let { lessons } = store.getState();
    let { currentLessonId, currentLessonTitle } = lessons;

    let result = `${currentLessonTitle} (${selectedCount} слов)`;
    if( currentLessonId === null ){
        result = `(${selectedCount} слов)`;
    };

    return result;
};