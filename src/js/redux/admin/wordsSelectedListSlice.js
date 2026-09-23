
import { createSlice } from '@reduxjs/toolkit';

export const wordsSelectedListSlice = createSlice({

    name: 'wordsSelectedList',

    initialState: {
        list: [],
        listByIndex: {}

        

       


    },

    reducers: {

        clearAll: ( state, action ) => {
            state.list =  [];
            state.listByIndex = {};


        },

        setList: ( state, action ) => { 
            state.list =  action.payload;
        },

        
        setListByIndex: ( state, action ) => { 
            state.listByIndex =  action.payload;
        },

       
    },

})

export const {  
    clearAll,
    setList,
    setListByIndex,


} = wordsSelectedListSlice.actions;

export const selectorData = ( state ) => {

    return {
        list: state.wordsSelectedList.list,
        listByIndex: state.wordsSelectedList.listByIndex,


        






    };
};

export default wordsSelectedListSlice.reducer;






