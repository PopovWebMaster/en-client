import { get_keyName } from './vendors/get_keyName.js';
import { close_all_lessons_lists } from './vendors/close_all_lessons_lists.js';
import { open_lesson_by_keyName } from './vendors/open_lesson_by_keyName.js';

export const event_click_on_language_button = ( e ) => {

    let keyName = get_keyName( e );

    close_all_lessons_lists();
    open_lesson_by_keyName( keyName );



};