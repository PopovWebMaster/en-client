import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({

    name: 'lessons',

    initialState: {

        currentLessonId: null, 

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




        
    },

})

export const {  
    setCurrentLessonId,
    setLessonList,
    setLessonListById,
    setLessonListIsChanged,



   

} = lessonsSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentLessonId:    state.lessons.currentLessonId,
        lessonList:         state.lessons.lessonList,
        lessonListById:     state.lessons.lessonListById,
        lessonListIsChanged:     state.lessons.lessonListIsChanged,





    };
};

export default lessonsSlice.reducer;






