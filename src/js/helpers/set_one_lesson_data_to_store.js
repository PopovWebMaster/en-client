
import store from './../redux/admin/store.js';
import { 
    setLessonList, 
    setLessonListById,
    setCurrentLessonDescription,
    setCurrentLessonIsActive,
    setCurrentLessonLevelName,
    setCurrentLessonOrder,
    setCurrentLessonPhrasesList,
    setCurrentLessonPhrasesById,
    setCurrentLessonTitle,
    setCurrentPageDescription,
    setCurrentPageKeyWords,
    setCurrentPageText,
    setCurrentPageTitle,
    setCurrentLessonIsPaid,
} from './../redux/admin/lessonsSlice.js';


import { set_word_list_to_store } from './set_word_list_to_store.js';

export const set_one_lesson_data_to_store = ( oneLessonData ) => {

    let {
        lessonDescription,
        lessonIsActive,
        lessonLevelName,
        lessonOrder,
        lessonPhrasesList,
        lessonTitle,
        pageDescription,
        pageKeyWords,
        pageText,
        pageTitle,
        wordList,
        lessonIsPaid,
    } = oneLessonData;

    console.dir( 'oneLessonData' );
    console.dir( oneLessonData );

    store.dispatch( setCurrentLessonDescription( lessonDescription ) );
    store.dispatch( setCurrentLessonIsActive( lessonIsActive ) );
    store.dispatch( setCurrentLessonLevelName( lessonLevelName ) );
    store.dispatch( setCurrentLessonOrder( lessonOrder ) );
    store.dispatch( setCurrentLessonPhrasesList( lessonPhrasesList ) );

    // let obj = {};
    // for( let i = 0; i < lessonPhrasesList.length; i++ ){
    //     let { id } = lessonPhrasesList[ i ];
    //     obj[ id ] = { ...lessonPhrasesList[ i ] };
    // };
    // store.dispatch( setCurrentLessonPhrasesById( obj ) );


    




    // store.dispatch( setCurrentLessonPhrasesList( lessonPhrasesList ) );
    store.dispatch( setCurrentLessonTitle( lessonTitle ) );
    store.dispatch( setCurrentPageDescription( pageDescription ) );
    store.dispatch( setCurrentPageKeyWords( pageKeyWords ) );
    store.dispatch( setCurrentPageText( pageText ) );
    store.dispatch( setCurrentPageTitle( pageTitle ) );
    store.dispatch( setCurrentLessonIsPaid( lessonIsPaid ) );




    set_word_list_to_store( wordList );


};