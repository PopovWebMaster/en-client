
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setCurrentLessonIsChanged } from './../redux/admin/lessonsSlice.js';

export const set_one_lesson_changes_on_server = ( callback = () => {} ) => {

    let { lessons, words } = store.getState();
    let {
        currentLessonDescription,
        currentLessonIsActive,
        currentLessonLevelName,
        currentLessonOrder,
        currentLessonPhrasesList,
        currentLessonTitle,
        currentPageDescription,
        currentPageKeyWords,
        currentPageText,
        currentPageTitle,
        currentLessonIsPaid,
    } = lessons;
    let { wordList } = words;

    send_request_to_server({
        route: 'admin/save-one-lesson-changes',
        data: {
            pageTitle:          currentPageTitle,
            pageDescription:    currentPageDescription,
            pageKeyWords:       currentPageKeyWords,
            pageText:           currentPageText,

            lessonPhrasesList:  currentLessonPhrasesList,
            lessonTitle:        currentLessonTitle,
            lessonDescription:  currentLessonDescription,
            lessonLevelName:    currentLessonLevelName,
            lessonIsActive:     currentLessonIsActive,
            lessonOrder:        currentLessonOrder,
            lessonIsPaid:       currentLessonIsPaid,
            wordList: wordList,

            
        },
        addKeyName: true,
        addLessonId: true,
        
        successCallback: ( resp ) => {
            console.dir( 'resp <<<<' );
            console.dir( resp );

            callback( resp );

            if( resp.ok ){
                store.dispatch( setCurrentLessonIsChanged( false ) );
            };


        },
    }, true );

};