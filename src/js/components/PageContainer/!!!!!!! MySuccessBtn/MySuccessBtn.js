// MySuccessBtn

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MySuccessBtn.scss';

// import { selectorData as languageSlice } from './../../redux/languageSlice.js';


import { LANGUAGES, LANGUAGE_LIST } from './../../../config/languages.js';

const MySuccessBtnComponent = ( props ) => {

    let {


    } = props;



    return (

        <div className = 'MySuccessBtn'>
            <span className = 'MySuccessBtn_text'>Мой успех:</span>
            <span className = 'MySuccessBtn_count'>
                <img src = { LANGUAGES[ 'EN' ].icon }/>
                130 слов
            </span>
        </div>


    )

};


export function MySuccessBtn( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <MySuccessBtnComponent
            { ...props }
            // languageAlias = { language.languageAlias }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
