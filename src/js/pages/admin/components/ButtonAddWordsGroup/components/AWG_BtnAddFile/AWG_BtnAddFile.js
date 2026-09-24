
import React, { useRef } from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AWG_BtnAddFile.scss';

// import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
// import { clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';

const AWG_BtnAddFileComponent = ( props ) => {

    let {
        title = 'кнопко',
        accept = [],
        clickHandler = () => {},
        inputHandler,
        multiple = false,

    } = props;

    let inpRef = useRef();

    const clickAdd = () => {
        // let accept = [ '.json' ];
        let input = inpRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();
        clickHandler();
    };


    return (
        <>
            <span 
                className = 'AWGLoadingFromFile_btn'
                onClick = { clickAdd }
            >{ title }</span>

            <input 
                type =          'file' 
                ref =           { inpRef }
                className =     'AWG_hiddenInput'
                onChange =      { inputHandler }
                multiple =      { multiple }
            />
        </>

    )

};


export function AWG_BtnAddFile( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <AWG_BtnAddFileComponent
            { ...props }
            // languageKeyName = { language.languageKeyName }
            // clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
