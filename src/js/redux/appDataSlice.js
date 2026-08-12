
import { createSlice } from '@reduxjs/toolkit';

export const appDataSlice = createSlice({

    name: 'appData',

    initialState: {

        appKeyName: '',  
        appLessonId: null,
        appTestId: null,

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

        
    },

})

export const {  
    setAppKeyName,
    setAppLessonId,
    setAppTestId,



   

} = appDataSlice.actions;

export const selectorData = ( state ) => {

    return {
        appKeyName:     state.appData.appKeyName,
        appLessonId:    state.appData.appLessonId,
        appTestId:      state.appData.appTestId,




    };
};

export default appDataSlice.reducer;






