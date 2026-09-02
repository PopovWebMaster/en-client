
import store from './../../redux/store.js';
import { setAppMessage } from './../../redux/appDataSlice.js';

export class FinishMessageClass {

    constructor(){

        this.stepNumber = null;
        this.message = '';


        this.Clear = this.Clear.bind( this );
        this.Create = this.Create.bind( this );
        this.SetMessageToStore = this.SetMessageToStore.bind( this );



    }

    Clear(){
        store.dispatch( setAppMessage( '' ) );
        this.stepNumber = null;
        this.message = '';
    }

    Create( stepNumber ){
        let { settings } = store.getState();
        if( stepNumber === 1 ){
            this.message = settings.messageAfterStep_1;
        }else if( stepNumber === 2 ){
            this.message = settings.messageAfterStep_2;
        }else if( stepNumber === 3 ){
            this.message = settings.messageAfterStep_3;
        };
        this.stepNumber = stepNumber;
    }

    SetMessageToStore(){
        store.dispatch( setAppMessage( this.message ) );
    }

}