import { configureStore } from '@reduxjs/toolkit';

import userInfoSlice    from './../userInfoSlice.js';
import wordEditSlice    from './wordEditSlice.js';

import languageSlice from './../languageSlice.js';

import wordsSlice from './wordsSlice.js';
import lessonsSlice from './lessonsSlice.js';
import mainPageSlise from './mainPageSlise.js';
import testsSlice from './testsSlice.js';
import settingsSlice from './settingsSlice.js';


export default configureStore({

    reducer: {
        userInfo: userInfoSlice,
        wordEdit: wordEditSlice,
        language: languageSlice,
        words: wordsSlice,
        lessons: lessonsSlice,
        mainPage: mainPageSlise,
        tests: testsSlice,
        settings: settingsSlice,



       




    },
    
})