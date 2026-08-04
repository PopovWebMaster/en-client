
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestsListForOneLanguage.scss';

import { selectorData as languageSlice } from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { LANGUAGES, LANGUAGE_LIST } from './../../config/languages.js';

import { event_click_on_language_button } from './event_click_on_language_button.js';
import { add_event_click_to_all_lang_buttons } from './add_event_click_to_all_lang_buttons.js';



const TestsListForOneLanguageComponent = ( props ) => {

    let {

        language,


    } = props;

    useEffect( () => {
        add_event_click_to_all_lang_buttons();
    }, [] );


    return (

        <div className = { `testsListForOneLanguage` } data-language = { language } >
            <div
                className = 'LLFOL_btn_place'
            >
                <div
                    className = { `LLFOL_btn isActive` }
                    // onClick = { event_click_on_language_button }
                    // onClick = { add_event_click_to_all_lang_buttons }
                    
                >
                    <img src = { LANGUAGES[ language ].icon }/>
                    <a href = '#' >{ LANGUAGES[ language ].name }</a>
                </div>
            </div>
            <div className = 'LLFOL_lassons_place'>

                <a href = '#' className = 'LLFOL_lesson_link'>
                    <div className = 'LLFOL_lesson'>
                        <h4>
                            <img src = { LANGUAGES[ language ].icon }/>
                            <div className = 'LLFOL_lesson_word_len'>
                                <span>слов:</span>
                                <span>111</span>
                            </div>
                            <div className = 'LLFOL_lesson_level_name'>
                                <span>C2 (Профессиональный уровень)</span>
                            </div>
                            <div className = 'LLFOL_lesson_name'>
                                <span>Урок 1. Простые слова</span>
                            </div>

                        </h4>
                        <p className = 'LLFOL_description'>
                            Простые слова, дом, работа, сеья машины, поход в магазин, глаголы счастья
                        </p>
                    </div>
                </a>

                <a href = '#' className = 'LLFOL_lesson_link'>
                    <div className = 'LLFOL_lesson'>
                        <h4>
                            <img src = { LANGUAGES[ language ].icon }/>

                            <div className = 'LLFOL_lesson_name'>
                                <span>Урок 1. Простые слова</span>
                            </div>
                            <div className = 'LLFOL_lesson_level_name'>
                                <span>C2 (Профессиональный уровень)</span>
                            </div>
                            <div className = 'LLFOL_lesson_word_len'>
                                <span>слов:</span>
                                <span>111</span>
                            </div>
                            
                            

                        </h4>
                        <p className = 'LLFOL_description'>
                            Простые слова, дом, работа, сеья машины, поход в магазин, глаголы счастья
                        </p>
                    </div>
                </a>

                    
                    
            </div>
        </div>


    )

};


export function TestsListForOneLanguage( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <TestsListForOneLanguageComponent
            { ...props }
            // languageAlias = { language.languageAlias }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
