import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice    from './../userInfoSlice.js';
import wordEditSlice    from './wordEditSlice.js';

import languageSlice from './../languageSlice.js';



export default configureStore({

    reducer: {
        userInfo: userInfoSlice,
        wordEdit: wordEditSlice,
        language: languageSlice,
       




    },
    
})