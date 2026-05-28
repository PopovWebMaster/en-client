
import { createSlice } from '@reduxjs/toolkit';

export const wordEditSlice = createSlice({

    name: 'wordEdit',

    initialState: {
        word_en: '', // не использовать
        word_foreign: '', 

        word_ru: '',
        transcription: '',
        files: [],

        // FileList: [],
        

       


    },

    reducers: {

        clearWordEdit: ( state, action ) => {
            state.word_en =  '';
            state.word_foreign =  '';
            state.word_ru =  '';
            state.transcription =  '';
            state.files = [];
            // state.FileList = [];


        },

        setWordEn: ( state, action ) => { // не использовать
            state.word_en =  action.payload;
        },

        setWordForeign: ( state, action ) => { // не использовать
            state.word_foreign =  action.payload;
        },


        setWordRu: ( state, action ) => {
            state.word_ru =  action.payload;
        },

        setTranscription: ( state, action ) => {
            state.transcription =  action.payload;
        },

        setFiles: ( state, action ) => {
            state.files =  action.payload;
        },


        

        // setFileList: ( state, action ) => {
        //     state.FileList =  action.payload;
        // },


        
    },

})

export const {  
    clearWordEdit,
    setWordEn,// не использовать
    setWordForeign,
    setWordRu,
    setTranscription,
    setFiles,
    // setFileList,

   
   

} = wordEditSlice.actions;

export const selectorData = ( state ) => {

    return {
        word_en:                  state.wordEdit.word_en,
        word_foreign:             state.wordEdit.word_foreign,
        word_ru:                  state.wordEdit.word_ru,
        transcription:            state.wordEdit.transcription,
        files:                      state.wordEdit.files,


        
        // FileList:            state.wordEdit.FileList,


        






    };
};

export default wordEditSlice.reducer;






