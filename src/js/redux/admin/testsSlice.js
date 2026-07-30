
import { createSlice } from '@reduxjs/toolkit';

export const testsSlice = createSlice({

    name: 'tests',

    initialState: {

        currentTestId: null, 
        currentTestIsChanged: false,

        currentTestIsActive: '',
        currentTestOrder: '',
        currentTestPhrasesList: [],
        currentTestPhrasesById: {},

        currentTestTitle: '',
        currentTestPageDescription: '',
        currentTestPageKeyWords: '',
        currentTestPageTitle: '',
        currentTestPageHeader: '',


        testsList: [],
        testsListById: {},
        testsListIsChanged: false,

    },

    reducers: {

        setCurrentTestId: ( state, action ) => { 
            state.currentTestId =  action.payload;
        },
        setCurrentTestIsChanged: ( state, action ) => { 
            state.currentTestIsChanged =  action.payload;
        },
        setCurrentTestIsActive: ( state, action ) => { 
            state.currentTestIsActive =  action.payload;
        },
        setCurrentTestOrder: ( state, action ) => { 
            state.currentTestOrder =  action.payload;
        },
        setCurrentTestPhrasesList: ( state, action ) => { 
            state.currentTestPhrasesList =  action.payload;
        },
        setCurrentTestPhrasesById: ( state, action ) => { 
            state.currentTestPhrasesById =  action.payload;
        },
        setCurrentTestTitle: ( state, action ) => { 
            state.currentTestTitle =  action.payload;
        },
        setCurrentTestPageDescription: ( state, action ) => { 
            state.currentTestPageDescription =  action.payload;
        },
        setCurrentTestPageKeyWords: ( state, action ) => { 
            state.currentTestPageKeyWords =  action.payload;
        },
        setCurrentTestPageTitle: ( state, action ) => { 
            state.currentTestPageTitle =  action.payload;
        },
        setCurrentTestPageHeader: ( state, action ) => { 
            state.currentTestPageHeader =  action.payload;
        },
        setTestsList: ( state, action ) => { 
            state.testsList =  action.payload;
        },
        setTestsListById: ( state, action ) => { 
            state.testsListById =  action.payload;
        },
        setTestsListIsChanged: ( state, action ) => { 
            state.testsListIsChanged =  action.payload;
        },

        
    },

})

export const {  
    setCurrentTestId,
    setCurrentTestIsChanged,
    setCurrentTestIsActive,
    setCurrentTestOrder,
    setCurrentTestPhrasesList,
    setCurrentTestPhrasesById,
    setCurrentTestTitle,
    setCurrentTestPageDescription,
    setCurrentTestPageKeyWords,
    setCurrentTestPageTitle,
    setCurrentTestPageHeader,
    setTestsList,
    setTestsListById,
    setTestsListIsChanged,
   

} = testsSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentTestId:              state.tests.currentTestId,
        currentTestIsChanged:       state.tests.currentTestIsChanged,
        currentTestIsActive:        state.tests.currentTestIsActive,
        currentTestOrder:           state.tests.currentTestOrder,
        currentTestPhrasesList:     state.tests.currentTestPhrasesList,
        currentTestPhrasesById:     state.tests.currentTestPhrasesById,
        currentTestTitle:           state.tests.currentTestTitle,
        currentTestPageDescription: state.tests.currentTestPageDescription,
        currentTestPageKeyWords:    state.tests.currentTestPageKeyWords,
        currentTestPageTitle:       state.tests.currentTestPageTitle,
        currentTestPageHeader:      state.tests.currentTestPageHeader,
        testsList:                   state.tests.testsList,
        testsListById:               state.tests.testsListById,
        testsListIsChanged:          state.tests.testsListIsChanged,




    };
};

export default testsSlice.reducer;






