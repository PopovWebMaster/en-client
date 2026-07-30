
import store from './../redux/admin/store.js';

import { set_tests_list_to_store } from './set_tests_list_to_store.js';

import { setTestsListIsChanged } from './../redux/admin/testsSlice.js';

export const set_test_list_value_into_store = ( testId, objValues = {} ) => {

    let { tests } = store.getState();
    let { testsList } = tests;

    let arr = [];

    for( let i = 0; i < testsList.length; i++ ){
        let { id } = testsList[ i ] ;
        let item = {};
        if( testId === id ){
            item = { ...testsList[ i ], ...objValues };
        }else{
            item = { ...testsList[ i ] };
        };

        arr.push( item );
        
    };

    set_tests_list_to_store( arr );
    store.dispatch( setTestsListIsChanged( true ) )

}