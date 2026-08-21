
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setSettingsIsChanged } from './../redux/settingsSlice.js';


export const save_settings_data_on_server = ( callback = () => {} ) => {

    let { settings } = store.getState();
    let { 

        taskForStep_1,
        taskForStep_2,
        taskForStep_3,

        buttonNameStep_1,
        buttonNameStep_2,
        buttonNameStep_3,

        repeatCircleLength,
        correctAnswersLength,

    } = settings;

    send_request_to_server({
        route: 'admin/save-settings-data-changes',
        data: {
            taskForStep_1,
            taskForStep_2,
            taskForStep_3,

            buttonNameStep_1,
            buttonNameStep_2,
            buttonNameStep_3,

            repeatCircleLength,
            correctAnswersLength,
        },
        addKeyName: true,
        
        successCallback: ( resp ) => {
            console.dir( 'resp <<<<' );
            console.dir( resp );

            callback( resp );

            store.dispatch( setSettingsIsChanged( false ) );

        },
    }, true );
    
}