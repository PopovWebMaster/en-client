
import { createSlice } from '@reduxjs/toolkit';

export const wordEditSlice = createSlice({

    name: 'wordEdit',

    initialState: {
        word_en: '',
        word_ru: '',
        transcription: '',

        // FileList: [],
        

       


    },

    reducers: {

        clearWordEdit: ( state, action ) => {
            state.word_en =  '';
            state.word_ru =  '';
            state.transcription =  '';
            // state.FileList = [];


        },

        setWordEn: ( state, action ) => {
            state.word_en =  action.payload;
        },

        setWordRu: ( state, action ) => {
            state.word_ru =  action.payload;
        },

        setTranscription: ( state, action ) => {
            state.transcription =  action.payload;
        },

        // setFileList: ( state, action ) => {
        //     state.FileList =  action.payload;
        // },


        
    },

})

export const {  
    clearWordEdit,
    setWordEn,
    setWordRu,
    setTranscription,
    // setFileList,

   
   

} = wordEditSlice.actions;

export const selectorData = ( state ) => {

    return {
        word_en:                  state.wordEdit.word_en,
        word_ru:                  state.wordEdit.word_ru,
        transcription:            state.wordEdit.transcription,
        // FileList:            state.wordEdit.FileList,


        






    };
};

export default wordEditSlice.reducer;






