
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGLoadingFromFile.scss';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
import { clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';


// import { get_valid_list } from './../../vendors/get_valid_list.js';

import { get_list_from_text } from './../../vendors/get_list_from_text.js';

import { AWG_BtnAddFromJsonProject } from './../AWG_BtnAddFromJsonProject/AWG_BtnAddFromJsonProject.js';
import { AWG_BtnAddFromTextByNumber } from './../AWG_BtnAddFromTextByNumber/AWG_BtnAddFromTextByNumber.js';


const AWGLoadingFromFileComponent = ( props ) => {

    let {
        isOpen,
        setListHandler,
        languageKeyName,
        clearAll,
    } = props;

    let [ fileName, setFileName ] = useState( '' );

    // let [ badText, setBadText ] = useState( null );



    // let inpRef = useRef();
    // let inpTextRef = useRef();

    useEffect( () => {
        setFileName( '' );
        // setBadText( '' );
    }, [ isOpen ] );

    const clickHandler = () => {
        clearAll();
        setFileName( '' );
    };
    
    // const clickAdd = () => {
    //     let accept = [ '.json' ];
    //     let input = inpRef.current;
    //     input.setAttribute('accept', accept.join(',') );
    //     input.click();
    //     clearAll();
    //     setFileName( '' );
    // };

    // const clickAddText = () => {
    //     let accept = [ '.txt' ];
    //     let input = inpTextRef.current;
    //     input.setAttribute('accept', accept.join(',') );
    //     input.click();
    //     clearAll();
    //     setFileName( '' );
    // };

    // const chack_for_fileName = ( file, callback ) => {
    //     let { name } = file;
    //     if( name === 'words.json' || name === 'words_without_audio.json' ){
    //         setFileName( name );
    //         callback();
    //     }else{
    //         alert( 'Загрузить слова можно только из файлов "words.json" или "words_without_audio.json"(без аудио)' );
    //     };
    // }

    // const chack_for_keyName = ( obj, callback ) => {
    //     if( obj.keyName ){
    //         if( obj.keyName === languageKeyName ){
    //             callback();
    //         }else{
    //             alert( 'В файле указан язык ' + obj.keyName + ' а нужен ' + languageKeyName );
    //         };
    //     }else{
    //         alert( 'В файле отсутсвуют данные о языке' );
    //     };

    // }
    
    // const inputHandler = (e) => {
    
    //     if( !e.target.files.length ){
    //         return;
    //     };
    //     let files = e.target.files;

    //     chack_for_fileName( files[0], () => {
    //         async function read( jsonFile) {
    //             return new Promise((resolve, reject) => {
    //                 let reader = new FileReader();
    //                 reader.onerror = reject;
    //                 reader.onload = (e) => resolve(e.target.result);
    //                 reader.readAsText( jsonFile );


    //             });
    //         };

    //         read( files[0] ).then( ( result ) => {
    //             let obj = JSON.parse( result );
    //             chack_for_keyName( obj, () => {
    //                 if( obj.list ){
    //                     setListHandler( obj.list );
    //                 }else{
    //                     alert( 'в файле остутствует список со словами' );
    //                 };
    //             } );
    //         });
    //     });

    // }

    // const inputTextHandler = (e) => {
    
    //     if( !e.target.files.length ){
    //         return;
    //     };
    //     let files = e.target.files;
    //     let { name } = files[0];
    //     setFileName( name );

    //     async function read( jsonFile) {
    //         return new Promise((resolve, reject) => {
    //             let reader = new FileReader();
    //             reader.onerror = reject;
    //             reader.onload = (e) => resolve(e.target.result);
    //             reader.readAsText( jsonFile );


    //         });
    //     };

    //     read( files[0] ).then( ( result ) => {
    //         let obj = get_list_from_text( result );
    //         if( obj.list ){
    //             setListHandler( obj.list );

    //             if( obj.remainder !== '' ){
    //                 setBadText( obj.remainder );
    //             };

    //         }else{
    //             alert( 'в файле остутствует список со словами' );
    //         };


    //     });

    // }



    return (
        <div className = 'AWGLoadingFromFile'>
            <span className = 'AWGLoadingFromFile_text'>Загрузить файл:</span>
            {/* <span 
                className = 'AWGLoadingFromFile_btn'
                onClick = { clickAdd }
            >words.json / words_without_audio.json</span> */}

            <AWG_BtnAddFromJsonProject
                clickHandler = { clickHandler }
                setFileName = { setFileName }
                setListHandler = { setListHandler }
            />

            <AWG_BtnAddFromTextByNumber
                clickHandler = { clickHandler }
                // setBadText = { setBadText }
                setFileName = { setFileName }

                setListHandler = { setListHandler }
            />

            {/* <span 
                className = 'AWGLoadingFromFile_btn'
                onClick = { clickAddText }
                title = 'Строка без чиста читается как тема (сама тема в скобках), строка с числом как слово. Стр. число англ /транскр/ перевод'
            >текстовый (ориентир число)</span> */}

            <span className = 'AWGLoadingFromFile_fileName'>{ fileName }</span>

            {/* <input 
                type =          'file' 
                ref =           { inpRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { false }
            /> */}

            {/* <input 
                type =          'file' 
                ref =           { inpTextRef }
                className =     'hiddenInput'
                onChange =      { inputTextHandler }
                multiple =      { false }
            /> */}

           
           
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
