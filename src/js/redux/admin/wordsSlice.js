import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({

    name: 'words',

    initialState: {

        wordList:       [], 
        wordListById:   {}, 


        wordListIsChanged: false,
        CTRL_wordsIdList: [],
        isOpenTopicAddAlert: false,

        

       


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

        setCTRL_wordsIdList: ( state, action ) => {
            state.CTRL_wordsIdList =  action.payload;
        },

        setIsOpenTopicAddAlert: ( state, action ) => {
            state.isOpenTopicAddAlert =  action.payload;
        },


        

        
    },

})

export const {  
    setWordList,
    setWordListById,
    setWordListIsChanged,
    setCTRL_wordsIdList,
    setIsOpenTopicAddAlert,


   

} = wordsSlice.actions;

export const selectorData = ( state ) => {

    return {
        wordList:                  state.words.wordList,
        wordListById:                  state.words.wordListById,
        wordListIsChanged:          state.words.wordListIsChanged,
        CTRL_wordsIdList:          state.words.CTRL_wordsIdList,

        isOpenTopicAddAlert: state.words.isOpenTopicAddAlert,




    };
};

export default wordsSlice.reducer;






