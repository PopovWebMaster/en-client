import { createSlice } from '@reduxjs/toolkit';

export const wordsSlice = createSlice({

    name: 'words',

    initialState: {

        wordList:       [], 
        wordListById:   {}, 


        wordListIsChanged: false,
        commandToSaveShanges: false,
        CTRL_wordsIdList: [],
        isOpenTopicAddAlert: false,

        wordsListSortingValue: null,

        

       


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

        setCommandToSaveShanges: ( state, action ) => {
            state.commandToSaveShanges =  action.payload;
        },


        setWordsListSortingValue: ( state, action ) => {
            state.wordsListSortingValue =  action.payload;
        },




        

        

        
    },

})

export const {  
    setWordList,
    setWordListById,
    setWordListIsChanged,
    setCTRL_wordsIdList,
    setIsOpenTopicAddAlert,
    setCommandToSaveShanges,
    setWordsListSortingValue,


   

} = wordsSlice.actions;

export const selectorData = ( state ) => {

    return {
        wordList:                  state.words.wordList,
        wordListById:                  state.words.wordListById,
        wordListIsChanged:          state.words.wordListIsChanged,
        commandToSaveShanges:          state.words.commandToSaveShanges,

        CTRL_wordsIdList:          state.words.CTRL_wordsIdList,

        isOpenTopicAddAlert: state.words.isOpenTopicAddAlert,
        wordsListSortingValue: state.words.wordsListSortingValue,


        




    };
};

export default wordsSlice.reducer;






