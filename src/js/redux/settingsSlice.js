
import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({

    name: 'settings',

    initialState: {

        settingsIsChanged: false,

        taskForStep_1: '',
        taskForStep_2: '',
        taskForStep_3: '',

        buttonNameStep_1: '',
        buttonNameStep_2: '',
        buttonNameStep_3: '',

        repeatCircleLength: 1,
        correctAnswersLength: 1,





    },

    reducers: {

        setSettingsIsChanged: ( state, action ) => { 
            state.settingsIsChanged =  action.payload;
        },

        setTaskForStep_1: ( state, action ) => { 
            state.taskForStep_1 =  action.payload;
        },

        setTaskForStep_2: ( state, action ) => { 
            state.taskForStep_2 =  action.payload;
        },

        setTaskForStep_3: ( state, action ) => { 
            state.taskForStep_3 =  action.payload;
        },


        setButtonNameStep_1: ( state, action ) => { 
            state.buttonNameStep_1 =  action.payload;
        },
        setButtonNameStep_2: ( state, action ) => { 
            state.buttonNameStep_2 =  action.payload;
        },
        setButtonNameStep_3: ( state, action ) => { 
            state.buttonNameStep_3 =  action.payload;
        },

        setRepeatCircleLength: ( state, action ) => { 
            state.repeatCircleLength =  action.payload;
        },
        setCorrectAnswersLength: ( state, action ) => { 
            state.correctAnswersLength =  action.payload;
        },



       
    },

})

export const {  
    setSettingsIsChanged,
    setTaskForStep_1,
    setTaskForStep_2,
    setTaskForStep_3,

    setButtonNameStep_1,
    setButtonNameStep_2,
    setButtonNameStep_3,

    setRepeatCircleLength,
    setCorrectAnswersLength,
   

} = settingsSlice.actions;

export const selectorData = ( state ) => {

    return {
        settingsIsChanged: state.settings.settingsIsChanged,

        taskForStep_1: state.settings.taskForStep_1,
        taskForStep_2: state.settings.taskForStep_2,
        taskForStep_3: state.settings.taskForStep_3,
        buttonNameStep_1: state.settings.buttonNameStep_1,
        buttonNameStep_2: state.settings.buttonNameStep_2,
        buttonNameStep_3: state.settings.buttonNameStep_3,

        repeatCircleLength: state.settings.repeatCircleLength,
        correctAnswersLength: state.settings.correctAnswersLength,





    };
};

export default settingsSlice.reducer;






