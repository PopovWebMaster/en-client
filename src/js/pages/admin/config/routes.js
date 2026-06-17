
import { get_new_route } from './../vendors/get_new_route.js';

export const ADMIN_ROUTES = {
    MAIN:           get_new_route({ route: '/admin',                title: 'Главная',           icon: 'icon-home',      name: 'MAIN' } ),
    WORDS:          get_new_route({ route: '/admin/words',          title: 'Слова',             icon: 'icon-doc-text',  name: 'WORDS' } ),

    LESSONS:        get_new_route({ route: '/admin/lessons',        title: 'Уроки',            icon: 'icon-book',  name: 'LESSONS' } ),



    // DICTIONARIES:   get_new_route({ route: '/admin/dictionaries',   title: 'Словари',           icon: 'icon-book',      name: 'DICTIONARIES' } ),
    // ADD_DICTIONARY: get_new_route({ route: '/admin/add-dictionary', title: 'Добавить словарь',  icon: 'icon-plus-1',    name: 'ADD_DICTIONARY' } ),

    ICONS:          get_new_route({ route: '/admin/icons',          title: 'Иконки',        icon: 'icon-info-1',    name: 'ICONS' } ),

};
