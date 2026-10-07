
// import store from './../redux/store.js';

// import { send_request_to_server } from './../helpers/send_request_to_server.js';
import { send_request_to_server } from './send_request_to_server.js';
import { set_user_result_to_store } from './set_user_result_to_store.js';


export const save_user_lesson_result_on_server = ( params ) => {

    let {
        userResult,
        // appStepName,

    } = params;

    send_request_to_server( {
        route: 'lessons/save-user-lesson-result',
        data: {
            userResult,
        },
        addKeyName: true,
        addLessonId: true,
        breakdownSending: true,

        successCallback: ( resp ) => {
            // console.dir( 'resp' );
            // console.dir( resp );

            if( resp.ok ){
                if( resp.userResult ){
                    set_user_result_to_store( resp.userResult );
                };
            };
                
        },
    } );  



}