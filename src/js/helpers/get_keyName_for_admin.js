
import store from './../redux/admin/store.js';

export const get_keyName_for_admin = () => {
    let { language } = store.getState();
    let { languageKeyName } = language;
    return languageKeyName;

};