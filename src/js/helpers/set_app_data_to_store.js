import store from './../redux/admin/store.js';

import { 
    setTaskForStep_1,
    setTaskForStep_2,
    setTaskForStep_3,
    setButtonNameStep_1,
    setButtonNameStep_2,
    setButtonNameStep_3,

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
        repeatCircleLength,
        correctAnswersLength,
    } = appData;


    console.dir( 'appData' );
    console.dir( appData );

    store.dispatch( setTaskForStep_1( taskForStep_1 ) );
    store.dispatch( setTaskForStep_2( taskForStep_2 ) );
    store.dispatch( setTaskForStep_3( taskForStep_3 ) );

    store.dispatch( setButtonNameStep_1( buttonNameStep_1 ) );
    store.dispatch( setButtonNameStep_2( buttonNameStep_2 ) );
    store.dispatch( setButtonNameStep_3( buttonNameStep_3 ) );
    store.dispatch( setRepeatCircleLength( repeatCircleLength ) );
    store.dispatch( setCorrectAnswersLength( correctAnswersLength ) );



}