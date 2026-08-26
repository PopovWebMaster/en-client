
import store from './../../../redux/store.js';
import { setShowStatus } from './../../../redux/appControlSlise.js';
 
import { textPlace_DOM_controller } from './textPlace_DOM_controller.js';
import { set_current_step_to_store } from './../../../helpers/set_current_step_to_store.js';

export const add_event_click_into_buttonStart = () => {

    let btn = document.getElementById( 'buttonStartApp' );
    if( btn ){
        let elem = document.getElementById( 'textPlace' );

        if( elem ){

            btn.onclick = () => {
                textPlace_DOM_controller.hide();
                store.dispatch( setShowStatus( true ) );
                set_current_step_to_store( 1 );
            };

        }else{
            console.error( 'не найден елемент с id="textPlace"' );
        };
    }else{
        console.error( 'не найден елемент с id="buttonStartApp"' );
    };

   
    
}