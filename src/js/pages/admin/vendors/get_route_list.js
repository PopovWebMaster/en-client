
import { ADMIN_ROUTES } from './../config/routes.js';

export const get_route_list = () => {
    let arr = Object.keys( ADMIN_ROUTES );

    let arr_items = [];

    for( let i = 0; i < arr.length; i++ ){
        arr_items.push( { ...ADMIN_ROUTES[ arr[ i ] ] } );
    };

    let result = arr_items.sort( ( a, b ) => {
        if( a.INDEX > b.INDEX ){
            return -1;
        }else{
            return 1;
        };
    } );

    return result;
};