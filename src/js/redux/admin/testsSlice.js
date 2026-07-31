
import { createSlice } from '@reduxjs/toolkit';

export const testsSlice = createSlice({

    name: 'tests',

    initialState: {

        currentTestId: null, 
        currentTestIsChanged: false,

        currentTestIsActive: '',
        currentTestOrder: '',
        currentTestLessons: [],
        currentTestLevelName: '',
        currentTestDescription: '',

        currentTestWordsCount: 0,

        currentTestTitle: '',
        currentTestPageDescription: '',
        currentTestPageKeyWords: '',
        currentTestPageTitle: '',
        currentTestPageText: '',


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
        setTestsList: ( state, action ) => { 
            state.testsList =  action.payload;
        },
        setTestsListById: ( state, action ) => { 
            state.testsListById =  action.payload;
        },
        setTestsListIsChanged: ( state, action ) => { 
            state.testsListIsChanged =  action.payload;
        },
        setCurrentTestLessons: ( state, action ) => { 
            state.currentTestLessons =  action.payload;
        },
        setCurrentTestLevelName: ( state, action ) => { 
            state.currentTestLevelName =  action.payload;
        },
        setCurrentTestPageText: ( state, action ) => { 
            state.currentTestPageText =  action.payload;
        },
        setCurrentTestWordsCount: ( state, action ) => { 
            state.currentTestWordsCount =  action.payload;
        },
        setCurrentTestDescription: ( state, action ) => { 
            state.currentTestDescription =  action.payload;
        },



        

        
    },

})

export const {  
    setCurrentTestId,
    setCurrentTestIsChanged,
    setCurrentTestIsActive,
    setCurrentTestOrder,
    setCurrentTestTitle,
    setCurrentTestPageDescription,
    setCurrentTestPageKeyWords,
    setCurrentTestPageTitle,
    setTestsList,
    setTestsListById,
    setTestsListIsChanged,
    setCurrentTestLessons,
    setCurrentTestLevelName,
    setCurrentTestPageText,
    setCurrentTestWordsCount,
    setCurrentTestDescription,
   

} = testsSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentTestId:              state.tests.currentTestId,
        currentTestIsChanged:       state.tests.currentTestIsChanged,
        currentTestIsActive:        state.tests.currentTestIsActive,
        currentTestOrder:           state.tests.currentTestOrder,
        currentTestTitle:           state.tests.currentTestTitle,
        currentTestPageDescription: state.tests.currentTestPageDescription,
        currentTestPageKeyWords:    state.tests.currentTestPageKeyWords,
        currentTestPageTitle:       state.tests.currentTestPageTitle,
        testsList:                  state.tests.testsList,
        testsListById:              state.tests.testsListById,
        testsListIsChanged:         state.tests.testsListIsChanged,
        currentTestLessons:         state.tests.currentTestLessons,
        currentTestLevelName:       state.tests.currentTestLevelName,
        currentTestPageText:        state.tests.currentTestPageText,
        currentTestWordsCount:      state.tests.currentTestWordsCount,
        currentTestDescription:     state.tests.currentTestDescription,





    };
};

export default testsSlice.reducer;






