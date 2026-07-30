import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setTestsListIsChanged } from './../redux/admin/testsSlice.js';


export const save_tests_data_on_server = ( callback = () => {} ) => {
    let { tests } = store.getState();
    let { 
        testsList
    } = tests;

    send_request_to_server({
            route: 'admin/save-tests-changes',
            data: {
                testsList
            },
            addKeyName: true,
            
            successCallback: ( resp ) => {
                console.dir( 'resp <<<<' );
                console.dir( resp );
    
                callback( resp );
    
                store.dispatch( setTestsListIsChanged( false ) );
    
            },
        }, true );
};