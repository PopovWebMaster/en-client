
import store from './../redux/store.js';

// import { send_request_to_server } from './../helpers/send_request_to_server.js';
import { send_request_to_server } from './send_request_to_server.js';


export const save_user_lesson_result_on_server = ( params ) => {

    let {
        userResult,
        // appStepName,

    } = params;

    if( IS_DEVELOPMENT ){

        console.dir( 'params' );
        console.dir( 'вниание, записи нет' );
        console.dir( params );

    }else{
        send_request_to_server( {
            route: 'lessons/save-user-lesson-result',
            data: {
                userResult,
                // appStepName,
            },
            addKeyName: true,
            addLessonId: true,
            breakdownSending: true,

            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                    
            },
        } );  
    };



}