
import store from './../../../../../../../redux/admin/store.js';
import { setIsOpenTopicAddAlert } from './../../../../../../../redux/admin/wordsSlice.js';


export const key_up_event_for_document = () => {
    let { words  } = store.getState();
    let { CTRL_wordsIdList } = words;

    if( CTRL_wordsIdList.length > 0 ){
        store.dispatch( setIsOpenTopicAddAlert( true ) );
    };
    document.onkeyup = null;

}