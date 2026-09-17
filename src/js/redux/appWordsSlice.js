// appWordsSlice

import { createSlice } from '@reduxjs/toolkit';

export const appWordsSlice = createSlice({

    name: 'appWords',

    initialState: {

        appWordsList:       [], 
        appWordsListById:   {}, 

        partOfSpeechList: [],
        partOfSpeechListById: {},

        topicsList: [],
        topicsListById: {},
        topicsLiscIsChanges: false,



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

        setTopicsList: ( state, action ) => { 
            state.topicsList =  action.payload;
        },

        setTopicsListById: ( state, action ) => { 
            state.topicsListById =  action.payload;
        },

        setTopicsLiscIsChanges: ( state, action ) => { 
            state.topicsLiscIsChanges =  action.payload;
        },




        
    },

})

export const {  
    setAppWordsList,
    setAppWordsListById,
    setPartOfSpeechList,
    setPartOfSpeechListById,

    setTopicsList,
    setTopicsListById,
    setTopicsLiscIsChanges,

   

} = appWordsSlice.actions;

export const selectorData = ( state ) => {

    return {
        appWordsList:       state.appWords.appWordsList,
        appWordsListById:   state.appWords.appWordsListById,

        partOfSpeechList:   state.appWords.partOfSpeechList,
        partOfSpeechListById:   state.appWords.partOfSpeechListById,

        topicsList:   state.appWords.topicsList,
        topicsListById:   state.appWords.topicsListById,
        topicsLiscIsChanges:   state.appWords.topicsLiscIsChanges,





    };
};

export default appWordsSlice.reducer;






