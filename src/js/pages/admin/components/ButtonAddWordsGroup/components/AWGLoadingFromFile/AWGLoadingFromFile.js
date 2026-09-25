
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGLoadingFromFile.scss';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
import { clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';

import { AWG_BtnAddFromJsonProject } from './../AWG_BtnAddFromJsonProject/AWG_BtnAddFromJsonProject.js';
import { AWG_BtnAddFromTextByNumber } from './../AWG_BtnAddFromTextByNumber/AWG_BtnAddFromTextByNumber.js';


const AWGLoadingFromFileComponent = ( props ) => {

    let {
        isOpen,
        setListHandler,
        clearAll,
    } = props;

    let [ fileName, setFileName ] = useState( '' );


    useEffect( () => {
        setFileName( '' );
    }, [ isOpen ] );

    const clickHandler = () => {
        clearAll();
        setFileName( '' );
    };
    

    return (
        <div className = 'AWGLoadingFromFile'>
            <span className = 'AWGLoadingFromFile_text'>Загрузить файл:</span>

            <AWG_BtnAddFromJsonProject
                clickHandler = { clickHandler }
                setFileName = { setFileName }
                setListHandler = { setListHandler }
            />

            <AWG_BtnAddFromTextByNumber
                clickHandler = { clickHandler }
                setFileName = { setFileName }

                setListHandler = { setListHandler }
            />

            <span className = 'AWGLoadingFromFile_fileName'>{ fileName }</span>


        </div>
    )

};


export function AWGLoadingFromFile( props ){

    const language = useSelector( languageSlice );
    const dispatch = useDispatch();

    return (
        <AWGLoadingFromFileComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
