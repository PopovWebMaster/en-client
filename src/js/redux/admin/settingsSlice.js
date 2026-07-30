
import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({

    name: 'settings',

    initialState: {

        settingsIsChanged: false,

    },

    reducers: {

        setSettingsIsChanged: ( state, action ) => { 
            state.settingsIsChanged =  action.payload;
        },
       
    },

})

export const {  
    setSettingsIsChanged,
   

} = settingsSlice.actions;

export const selectorData = ( state ) => {

    return {
        settingsIsChanged: state.settings.settingsIsChanged,




    };
};

export default settingsSlice.reducer;






