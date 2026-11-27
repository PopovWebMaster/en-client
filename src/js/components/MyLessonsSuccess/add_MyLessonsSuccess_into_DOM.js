
import React  from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './../../redux/store.js';

import { MyLessonsSuccess } from './MyLessonsSuccess.js';

export const add_MyLessonsSuccess_into_DOM = () => {

    console.dir( '>>>>>>>>>>>>>>>>>>> add_MyLessonsSuccess_into_DOM ');

    const container = document.getElementById('mySuccess');
    if( container ){
        const root = createRoot(container);

        root.render(
            <Provider store={store}>
                <MyLessonsSuccess />
            </Provider>
        );
    }else{
        console.error( 'нет ДОМ элемента с id = mySuccess' );
    };

}