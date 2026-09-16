
import store from './../../../../../redux/admin/store.js';

export const get_project_name = ( selectedCount ) => {

    let { language, lessons } = store.getState();
    let { languageName } = language;
    let { currentLessonId, currentLessonLevelName } = lessons;

    let result = `${languageName}. Cвободные слова. (${selectedCount} слов)`;
    if( currentLessonId !== null ){
        result = `${languageName}. ${currentLessonLevelName}. (${selectedCount} слов)`;
    };

    return result;
};