import React  from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../redux/store.js';

import './test.scss';

import { TestPageApp } from './components/TestPageApp/TestPageApp.js';


console.dir('test');
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );

const container = document.getElementById('appDev');
if( container ){
    const root = createRoot(container);

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <TestPageApp />
            </BrowserRouter>
        </Provider>
    );
};


