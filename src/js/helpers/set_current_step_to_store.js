
import store from './../redux/store.js';
import { setCurrentStepNomber } from './../redux/appDataSlice.js';

import { send_request_to_server } from './../helpers/send_request_to_server.js';


export const set_current_step_to_store = ( stepNumber ) => {

       store.dispatch( setCurrentStepNomber( stepNumber ) ); 


       send_request_to_server( {
              route: 'lessons/get-lesson-app-data',
              data: {},
              addKeyName: true,
              addLessonId: true,
              breakdownSending: true,
              
              successCallback: ( resp ) => {
                     console.dir( 'resp' );
                     console.dir( resp );

                     
              },
       } );

       console.dir('<<<<!!!!!!>>>>>>');

    

};