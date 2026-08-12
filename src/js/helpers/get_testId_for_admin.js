
import store from './../redux/admin/store.js';
import storeApp from './../redux/store.js';

export const get_testId_for_admin = () => {
    let { tests, userInfo } = store.getState();

    let { user_position } = userInfo;

    let result = null

    if( user_position === 'admin' ){
        let { currentTestId } = tests;
        result = currentTestId;
    }else{
        let { appData } = storeApp.getState();
        let { appTestId } = appData;
        result = appTestId;

    };

    return result;
    // let { currentTestId } = tests;
    // return currentTestId;

};