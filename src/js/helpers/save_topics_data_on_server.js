import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setTopicsLiscIsChanges } from './../redux/appWordsSlice.js';


export const save_topics_data_on_server = ( callback = () => {} ) => {
    let { appWords } = store.getState();
    let { 
        topicsList,
    } = appWords;

    send_request_to_server({
            route: 'admin/save-topics-data-changes',
            data: {
                topicsList
            },
            successCallback: ( resp ) => {
                console.dir( 'resp <<<<' );
                console.dir( resp );
    
                callback( resp );
    
                store.dispatch( setTopicsLiscIsChanges( false ) );
    
            },
        }, true );
};