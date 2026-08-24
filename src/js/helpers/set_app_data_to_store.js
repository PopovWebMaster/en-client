// import store from './../redux/store.js';

import store from './../redux/admin/store.js';
import storeApp from './../redux/store.js';

import { 
    setTaskForStep_1,
    setTaskForStep_2,
    setTaskForStep_3,
    setButtonNameStep_1,
    setButtonNameStep_2,
    setButtonNameStep_3,

        
    setMessageAfterStep_1,
    setMessageAfterStep_2,
    setMessageAfterStep_3,

    setRepeatCircleLength,
    setCorrectAnswersLength,
} from './../redux/settingsSlice.js';


export const set_app_data_to_store = ( appData ) => {
    let {
        taskForStep_1,
        taskForStep_2,
        taskForStep_3,

        buttonNameStep_1,
        buttonNameStep_2,
        buttonNameStep_3,
        
        messageAfterStep_1,
        messageAfterStep_2,
        messageAfterStep_3,

        repeatCircleLength,
        correctAnswersLength,
    } = appData;
    console.dir( 'appData' );
    console.dir( appData );

    let { userInfo } = store.getState();
    let { user_position } = userInfo;



    if( user_position === 'admin' ){
        store.dispatch( setTaskForStep_1( taskForStep_1 ) );
        store.dispatch( setTaskForStep_2( taskForStep_2 ) );
        store.dispatch( setTaskForStep_3( taskForStep_3 ) );

        store.dispatch( setButtonNameStep_1( buttonNameStep_1 ) );
        store.dispatch( setButtonNameStep_2( buttonNameStep_2 ) );
        store.dispatch( setButtonNameStep_3( buttonNameStep_3 ) );

        store.dispatch( setMessageAfterStep_1( messageAfterStep_1 ) );
        store.dispatch( setMessageAfterStep_2( messageAfterStep_2 ) );
        store.dispatch( setMessageAfterStep_3( messageAfterStep_3 ) );
        store.dispatch( setRepeatCircleLength( repeatCircleLength ) );
        store.dispatch( setCorrectAnswersLength( correctAnswersLength ) );

    }else{

        storeApp.dispatch( setTaskForStep_1( taskForStep_1 ) );
        storeApp.dispatch( setTaskForStep_2( taskForStep_2 ) );
        storeApp.dispatch( setTaskForStep_3( taskForStep_3 ) );

        storeApp.dispatch( setButtonNameStep_1( buttonNameStep_1 ) );
        storeApp.dispatch( setButtonNameStep_2( buttonNameStep_2 ) );
        storeApp.dispatch( setButtonNameStep_3( buttonNameStep_3 ) );

        storeApp.dispatch( setMessageAfterStep_1( messageAfterStep_1 ) );
        storeApp.dispatch( setMessageAfterStep_2( messageAfterStep_2 ) );
        storeApp.dispatch( setMessageAfterStep_3( messageAfterStep_3 ) );


        storeApp.dispatch( setRepeatCircleLength( repeatCircleLength ) );
        storeApp.dispatch( setCorrectAnswersLength( correctAnswersLength ) );

    };
    





}