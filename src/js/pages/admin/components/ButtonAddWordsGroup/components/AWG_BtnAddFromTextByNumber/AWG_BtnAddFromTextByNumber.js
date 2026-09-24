
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWG_BtnAddFromTextByNumber.scss';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
import { clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';


import { get_list_from_text } from './../../vendors/get_list_from_text.js';


import { AWG_BtnAddFile } from './../AWG_BtnAddFile/AWG_BtnAddFile.js';


const AWG_BtnAddFromTextByNumberComponent = ( props ) => {

    let {
        clickHandler,
        // setBadText,
        setFileName,
        setListHandler,

        // clearAll,

    } = props;

    let [ badText, setBadText ] = useState( '' );


    const click = () => {
        // clearAll();
        // setFileName( '' );
        setBadText( '' );

        clickHandler();
    };



    const inputHandler = (e) => {
    
        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;
        let { name } = files[0];
        setFileName( name );

        async function read( jsonFile) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onerror = reject;
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsText( jsonFile );


            });
        };

        read( files[0] ).then( ( result ) => {
            let obj = get_list_from_text( result );
            if( obj.list ){
                setListHandler( obj.list );

                if( obj.remainder !== '' ){
                    setBadText( obj.remainder );
                };

            }else{
                alert( 'в файле остутствует список со словами' );
            };


        });

    }

    const change = ( e ) => {
        let val = e.target.value;
        setBadText( val );

    }


    const finish_parse = () => {
        let obj = get_list_from_text( badText );
        if( obj.list ){
            setListHandler( obj.list, false );

            // if( obj.remainder !== '' ){
                setBadText( obj.remainder );
            // };

        };
    };



    return (
        <>
            { badText === ''? '': (
                <textarea
                    value = { badText }
                    onChange = { change }
                    className = 'AWB_badText'
                />)}

            <AWG_BtnAddFile
                title =         'текстовый (почислу)'
                accept =        { [ '.txt' ] }
                clickHandler =  { click }
                inputHandler =  { inputHandler }
                multiple =      { false }
            />
           { badText === ''? '': (

                <span
                    className = 'AWB_parse_badText'
                    onClick = { finish_parse }
                >Допарсить</span>
            )}

        </>
       
    )

};


export function AWG_BtnAddFromTextByNumber( props ){

    const language = useSelector( languageSlice );
    const dispatch = useDispatch();

    return (
        <AWG_BtnAddFromTextByNumberComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
