// appWordsSlice

import { createSlice } from '@reduxjs/toolkit';

export const appWordsSlice = createSlice({

    name: 'appWords',

    initialState: {

        appWordsList:       [], 
        appWordsListById:   {}, 

        partOfSpeechList: [],
        partOfSpeechListById: {},


    },

    reducers: {

        setAppWordsList: ( state, action ) => { 
            state.appWordsList =  action.payload;
        },

        setAppWordsListById: ( state, action ) => { 
            state.appWordsListById =  action.payload;
        },

        setPartOfSpeechList: ( state, action ) => { 
            state.partOfSpeechList =  action.payload;
        },
        setPartOfSpeechListById: ( state, action ) => { 
            state.partOfSpeechListById =  action.payload;
        },






        
    },

})

export const {  
    setAppWordsList,
    setAppWordsListById,
    setPartOfSpeechList,
    setPartOfSpeechListById,

   

} = appWordsSlice.actions;

export const selectorData = ( state ) => {

    return {
        appWordsList:       state.appWords.appWordsList,
        appWordsListById:   state.appWords.appWordsListById,

        partOfSpeechList:   state.appWords.partOfSpeechList,
        partOfSpeechListById:   state.appWords.partOfSpeechListById,





    };
};

export default appWordsSlice.reducer;






