
import store from './../redux/store.js';

import { setUserSuccessList } from './../redux/appDataSlice.js';

export const set_user_success_list_to_store = ( userSuccessList ) => {

    console.dir( 'userSuccessList' );
    console.dir( userSuccessList );

    store.dispatch( setUserSuccessList( userSuccessList ) );

}