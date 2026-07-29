
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















    store.dispatch( setLanguageActiveList( languageActiveList ) );



}