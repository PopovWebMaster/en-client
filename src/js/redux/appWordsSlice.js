// appWordsSlice

import { createSlice } from '@reduxjs/toolkit';

export const appWordsSlice = createSlice({

    name: 'appWords',

    initialState: {

        appWordsList:       [], 
        appWordsListById:   {}, 



    },

    reducers: {

        setAppWordsList: ( state, action ) => { 
            state.appWordsList =  action.payload;
        },

        setAppWordsListById: ( state, action ) => { 
            state.appWordsListById =  action.payload;
        },



        
    },

})

export const {  
    setAppWordsList,
    setAppWordsListById,


   

} = appWordsSlice.actions;

export const selectorData = ( state ) => {

    return {
        appWordsList:       state.appWords.appWordsList,
        appWordsListById:   state.appWords.appWordsListById,


    };
};

export default appWordsSlice.reducer;






