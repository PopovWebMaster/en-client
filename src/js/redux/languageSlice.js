
import { createSlice } from '@reduxjs/toolkit';

import { get_language_info_from_localStorage } from './../helpers/get_language_info_from_localStorage.js';


let {
    alias,
    name,
    icon,
    keyName,

} = get_language_info_from_localStorage();

export const languageSlice = createSlice({

    name: 'language',

    initialState: {

        languageAlias: alias,
        languageName: name,
        languageIconPuth: icon,
        languageKeyName: keyName,


    },

    reducers: {

        setLanguageAlias: ( state, action ) => {
            state.languageAlias = action.payload;
        },

        setLanguageName: ( state, action ) => {
            state.languageName = action.payload;
        },

        setLanguageIconPuth: ( state, action ) => {
            state.languageIconPuth = action.payload;
        },

        setLanguageKeyName: ( state, action ) => {
            state.languageKeyName = action.payload;
        },

        
        

    },

})

export const {  
    setLanguageAlias,
    setLanguageName,
    setLanguageIconPuth,
    setLanguageKeyName,
   

} = languageSlice.actions;





export const selectorData = ( state ) => {
    return {
        languageAlias: state.language.languageAlias,
        languageName: state.language.languageName,
        languageIconPuth: state.language.languageIconPuth,
        languageKeyName: state.language.languageKeyName,


        



    };
};

export default languageSlice.reducer;






