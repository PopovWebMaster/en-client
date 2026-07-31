
import store from './../redux/admin/store.js';

import { 
    setCurrentTestIsActive,
    setCurrentTestLessons,
    setCurrentTestLevelName,
    setCurrentTestOrder,
    setCurrentTestTitle,
    setCurrentTestPageDescription,
    setCurrentTestPageKeyWords,
    setCurrentTestPageTitle,
    setCurrentTestPageText,
    setCurrentTestWordsCount,
    setCurrentTestDescription,
} from './../redux/admin/testsSlice.js';

export const set_one_test_data_to_store = ( oneTestData ) => {
    let {
        description,
        isActive,
        lessons,
        levelName,
        order,
        testPageDescription,
        testPageKeywords,
        testPageText,
        testPageTitle,
        title,
        wordsCount,

    } = oneTestData;

    console.dir( 'oneTestData' );
    console.dir( oneTestData );

    store.dispatch( setCurrentTestIsActive( isActive ) );
    store.dispatch( setCurrentTestDescription( description ) );

    store.dispatch( setCurrentTestLessons( lessons ) );
    store.dispatch( setCurrentTestLevelName( levelName ) );
    store.dispatch( setCurrentTestOrder( order ) );
    store.dispatch( setCurrentTestTitle( title ) );
    store.dispatch( setCurrentTestPageTitle( testPageTitle ) );
    store.dispatch( setCurrentTestPageDescription( testPageDescription ) );
    store.dispatch( setCurrentTestPageKeyWords( testPageKeywords ) );
    store.dispatch( setCurrentTestPageText( testPageText ) );
    store.dispatch( setCurrentTestWordsCount( wordsCount ) );



    
    


};