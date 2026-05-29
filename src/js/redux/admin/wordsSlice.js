import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({

    name: 'words',

    initialState: {

        wordList:       [], 
        wordListById:   {}, 


        wordListIsChanged: false,

        

       


    },

    reducers: {

        setWordList: ( state, action ) => { 
            state.wordList =  action.payload;
        },

        setWordListById: ( state, action ) => { 
            state.wordListById =  action.payload;
        },

        setWordListIsChanged: ( state, action ) => {
            state.wordListIsChanged =  action.payload;
        },

        
    },

})

export const {  
    setWordList,
    setWordListById,
    setWordListIsChanged,


   

} = wordsSlice.actions;

export const selectorData = ( state ) => {

    return {
        wordList:                  state.words.wordList,
        wordListById:                  state.words.wordListById,
        wordListIsChanged:          state.words.wordListIsChanged,



    };
};

export default wordsSlice.reducer;






