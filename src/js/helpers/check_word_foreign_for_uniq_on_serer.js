
import { send_request_to_server } from './send_request_to_server.js';
import store from './../redux/admin/store.js';

export const check_word_foreign_for_uniq_on_serer = ( params ) => {

    let {
        word_foreign,
        callback 
    } = params;

    let { language } = store.getState();
    let { languageKeyName } = language;

    send_request_to_server({
        route: 'admin/chack-word-foreign-for-uniq',
        data: {
            word_foreign,
            keyName: languageKeyName,

        },
        successCallback: ( response ) => {
            if( response.ok ){
                console.dir( 'response' );
                console.dir( response );
 
            }else{
                console.dir('admin/chack-word-foreign-for-uniq');
                console.dir( response );
            };

            callback( response );
            
        },
        errorCallback: () => {
            
        },
    });

};