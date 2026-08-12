import React  from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './../../redux/store.js';
import store from './../redux/store.js';

import { WordsListAsText } from './../components/WordsListAsText/WordsListAsText.js'

export const add_WordsListAsText_to_DOM = () => {
    if( IS_DEVELOPMENT ){

    }else{
        
        const container = document.getElementById('wordsListAsText');


        if( container ){
            const root = createRoot(container);

            root.render(
                <Provider store={store}>
                    <WordsListAsText />
                </Provider>
            );
        };


    };
}