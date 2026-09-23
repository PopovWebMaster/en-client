
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AWGLoadingFromFile.scss';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';

// import { get_valid_list } from './../../vendors/get_valid_list.js';


const AWGLoadingFromFileComponent = ( props ) => {

    let {
        setListHandler,
        languageKeyName,
    } = props;


    let inpRef = useRef();
    
    const clickAdd = () => {
        let accept = [ 'words.json' ];
        let input = inpRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();
    };

    const chack_for_fileName = ( file, callback ) => {
        let { name } = file;
        if( name === 'words.json' || name === 'words_without_audio.json' ){
            callback();
        }else{
            alert( 'Загрузить слова можно только из файлов "words.json" или "words_without_audio.json"(без аудио)' );
        };
    }

    const chack_for_keyName = ( obj, callback ) => {
        if( obj.keyName ){
            if( obj.keyName === languageKeyName ){
                callback();
            }else{
                alert( 'В файле указан язык ' + obj.keyName + ' а нужен ' + languageKeyName );
            };
        }else{
            alert( 'В файле отсутсвуют данные о языке' );
        };

    }
    
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

        chack_for_fileName( files[0], () => {

        });

        let { name } = files[0];
        if( name === 'words.json' || name === 'words_without_audio.json' ){
            read( files[0] ).then( ( result ) => {
                let obj = JSON.parse( result );
                chack_for_keyName( obj, () => {
                    if( obj.list ){
                        setListHandler( obj.list );
                    }else{
                        alert( 'в файле остутствует список со словами' );
                    };
                } );
            });
        }else{
            alert( 'Загрузить слова можно только из файлов "words.json" или "words_without_audio.json"(без аудио)' );
        };

    }



    return (
        <div className = 'AWGLoadingFromFile'>
            <span className = 'AWGLoadingFromFile_text'>Загрузить файл:</span>
            <span 
                className = 'AWGLoadingFromFile_btn'
                onClick = { clickAdd }
            >words.json / words_without_audio.json</span>

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


export function AWGLoadingFromFile( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <AWGLoadingFromFileComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
