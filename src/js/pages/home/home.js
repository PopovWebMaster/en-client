import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import store from './../../App/redux/store.js';
import store from './../../redux/store.js';

import './home.scss';

import { HomePageApp } from './components/HomePageApp/HomePageApp.js';
// import { HomePageApp } from './components/HomePageApp/HomePageApp.js';

import { add_event_click_to_all_lang_buttons } from './../../components/LessonsListForOneLanguage/add_event_click_to_all_lang_buttons.js';


console.dir('home');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('appDev');
if( container ){
    const root = createRoot(container);

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <HomePageApp />
            </BrowserRouter>
        </Provider>
    );
};

if( IS_DEVELOPMENT === false ){
    add_event_click_to_all_lang_buttons();
};

