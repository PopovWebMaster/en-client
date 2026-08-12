
import store from './../../../redux/store.js';
import { setShowStatus } from './../../../redux/appControlSlise.js';
 
import { textPlace_DOM_controller } from './textPlace_DOM_controller.js';

export const add_event_click_into_buttonStart = () => {

    let btn = document.getElementById( 'buttonStartApp' );
    if( btn ){
        let elem = document.getElementById( 'textPlace' );

        if( elem ){

            btn.onclick = () => {
                textPlace_DOM_controller.hide();
                store.dispatch( setShowStatus( true ) );
            };

        }else{
            console.error( 'не найден елемент с id="textPlace"' );
        };
    }else{
        console.error( 'не найден елемент с id="buttonStartApp"' );
    };

   
    
}