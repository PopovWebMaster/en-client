
import { get_parent_container } from './get_parent_container.js';

export const set_focus_for_input = ( elem, where = 'next' ) => { // where = 'next' preview

    let parent = get_parent_container( elem );

    // document.querySelectorAll( '.OC_Input_inp' );

    let listElem = parent.querySelectorAll( '.OC_Input_inp' );


    for( let i = 0; i < listElem.length; i++ ){
        if( listElem[ i ] === elem ){

            if( where === 'next' ){
                if( listElem[ i + 1 ] ){
                    listElem[ i + 1 ].focus();
                }else{
                    // elem.blur();
                };

            }else if( where === 'preview' ){
                if( listElem[ i - 1 ]){
                    listElem[ i - 1 ].focus();
                }else{

                };

            };

        }

    }
}