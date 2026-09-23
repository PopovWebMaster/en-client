
import { send_request_to_server } from './send_request_to_server.js';
// import store from './../redux/admin/store.js';

export const check_word_foreign_list_for_uniq_on_serer = ( params ) => {

    let {
        wordsForeignList,
        callback 
    } = params;

    send_request_to_server({
        route: 'admin/chack-word-foreign-list-for-uniq',
        data: {
            wordsForeignList,
        },
        addKeyName: true,
        successCallback: ( response ) => {
            // if( response.ok ){
                // console.dir( 'response' );
                // console.dir( response );
 
            // }else{
            //     console.dir('admin/chack-word-foreign-for-uniq');
            //     console.dir( response );
            // };

            callback( response );
            
        },
        errorCallback: () => {
            
        },
    });

};