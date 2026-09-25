
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setWordListIsChanged, setCommandToSaveShanges } from './../redux/admin/wordsSlice.js';

export const save_word_list_changes_on_server = ( callback = () => {} ) => {

    let { words } = store.getState();
    let { wordList, wordListIsChanged } = words;
    // let { currentLessonId } = lessons;
    // let { languageKeyName } = language;

    if( wordListIsChanged ){

        store.dispatch( setCommandToSaveShanges( false ) );

        // console.log( ' save_word_list_changes_on_server <<<<<<<<<<<<<<<' );
        
        send_request_to_server({
            route: 'admin/save-word-list-changes',
            data: {
                // keyName:    languageKeyName,
                // lessonId:   currentLessonId,
                wordList: structuredClone( wordList ),
            },
            addKeyName: true,
            addLessonId: true,
            
            successCallback: ( resp ) => {
                console.dir( 'resp <<<<' );
                console.dir( resp );

                callback( resp );

                store.dispatch( setWordListIsChanged( false ) );
                



            },
        }, true );
    }

    

}