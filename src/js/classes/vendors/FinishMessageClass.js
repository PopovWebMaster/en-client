
import store from './../../redux/store.js';
import { setAppMessage } from './../../redux/appDataSlice.js';

export class FinishMessageClass {

    constructor(){

        this.Clear = this.Clear.bind( this );
        this.SetForStep = this.SetForStep.bind( this );


    }

    Clear(){
        store.dispatch( setAppMessage( '' ) );

    }

    SetForStep( stepNumber ){
        let { settings } = store.getState();
        let message = '';
        if( stepNumber === 1 ){
            message = settings.messageAfterStep_1;
        }else if( stepNumber === 2 ){
            message = settings.messageAfterStep_2;
        }else if( stepNumber === 3 ){
            message = settings.messageAfterStep_3;
        };
        store.dispatch( setAppMessage( message ) );

    }

}