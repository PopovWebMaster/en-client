import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({

    name: 'lessons',

    initialState: {

        currentLessonId: null, 

        

       


    },

    reducers: {

        setCurrentLessonId: ( state, action ) => { 
            state.currentLessonId =  action.payload;
        },



        
    },

})

export const {  
    setCurrentLessonId,


   

} = lessonsSlice.actions;

export const selectorData = ( state ) => {

    return {
        currentLessonId:    state.lessons.currentLessonId,



    };
};

export default lessonsSlice.reducer;






