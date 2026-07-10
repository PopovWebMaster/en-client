

import { send_request_to_server } from './../../../../../../../helpers/send_request_to_server.js';

export const get_lessons_list_from_server = ( callback ) => {

     send_request_to_server( {
            route: 'admin/get-lessons-list',
            data: {},
            addKeyName: true,
    
            successCallback: ( resp ) => {
    
                if( resp.ok ){
                    if( resp.lessonList ){
    
                        let list = get_list_from_data( resp.lessonList );
                        callback( list );
    
                    };
                };
    
            },
        }, true );
    

}

function get_list_from_data( arr ){
    let result = [];

    for( let i = 0; i < arr.length; i++ ){
        let item = structuredClone( arr[ i ] );
        item.isSelected = false;

        result.push( item );

    };

    let arr_sort = result.sort( ( a, b ) => {
        if( a.order > b.order ){
            return 1;
        }else{
            return -1;
        };

    } );



    return arr_sort;
      
}