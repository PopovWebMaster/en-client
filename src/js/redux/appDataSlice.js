
import { createSlice } from '@reduxjs/toolkit';

export const appDataSlice = createSlice({

    name: 'appData',

    initialState: {

        appKeyName: '',  
        appLessonId: null,
        appTestId: null,

        currentStepNomber: null, // 1, 2, 3
        currentStepTask: '',
        currentProgress: 0, // 0-100

        appMessage: '',

    },

    reducers: {

        setAppKeyName: ( state, action ) => { 
            state.appKeyName =  action.payload;
        },

        setAppLessonId: ( state, action ) => { 
            state.appLessonId =  action.payload;
        },

        setAppTestId: ( state, action ) => { 
            state.appTestId =  action.payload;
        },

        setCurrentStepNomber: ( state, action ) => { 
            state.currentStepNomber =  action.payload;
        },

        setCurrentStepTask: ( state, action ) => { 
            state.currentStepTask =  action.payload;
        },

        setCurrentProgress: ( state, action ) => { 
            state.currentProgress =  action.payload;
        },

        setAppMessage: ( state, action ) => { 
            state.appMessage =  action.payload;
        },



        


        

        
    },

})

export const {  
    setAppKeyName,
    setAppLessonId,
    setAppTestId,

    setCurrentStepNomber,
    setCurrentStepTask,
    setCurrentProgress,
    setAppMessage,



   

} = appDataSlice.actions;

export const selectorData = ( state ) => {

    return {
        appKeyName:     state.appData.appKeyName,
        appLessonId:    state.appData.appLessonId,
        appTestId:      state.appData.appTestId,

        currentStepNomber: state.appData.currentStepNomber,
        currentStepTask: state.appData.currentStepTask,
        currentProgress: state.appData.currentProgress,

        appMessage: state.appData.appMessage,


        




    };
};

export default appDataSlice.reducer;






