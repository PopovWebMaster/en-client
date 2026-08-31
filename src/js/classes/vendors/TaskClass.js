
import store from './../../redux/store.js';
import { setCurrentStepTask } from './../../redux/appDataSlice.js';

export class TaskClass {

    constructor(){
        this.Clear = this.Clear.bind( this );
        this.SetForStep = this.SetForStep.bind( this );
    }

    Clear(){
        store.dispatch( setCurrentStepTask( '' ) );

    }

    SetForStep( stepNumber ){
        let { settings } = store.getState();
        let message = '';
        if( stepNumber === 1 ){
            message = settings.taskForStep_1;
        }else if( stepNumber === 2 ){
            message = settings.taskForStep_2;
        }else if( stepNumber === 3 ){
            message = settings.taskForStep_3;
        };
        store.dispatch( setCurrentStepTask( message ) );

    }
}