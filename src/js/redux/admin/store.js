import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice    from './../userInfoSlice.js';
import wordEditSlice    from './wordEditSlice.js';



export default configureStore({

    reducer: {
        userInfo:       userInfoSlice,
        wordEdit:         wordEditSlice,
       




    },
    
})