
import { createSlice } from '@reduxjs/toolkit';

export const appDataSlice = createSlice({

    name: 'appData',

    initialState: {

        appKeyName: '',  
        appLessonId: null,
        appTestId: null,

        currentStepNomber: null, // 1, 2, 3
        currentStepTask: '',
        currentProgress: 0, // 0-100

        appMessage: '',

        learnWordsList: [],
        learnWordsGroupe: [],// !!!!!!!!!
        currentGroupIndex: null, // !!!!!!!!!
        nextLearnWordsIndex: 0,// !!!!!!!!!

        currentLearnWordId: null,
        currentLearnForeign: '',
        currentLearnRu: '',
        currentLearnTranscription: '',

        learnIsStarted: false,// !!!!!!!!!


    },

    reducers: {

        setAppKeyName: ( state, action ) => { 
            state.appKeyName =  action.payload;
        },

        setAppLessonId: ( state, action ) => { 
            state.appLessonId =  action.payload;
        },

        setAppTestId: ( state, action ) => { 
            state.appTestId =  action.payload;
        },

        setCurrentStepNomber: ( state, action ) => { 
            state.currentStepNomber =  action.payload;
        },

        setCurrentStepTask: ( state, action ) => { 
            state.currentStepTask =  action.payload;
        },

        setCurrentProgress: ( state, action ) => { 
            state.currentProgress =  action.payload;
        },

        setAppMessage: ( state, action ) => { 
            state.appMessage =  action.payload;
        },

        setLearnWordsList: ( state, action ) => { 
            state.learnWordsList =  action.payload;
        },

        setLearnWordsGroupe: ( state, action ) => { 
            state.learnWordsGroupe =  action.payload;
        },

        setCurrentGroupIndex: ( state, action ) => { 
            state.currentGroupIndex =  action.payload;
        },

        setNextLearnWordsIndex: ( state, action ) => { 
            state.nextLearnWordsIndex =  action.payload;
        },


        setCurrentLearnWordId: ( state, action ) => { 
            state.currentLearnWordId =  action.payload;
        },
        setCurrentLearnForeign: ( state, action ) => { 
            state.currentLearnForeign =  action.payload;
        },
        setCurrentLearnRu: ( state, action ) => { 
            state.currentLearnRu =  action.payload;
        },
        setCurrentLearnTranscription: ( state, action ) => { 
            state.currentLearnTranscription =  action.payload;
        },

        setLearnIsStarted: ( state, action ) => { 
            state.learnIsStarted =  action.payload;
        },


        

        
    },

})

export const {  
    setAppKeyName,
    setAppLessonId,
    setAppTestId,

    setCurrentStepNomber,
    setCurrentStepTask,
    setCurrentProgress,
    setAppMessage,
    setLearnWordsList,

    setLearnWordsGroupe,
    setCurrentGroupIndex,
    setNextLearnWordsIndex,

    setCurrentLearnWordId,
    setCurrentLearnForeign,
    setCurrentLearnRu,
    setCurrentLearnTranscription,
    setLearnIsStarted,


   

} = appDataSlice.actions;

export const selectorData = ( state ) => {

    return {
        appKeyName:     state.appData.appKeyName,
        appLessonId:    state.appData.appLessonId,
        appTestId:      state.appData.appTestId,

        currentStepNomber: state.appData.currentStepNomber,
        currentStepTask: state.appData.currentStepTask,
        currentProgress: state.appData.currentProgress,

        appMessage: state.appData.appMessage,

        learnWordsList: state.appData.learnWordsList,
        learnWordsGroupe: state.appData.learnWordsGroupe,
        currentGroupIndex: state.appData.currentGroupIndex,
        nextLearnWordsIndex: state.appData.nextLearnWordsIndex,


        currentLearnWordId: state.appData.currentLearnWordId,
        currentLearnForeign: state.appData.currentLearnForeign,
        currentLearnRu: state.appData.currentLearnRu,
        currentLearnTranscription: state.appData.currentLearnTranscription,
        learnIsStarted: state.appData.learnIsStarted,


        








    };
};

export default appDataSlice.reducer;






