
import store from './../redux/admin/store.js';
import storeApp from './../redux/store.js';

export const get_lessonId_for_admin = () => {
    let { lessons, userInfo } = store.getState();
    let { user_position } = userInfo;

    let result = null

    if( user_position === 'admin' ){
        let { currentLessonId } = lessons;
        result = currentLessonId;
    }else{
        let { appData } = storeApp.getState();
        let { appLessonId } = appData;
        result = appLessonId;

    };

    return result;



    // let { currentLessonId } = lessons;
    // return currentLessonId;

};