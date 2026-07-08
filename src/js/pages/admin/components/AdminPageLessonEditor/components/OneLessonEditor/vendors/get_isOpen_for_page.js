
import store from './../../../../../../../redux/admin/store.js';

export const get_isOpen_for_page = () => {
    let result = true;
    let { lessons } = store.getState();
    let {
        currentPageDescription,
        currentPageKeyWords,
        currentPageText,
        currentPageTitle,
    } = lessons;

    if( currentPageDescription !== '' && currentPageKeyWords !== '' && currentPageText !== '' && currentPageTitle !== '' ){
        result = false;
    };

    return result;

};