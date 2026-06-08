
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setWordListIsChanged } from './../redux/admin/wordsSlice.js';

export const save_word_list_changes_on_server = ( callback = () => {} ) => {

    let { words, lessons, language } = store.getState();
    let { wordList } = words;
    let { currentLessonId } = lessons;
    let { languageKeyName } = language;

    send_request_to_server({
        route: 'admin/save-word-list-changes',
        data: {
            keyName:    languageKeyName,
            lessonId:   currentLessonId,
            wordList,
        },
        successCallback: ( resp ) => {
            console.dir( 'resp <<<<' );
            console.dir( resp );

            callback( resp );

            store.dispatch( setWordListIsChanged( false ) );

        },
    }, true );

}