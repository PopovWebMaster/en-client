
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestsListOfAllLanguages.scss';

import { selectorData as languageSlice } from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { LANGUAGES, LANGUAGE_LIST } from './../../config/languages.js';

import { LessonsListForOneLanguage } from './../LessonsListForOneLanguage/LessonsListForOneLanguage.js';
import { TestsListForOneLanguage } from './../TestsListForOneLanguage/TestsListForOneLanguage.js';




const TestsListOfAllLanguagesComponent = ( props ) => {

    let {


    } = props;



    return (

        <div className = 'testsListOfAllLanguages'>
            <TestsListForOneLanguage language = 'EN'/>
            <TestsListForOneLanguage language = 'DE'/>


            
            
        </div>


    )

};


export function TestsListOfAllLanguages( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <TestsListOfAllLanguagesComponent
            { ...props }
            // languageAlias = { language.languageAlias }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
