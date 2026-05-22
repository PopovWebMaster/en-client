
// import { ADMIN_ROUTES } from './../config/routes.js';
import { ADMIN_ROUTES } from './../config/routes.js';

let count = 0;

export const get_new_route = ( params ) => {
    let {
        route,
        title,
        icon = '',
        name,
    } = params;

    /*
        ИСПОЛЬЗОВАТЬ ТОЛЬКО В 
        ...pages\admin\config\routes.js
    */

    let index = count;
    count++;

    return {
        ROUTE:  route,
        NAME:   name,
        TITLE:  title,
        ICON:   icon,
        
        index,
    };

};