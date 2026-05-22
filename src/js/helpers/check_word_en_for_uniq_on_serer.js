
import { send_request_to_server } from './send_request_to_server.js';

export const check_word_en_for_uniq_on_serer = ( params ) => {

    let {
        word_en,
        callback 
    } = params;

    send_request_to_server({
        route: 'admin/chack-word-en-for-uniq',
        data: {
            word_en,
        },
        successCallback: ( response ) => {
            if( response.ok ){
                callback( response );
            }else{
                console.error('admin/chack-word-en-for-uniq');
                console.dir( response );
            };
            
        },
        errorCallback: () => {},
    });

};