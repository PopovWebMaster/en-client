import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({

    name: 'lessons',

    initialState: {

        currentLessonId: null, 
        currentLessonIsChanged: false,

        currentLessonDescription: '',
        currentLessonIsActive: '',
        currentLessonLevelName: '',
        currentLessonOrder: '',
        currentLessonPhrasesList: [],
        currentLessonPhrasesById: {},

        currentLessonTitle: '',
        currentPageDescription: '',
        currentPageKeyWords: '',
        currentPageText: '',
        currentPageTitle: '',


        lessonList: [],
        lessonListById: {},
        lessonListIsChanged: false,




        

       


    },

    reducers: {

        setCurrentLessonId: ( state, action ) => { 
            state.currentLessonId =  action.payload;
        },

        setLessonList: ( state, action ) => { 
            state.lessonList =  action.payload;
        },

        setLessonListById: ( state, action ) => { 
            state.lessonListById =  action.payload;
        },

        setLessonListIsChanged: ( state, action ) => { 
            state.lessonListIsChanged =  action.payload;
        },

        setCurrentLessonIsChanged: ( state, action ) => { 
            state.currentLessonIsChanged =  action.payload;
        },






        setCurrentLessonDescription: ( state, action ) => { 
            state.currentLessonDescription =  action.payload;
        },
        setCurrentLessonIsActive: ( state, action ) => { 
            state.currentLessonIsActive =  action.payload;
        },

        setCurrentLessonLevelName: ( state, action ) => { 
            state.currentLessonLevelName =  action.payload;
        },

        setCurrentLessonOrder: ( state, action ) => { 
            state.currentLessonOrder =  action.payload;
        },

        setCurrentLessonPhrasesList: ( state, action ) => { 
            state.currentLessonPhrasesList =  action.payload;
            let obj = {};
            for( let i = 0; i < action.payload.length; i++ ){
                let { id } = action.payload[ i ];
                obj[ id ] = { ...action.payload[ i ] };
            };
            state.currentLessonPhrasesById =  obj;
        },

        setCurrentLessonPhrasesById: ( state, action ) => { 
            state.currentLessonPhrasesById =  action.payload;
        },

        setCurrentLessonTitle: ( state, action ) => { 
            state.currentLessonTitle =  action.payload;
        },

        setCurrentPageDescription: ( state, action ) => { 
            state.currentPageDescription =  action.payload;
        },

        setCurrentPageKeyWords: ( state, action ) => { 
            state.currentPageKeyWords =  action.payload;
        },

        setCurrentPageText: ( state, action ) => { 
            state.currentPageText =  action.payload;
        },

        setCurrentPageTitle: ( state, action ) => { 
            state.currentPageTitle =  action.payload;
        },






        
    },

})

export const {  
    setCurrentLessonId,
    setCurrentLessonIsChanged,

    setLessonList,
    setLessonListById,
    setLessonListIsChanged,

    setCurrentLessonDescription,
    setCurrentLessonIsActive,
    setCurrentLessonLevelName,
    setCurrentLessonOrder,
    setCurrentLessonPhrasesList,
    setCurrentLessonPhrasesById,
    setCurrentLessonTitle,
    setCurrentPageDescription,
    setCurrentPageKeyWords,
    setCurrentPageText,
    setCurrentPageTitle,



   

} = lessonsSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentLessonId:            state.lessons.currentLessonId,
        currentLessonIsChanged:    state.lessons.currentLessonIsChanged,

        currentLessonDescription:   state.lessons.currentLessonDescription,
        currentLessonIsActive:      state.lessons.currentLessonIsActive,
        currentLessonLevelName:     state.lessons.currentLessonLevelName,
        currentLessonOrder:         state.lessons.currentLessonOrder,
        currentLessonPhrasesList:   state.lessons.currentLessonPhrasesList,
        currentLessonPhrasesById:   state.lessons.currentLessonPhrasesById,
        currentLessonTitle:         state.lessons.currentLessonTitle,
        currentPageDescription:     state.lessons.currentPageDescription,
        currentPageKeyWords:        state.lessons.currentPageKeyWords,
        currentPageText:            state.lessons.currentPageText,
        currentPageTitle:           state.lessons.currentPageTitle,


        lessonList:         state.lessons.lessonList,
        lessonListById:     state.lessons.lessonListById,
        lessonListIsChanged:     state.lessons.lessonListIsChanged,





    };
};

export default lessonsSlice.reducer;






