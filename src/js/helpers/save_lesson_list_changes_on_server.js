
import store from './../redux/admin/store.js';

import { send_request_to_server } from './send_request_to_server.js';

import { setLessonListIsChanged } from './../redux/admin/lessonsSlice.js';

export const save_lesson_list_changes_on_server = ( callback = () => {} ) => {

    let { lessons } = store.getState();
    let { lessonList } = lessons;

    send_request_to_server({
        route: 'admin/save-lesson-list-changes',
        data: {
            lessonList: structuredClone( lessonList ),
        },
        addKeyName: true,
        
        successCallback: ( resp ) => {
            console.dir( 'resp <<<<' );
            console.dir( resp );

            callback( resp );

            store.dispatch( setLessonListIsChanged( false ) );

        },
    }, true );

}