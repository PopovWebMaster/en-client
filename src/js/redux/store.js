import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice                from './userInfoSlice.js';
// import adminSlice                   from './adminSlice.js';


export default configureStore({

    reducer: {
        userInfo:       userInfoSlice,
        // admin:         adminSlice,
       




    },
    
})