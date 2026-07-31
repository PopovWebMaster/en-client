
import { send_request_to_server } from './../../../../../../../../../helpers/send_request_to_server.js';
import { get_list_with_isChecked } from './get_list_with_isChecked.js';

export const get_lessons_list_from_server = ( callback = () => {} ) => {
    send_request_to_server( {
        route: 'admin/get-all-lessons-list-for-test',
        data: {},
        addKeyName: true,
        addTestId: true,
        successCallback: ( resp ) => {
            console.dir( 'resp' );
            console.dir( resp );

            if( resp.ok ){
                callback( get_list_with_isChecked( resp.lessonsForTest ) );
            }; 
        },

    }, true );
};