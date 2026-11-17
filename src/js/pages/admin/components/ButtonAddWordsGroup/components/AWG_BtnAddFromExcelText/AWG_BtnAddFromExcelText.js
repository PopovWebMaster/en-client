
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWG_BtnAddFromExcelText.scss';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
import { clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';


// import { get_valid_list } from './../../vendors/get_valid_list.js';

// import { get_list_from_text } from './../../vendors/get_list_from_text.js';


import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWTextarea } from './../../../../../../components/AlertWindowContainer/AWTextarea/AWTextarea.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';



const AWG_BtnAddFromExcelTextComponent = ( props ) => {

    let {
        clickHandler,
        setFileName,
        setListHandler,

        // setListHandler,
        languageKeyName,
        // clearAll,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isReady, setIsReady ] = useState( false );

    let [ text, setText ] = useState( '' );

    useEffect( () => {
        if( text.trim() !== '' ){
            setIsReady( true );
        }else{
            setIsReady( false );
        }

    }, [ text ] );

    useEffect( () => {
        if( isOpen === false ){
            setText( '' );
        };
        
    }, [ isOpen ] );


    // const click = () => {
    //     clearAll();
    //     setFileName( '' );
    // };


    
    const click = (e) => {
        clickHandler();

        setIsOpen( true );
    
       
    }

    const change = ( e ) => {
        let val = e.target.value;
        setText( val );

    }

    const addHandler = () => {

        // console.dir( text );
        let list = getList( text );
        // console.dir( list );

        setListHandler( list );
        setIsOpen( false );

    }

    const getList = ( str ) => {
        let arr = str.split( '\n' );

        let result = [];

        for( let i = 0; i < arr.length; i++ ){
            if( arr[ i ].trim() === '' ){
                continue;
            };
            let rowArr = arr[ i ].split( '\t' );
            if( Array.isArray( rowArr ) ){
                let foreign = '';
                let transcr = '';
                let ru = '';
                let part_of_speech_id = null;
                let audio = [];
                let topic_id = null;
                let topic_name = '';
                let message = '';

                if( rowArr[ 0 ] ){
                    foreign = rowArr[ 0 ];
                };
                if( rowArr[ 1 ] ){
                    transcr = rowArr[ 1 ];
                };
                if( rowArr[ 2 ] ){
                    ru = rowArr[ 2 ];
                };

                result.push({
                    transcription: transcr,
                    ru,
                    foreign,
                    audio,
                    part_of_speech_id,
                    topic_id,
                    topic_name,
                    message,
                });

            };
            // console.dir( rowArr );
        };

        return result;
    }




    return (
        <div className = 'AWG_BtnAddFromExcelText'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'sdfsdf'
                width = '60%'
                height = '80vh'
                left = { '-12%' }

            >

                <AWTextarea
                    title = { 'Текст из Excel' }
                    value = { text }
                    onChange = { change }
                    max = { 10000 }
                    style = { { height: '30em' } }
                    placeholder = 'англ \t транскрипция \t русский \t частьречи \t тема'
                />
                <AWButtonAdd
                    title = 'Добавить'
                    isReady = { isReady }
                    clickHandler = { addHandler }

                />

            </AlertWindowContainer>
            <span 
                className = 'AWG_BtnAddFromExcelText_btn'
                onClick = { click }
            >Ячейки из Excel</span>
        </div>
         
    )

};


export function AWG_BtnAddFromExcelText( props ){

    const language = useSelector( languageSlice );
    const dispatch = useDispatch();

    return (
        <AWG_BtnAddFromExcelTextComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
