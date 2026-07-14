
import store from './../redux/admin/store.js';
import {
    // setMainPageDataIsChanged,

    setSiteTitle,
    setSiteHeader,
    setSiteParagraphList,
    setSiteKeywords,
    setSiteDescription,
    setPageTitle,
    setPageHeader,
    setPageParagraphList,
    setPageDescription,
    setPageKeywords,
} from './../redux/admin/mainPageSlise.js';

export const set_main_page_data_to_store = ( mainPage ) => {
    let {

        siteTitle,
        siteHeader,
        siteParagraphList,
        siteKeywords,
        siteDescription,
        pageTitle,
        pageHeader,
        pageParagraphList,
        pageDescription,
        pageKeywords,

    } = mainPage;




    // store.dispatch( setMainPageDataIsChanged( false ) );
    // store.dispatch( setMainPageDataIsChanged( true ) );

    store.dispatch( setSiteTitle( siteTitle ) );
    store.dispatch( setSiteHeader( siteHeader ) );
    store.dispatch( setSiteParagraphList( siteParagraphList ) );
    store.dispatch( setSiteKeywords( siteKeywords ) );
    store.dispatch( setSiteDescription( siteDescription ) );
    store.dispatch( setPageTitle( pageTitle ) );
    store.dispatch( setPageHeader( pageHeader ) );
    store.dispatch( setPageParagraphList( pageParagraphList ) );
    store.dispatch( setPageDescription( pageDescription ) );
    store.dispatch( setPageKeywords( pageKeywords ) );




}