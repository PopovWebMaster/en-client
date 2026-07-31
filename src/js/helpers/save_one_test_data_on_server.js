
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setCurrentTestIsChanged } from './../redux/admin/testsSlice.js';

export const save_one_test_data_on_server = ( callback = () => {} ) => {

    let { tests } = store.getState();
    let { 
        currentTestIsActive,
        currentTestOrder,
        currentTestLessons,
        currentTestLevelName,
        currentTestDescription,

        currentTestTitle,
        currentTestPageDescription,
        currentTestPageKeyWords,
        currentTestPageTitle,
        currentTestPageText,

    } = tests;

    send_request_to_server({
        route: 'admin/save-one-test-data',
        data: {
            testTitle:                  currentTestTitle,
            testDescription:            currentTestDescription,
            testLevelName:              currentTestLevelName,
            testIsActive:               currentTestIsActive,
            testOrder:                  currentTestOrder,
            testLessons:                currentTestLessons,
            testPageTitle:          currentTestPageTitle,
            testPageDescription:    currentTestPageDescription,
            testPageKeywords:       currentTestPageKeyWords,
            testPageText:           currentTestPageText,
        },
        addKeyName: true,
        addTestId: true,
        
        successCallback: ( resp ) => {
            console.dir( 'resp <<<<' );
            console.dir( resp );

            callback( resp );

            store.dispatch( setCurrentTestIsChanged( false ) );

        },
    }, true );


    

};