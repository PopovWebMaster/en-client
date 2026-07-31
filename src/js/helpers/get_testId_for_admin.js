
import store from './../redux/admin/store.js';

export const get_testId_for_admin = () => {
    let { tests } = store.getState();
    let { currentTestId } = tests;
    return currentTestId;

};