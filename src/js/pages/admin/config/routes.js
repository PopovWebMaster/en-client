
import { get_new_route } from './../vendors/get_new_route.js';

export const ADMIN_ROUTES = {
    MAIN:      get_new_route({ route: '/admin',          title: 'Главная',    icon: 'icon-home',       name: 'MAIN' } ),
    WORDS:     get_new_route({ route: '/admin/words',    title: 'Слова',      icon: 'icon-doc-text',   name: 'WORDS' } ),
    LESSONS:   get_new_route({ route: '/admin/lessons',  title: 'Уроки',      icon: 'icon-book',       name: 'LESSONS' } ),
    TESTS:     get_new_route({ route: '/admin/tests',    title: 'Тесты',      icon: 'icon-thumbs-up',  name: 'TESTS' } ),
    SETTINGS:  get_new_route({ route: '/admin/settings', title: 'Настройки',  icon: 'icon-cog-alt',    name: 'SETTINGS' } ),
    ICONS:     get_new_route({ route: '/admin/icons',    title: 'Иконки',     icon: 'icon-info-1',     name: 'ICONS' } ),

};
