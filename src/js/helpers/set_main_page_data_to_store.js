
import store from './../redux/admin/store.js';
import {
    // setMainPageDataIsChanged,

    setSiteTitle,
    setSiteHeader,
    setSiteParagraphList,
    setSiteKeywords,
    setSiteDescription,
    // setPageTitle,
    // setPageHeader,
    // setPageParagraphList,
    // setPageDescription,
    // setPageKeywords,
    setLanguagePageTitle,
    setLanguagePageHeader,
    setLanguagePageParagraphList,
    setLanguagePageDescription,
    setLanguagePageKeywords,
    setLanguageActiveList,

    setLessonsListPageTitle,
    setLessonsListPageHeader,
    setLessonsListPageParagraphList,
    setLessonsListPageDescription,
    setLessonsListPageKeywords,

    setTestsListPageTitle,
    setTestsListPageHeader,
    setTestsListPageParagraphList,
    setTestsListPageDescription,
    setTestsListPageKeywords,
} from './../redux/admin/mainPageSlise.js';

export const set_main_page_data_to_store = ( mainPage ) => {
    let {

        siteTitle,
        siteHeader,
        siteParagraphList,
        siteKeywords,
        siteDescription,
        languagePageTitle,
        languagePageHeader,
        languagePageParagraphList,
        languagePageDescription,
        languagePageKeywords,
        
        lessonsListPageTitle,
        lessonsListPageHeader,
        lessonsListPageParagraphList,
        lessonsListPageDescription,
        lessonsListPageKeywords,

        testsListPageTitle,
        testsListPageHeader,
        testsListPageParagraphList,
        testsListPageDescription,
        testsListPageKeywords,

        languageActiveList,

    } = mainPage;

    store.dispatch( setSiteTitle( siteTitle ) );
    store.dispatch( setSiteHeader( siteHeader ) );
    store.dispatch( setSiteParagraphList( siteParagraphList ) );
    store.dispatch( setSiteKeywords( siteKeywords ) );
    store.dispatch( setSiteDescription( siteDescription ) );
    store.dispatch( setLanguagePageTitle( languagePageTitle ) );
    store.dispatch( setLanguagePageHeader( languagePageHeader ) );
    store.dispatch( setLanguagePageParagraphList( languagePageParagraphList ) );
    store.dispatch( setLanguagePageDescription( languagePageDescription ) );
    store.dispatch( setLanguagePageKeywords( languagePageKeywords ) );

    store.dispatch( setLessonsListPageTitle( lessonsListPageTitle ) );
    store.dispatch( setLessonsListPageHeader( lessonsListPageHeader ) );
    store.dispatch( setLessonsListPageParagraphList( lessonsListPageParagraphList ) );
    store.dispatch( setLessonsListPageDescription( lessonsListPageDescription ) );
    store.dispatch( setLessonsListPageKeywords( lessonsListPageKeywords ) );

    store.dispatch( setTestsListPageTitle( testsListPageTitle ) );
    store.dispatch( setTestsListPageHeader( testsListPageHeader ) );
    store.dispatch( setTestsListPageParagraphList( testsListPageParagraphList ) );
    store.dispatch( setTestsListPageDescription( testsListPageDescription ) );
    store.dispatch( setTestsListPageKeywords( testsListPageKeywords ) );



    store.dispatch( setLanguageActiveList( languageActiveList ) );



}