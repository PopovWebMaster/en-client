
import { send_request_to_server } from './../../../../../../../../../helpers/send_request_to_server.js';

export const get_free_words_list_from_server = ( callback ) => {

    send_request_to_server( {
        route: 'admin/get-free-words-list',
        data: {},
        addKeyName: true,

        successCallback: ( resp ) => {

            if( resp.ok ){
                if( resp.wordList ){

                    let list = get_list_from_wordList( resp.wordList );
                    callback( list );

                };
            };

        },
    }, true );


    

};

function get_list_from_wordList( arr ){
    let result = [];

    for( let i = 0; i < arr.length; i++ ){
        let item = structuredClone( arr[ i ] );
        item.isSelected = false;

        result.push( item );

    };

    let arr_sort = result.sort( ( a, b ) => {
        if( a.foreign > b.foreign ){
            return 1;
        }else{
            return -1;
        };

    } );



    return arr_sort;
      
}