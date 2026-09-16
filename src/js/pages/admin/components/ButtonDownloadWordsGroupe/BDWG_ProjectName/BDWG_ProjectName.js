
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BDWG_ProjectName.scss';

// import { selectorData as wordsSlice } from './../../../../../redux/admin/wordsSlice.js';

import { AWInputText } from './../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';


const BDWG_ProjectNameComponent = ( props ) => {

    let {
        projectName,
        setProjectName
    } = props;

    const fileNameChange = ( e ) => {
        let val = e.target.value;
        setProjectName( val );
    }

    return (

        <AWInputText
            title = { 'Имя проекта' }
            value = { projectName }
            onChange = { fileNameChange }
            max = { 255 }
            placeholder = 'это поле нельзя оставлять пустым!!!!!'
            enterHandler = { () => {} }
        />
    )

};


export function BDWG_ProjectName( props ){

    // const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <BDWG_ProjectNameComponent
            { ...props }
            // wordList = { words.wordList }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
