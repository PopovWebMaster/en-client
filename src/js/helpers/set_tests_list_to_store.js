
import store from './../redux/admin/store.js';
import {setTestsList, setTestsListById } from './../redux/admin/testsSlice.js';

export const set_tests_list_to_store = ( tests_list ) => {

    let arr = [];
        let obj = {};
    
        let last_order = 0
    
        let arr_0 = [];
        for( let i = 0; i < tests_list.length; i++ ){
            let item = structuredClone( tests_list[ i ] );
            if( item.order !== null ){
                if( item.order > last_order ){
                    last_order = item.order;
                };
            };
            arr_0.push( item );
        };
    
        let arr_1 = [];
        for( let i = 0; i < arr_0.length; i++ ){
            let item = structuredClone( arr_0[ i ] );
            if( item.order === null ){
                item.order = last_order;
                last_order++;
            };
            arr_1.push( item );
        };
    
        let arr_2 = [];
        arr_2 = arr_1.sort( ( a, b ) => {
            if( a.order > b.order ){
                return 1;
            }else{
                return -1;
            };
    
        } );
    
        let arr_3 = [];
        for( let i = 0; i < arr_2.length; i++ ){
            let item = structuredClone( arr_2[ i ] );
            item.order = i + 1;
            arr_3.push( item );
        };
    
    
        for( let i = 0; i < arr_3.length; i++ ){
            let item = structuredClone( arr_3[ i ] );
            let { id } = item;
            arr.push( item );
            obj[ id ] = item;
        };
    
        store.dispatch( setTestsList( arr ) );
        store.dispatch( setTestsListById( obj ) );

        console.dir( arr );
        console.dir( obj );

    
};