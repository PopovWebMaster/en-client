import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../redux/store.js';

import './lessons.scss';

import { LessonsPageApp } from './components/LessonsPageApp/LessonsPageApp.js';


console.dir('lessons');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('appDev');
if( container ){
    const root = createRoot(container);

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <LessonsPageApp />
            </BrowserRouter>
        </Provider>
    );
};
