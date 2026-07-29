
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setMainPageDataIsChanged } from './../redux/admin//mainPageSlise.js';


export const save_main_page_data_on_server = ( callback = () => {} ) => {

    let { mainPage } = store.getState();
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

    send_request_to_server({
        route: 'admin/save-main-page-changes',
        data: {
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
        },
        addKeyName: true,
        
        successCallback: ( resp ) => {
            console.dir( 'resp <<<<' );
            console.dir( resp );

            callback( resp );

            store.dispatch( setMainPageDataIsChanged( false ) );

        },
    }, true );
    
}