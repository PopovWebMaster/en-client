
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsListOfAllLanguages.scss';

import { selectorData as languageSlice } from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { LANGUAGES, LANGUAGE_LIST } from './../../config/languages.js';

import { LessonsListForOneLanguage } from './../LessonsListForOneLanguage/LessonsListForOneLanguage.js';



const LessonsListOfAllLanguagesComponent = ( props ) => {

    let {


    } = props;



    return (

        <div className = 'lessonsListOfAllLanguages'>
            <LessonsListForOneLanguage language = 'EN'/>
            <LessonsListForOneLanguage language = 'DE'/>


            
            
        </div>


    )

};


export function LessonsListOfAllLanguages( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <LessonsListOfAllLanguagesComponent
            { ...props }
            // languageAlias = { language.languageAlias }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
