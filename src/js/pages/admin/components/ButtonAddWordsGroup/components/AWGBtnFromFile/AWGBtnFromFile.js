
import React, { useState, useEffect, useRef }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGBtnFromFile.scss';

import { selectorData as wordEditSlice } from './../../../../../../redux/admin/wordEditSlice.js';




const AWGBtnFromFileComponent = ( props ) => {

    let {
        setListHandler
    } = props;

    let inpRef = useRef();


    const clickAdd = () => {

        let accept = [ 'words.json' ];
        let input = inpRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    const inputHandler = (e) => {
    
        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;

        async function read( jsonFile) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onerror = reject;
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsText( jsonFile );


            });
        };

        let { name } = files[0];
        if( name === 'words.json' || name === 'words_without_audio.json' ){
            read( files[0] ).then( ( result ) => {
                let arr = JSON.parse( result );
                setListHandler( arr );
            });
        }else{
            alert( 'Загрузить слова можно только из файлов "words.json" или "words_without_audio.json"(без аудио)' );
        };

    }
    

    return (
        <div className = 'AWGBtnFromFile'>
            <span
                className = 'AWGBtnFromFile_btn'
                onClick = { clickAdd }
            >Загрузить words.json</span>

            <input 
                type =          'file' 
                ref =           { inpRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { false }
            />
        </div>
    )

};


export function AWGBtnFromFile( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <AWGBtnFromFileComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
