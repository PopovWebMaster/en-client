import { event_click_on_language_button } from './event_click_on_language_button.js';

export const add_event_click_to_all_lang_buttons = () => {

    let listElem = document.querySelectorAll( '.LLFOL_btn' );
    for( let i = 0; i < listElem.length; i++ ){
        let list = [ ...listElem[ i ].classList ];
        if( list.indexOf( 'isActive' ) !== -1 ){
            listElem[ i ].addEventListener( 'click', event_click_on_language_button );
        };
        
    };

};