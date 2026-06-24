import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({

    name: 'lessons',

    initialState: {

        currentLessonId: null, 
        currentLessonIsChanged: false,

        

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




        
    },

})

export const {  
    setCurrentLessonId,
    setCurrentLessonIsChanged,




    setLessonList,
    setLessonListById,
    setLessonListIsChanged,



   

} = lessonsSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentLessonId:    state.lessons.currentLessonId,
        currentLessonIsChanged:    state.lessons.currentLessonIsChanged,






        lessonList:         state.lessons.lessonList,
        lessonListById:     state.lessons.lessonListById,
        lessonListIsChanged:     state.lessons.lessonListIsChanged,





    };
};

export default lessonsSlice.reducer;






