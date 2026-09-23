

import { check_word_foreign_list_for_uniq_on_serer } from './../../../../../helpers/check_word_foreign_list_for_uniq_on_serer.js';


export const chack_list_for_uniq = ( list, callback ) => {

    let listOnlyForeign = [];

    for( let i = 0; i < list.length; i++ ){
        let { foreign } = list[ i ];
        let word = foreign.trim();
        
        if( word !== '' ){
            if( listOnlyForeign.indexOf( word ) === -1 ){
                listOnlyForeign.push( foreign.trim() );
            };
        };
    };
    
    const get_merged_list = ( oldList, chackedList ) => {
        let result = [];
        for( let i = 0; i < oldList.length; i++ ){
            let item = structuredClone( oldList[ i ] );
            for( let y = 0; y < chackedList.length; y++ ){
                if( chackedList[ y ].wordForeign === item.foreign ){
                    // item.repeatMessag = chackedList[ y ].message;
                    item.message = chackedList[ y ].message;

                    break;
                };
            };
            result.push( item );
        };

        return result;

    }


    check_word_foreign_list_for_uniq_on_serer({
        wordsForeignList: listOnlyForeign,
        callback: ( resp ) => {
            if( resp.ok ){
                if( resp.chackedList ){
                    let newList = get_merged_list( list, resp.chackedList );
                    callback( newList );
                }else{
                    console.dir( 'resp' );
                    console.dir( resp );
                };
            }else{
                console.dir( 'resp' );
                console.dir( resp );
            };
        }
    });

}