import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice                from './userInfoSlice.js';
// import adminSlice                   from './adminSlice.js';
import languageSlice from './languageSlice.js';


export default configureStore({

    reducer: {
        userInfo: userInfoSlice,
        language: languageSlice,
       




    },
    
})