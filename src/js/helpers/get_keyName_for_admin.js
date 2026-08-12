
import store from './../redux/admin/store.js';
import storeApp from './../redux/store.js';


export const get_keyName_for_admin = () => {
    let { language, userInfo } = store.getState();
    let { user_position } = userInfo;

    let result = null

    if( user_position === 'admin' ){
        let { languageKeyName } = language;
        result = languageKeyName;
    }else{
        let { appData } = storeApp.getState();
        let { appKeyName } = appData;
        result = appKeyName;

    };

    return result;

    // let aaa = store.getState();
    // console.dir( 'aaa <<<<<<<<<<<' );
    // console.dir( aaa );

    // let { languageKeyName } = language;
    // return languageKeyName;

};