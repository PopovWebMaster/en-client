import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice                from './userInfoSlice.js';
// import adminSlice                   from './adminSlice.js';
import languageSlice from './languageSlice.js';
import appControlSlise from './appControlSlise.js';
import appWordsSlice from './appWordsSlice.js';
import appDataSlice from './appDataSlice.js';





export default configureStore({

    reducer: {
        userInfo: userInfoSlice,
        language: languageSlice,
        appControl: appControlSlise,
        appWords: appWordsSlice,
        appData: appDataSlice,



       




    },
    
})