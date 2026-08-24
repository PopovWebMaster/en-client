
import store from './../redux/store.js';
import { setCurrentStepNomber } from './../redux/appDataSlice.js';


export const set_current_step_to_store = ( stepNumber ) => {

       store.dispatch( setCurrentStepNomber( stepNumber ) ); 

    

};