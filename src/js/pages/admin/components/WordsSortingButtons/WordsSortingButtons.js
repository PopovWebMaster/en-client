
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice } from './../../../../redux/admin/wordsSlice.js';
import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';


import './WordsSortingButtons.scss';

import { set_word_list_to_store } from './../../../../helpers/set_word_list_to_store.js';


const WordsSortingButtonsComponent = ( props ) => {

    let {
        wordList,
        languageKeyName,

    } = props;

    const click_foreign_alpha_sort = () => {

        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.foreign > b.foreign ){
                return 1;
            }else{
                return -1;
            };
        } );

        set_word_list_to_store( arr_sort );


    };

    const click_ru_alpha_sort = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.ru > b.ru ){
                return 1;
            }else{
                return -1;
            };
        } );

        set_word_list_to_store( arr_sort );
    };

    const click_foreign_length_sort = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.foreign.length > b.foreign.length ){
                return 1;
            }else{
                return -1;
            };
        } );

        set_word_list_to_store( arr_sort );
    };



    return (
        <div className = 'wordsSortingButtons'>

            <div
                className = 'WSB_btn'
                onClick = { click_foreign_alpha_sort }
            >
                <span className = 'WSB_btn_name'>{ `${languageKeyName}:` }</span>
                <span className = 'WSB_btn_icon icon-sort-name-up'></span>
            </div>
            
            <div
                className = 'WSB_btn'
                onClick = { click_ru_alpha_sort }
            >
                <span className = 'WSB_btn_name'>{ `RU:` }</span>
                <span className = 'WSB_btn_icon icon-sort-name-up'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { click_foreign_length_sort }
            >
                <span className = 'WSB_btn_name'>{ `${languageKeyName}:` }</span>
                <span className = 'WSB_btn_icon icon-sort-number-up'></span>
            </div>


            

        </div>
        
    )

};


export function WordsSortingButtons( props ){

    const words = useSelector( wordsSlice );
    const language = useSelector( languageSlice );


    languageSlice
    // const dispatch = useDispatch();

    return (
        <WordsSortingButtonsComponent
            { ...props }
            wordList = { words.wordList }
            languageKeyName = { language.languageKeyName }

            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
