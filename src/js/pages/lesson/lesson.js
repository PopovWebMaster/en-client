import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../redux/store.js';

import './lesson.scss';

import { LessonPageApp } from './components/LessonPageApp/LessonPageApp.js';
import { AppLesson } from './../../components/AppLesson/AppLesson.js';


console.dir('lesson');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('appDev');
if( container ){
    const root = createRoot(container);

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <LessonPageApp />
            </BrowserRouter>
        </Provider>
    );
};

if( IS_DEVELOPMENT ){

}else{
    const container = document.getElementById('appPlace');
    if( container ){
        const root = createRoot(container);

        root.render(
            <Provider store={store}>
                <BrowserRouter>
                    <AppLesson />
                </BrowserRouter>
            </Provider>
        );
    };
};


