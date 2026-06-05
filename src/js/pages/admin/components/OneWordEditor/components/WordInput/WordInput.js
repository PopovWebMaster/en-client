

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordInput.scss';

 
import { set_focus_for_input } from './../../vendors/set_focus_for_input.js';

import { OWE_InputChackStatusWrap } from './OWE_InputChackStatusWrap/OWE_InputChackStatusWrap.js';
import { OWE_ErrorText } from './OWE_ErrorText/OWE_ErrorText.js';
import { LANGUAGES } from './../../../../../../config/languages.js';



const WordInputComponent = ( props ) => {

    let {
        keyName = null,
        value,
        max = 255,
        setValue,
        errorText,
        setErrorText,
        blur = () => {},
        chackStatuse = null,
        placeholder = '',

    } = props;

    let inpRef = useRef();

    const change = ( e ) => {
        let val = e.target.value;
        setValue( val );
        
    }

    const keyDown = ( e ) => {

        let { which } = e;
        if( which === 13 ){ // enter
            set_focus_for_input( inpRef.current, 'next' );
        }else if( which === 40 ){ // down
            set_focus_for_input( inpRef.current, 'next' );
        }else if( which === 38 ){  // up
            set_focus_for_input( inpRef.current, 'preview' );
        };
        
    }

    const getContentStyle = ( val, key_name ) => {
        let result = 'OWE_foreign';
        if( key_name === 'RU' ){
            result = 'OWE_ru';
        }else if( key_name === 'TRANSCRIPTION' ){
            result = 'OWE_transcription';
        };

        if( val.trim() === '' ){
            result = result + ' OWE_empty'
        };

        return result;
    }


    return (
        <div className = { `OWE_WordInput ${ errorText !== ''? 'OWE_Input_error': ''} ${ getContentStyle( value, keyName ) }` }>

            <OWE_InputChackStatusWrap
                chackStatuse = { chackStatuse }
                keyName = { keyName }
            >
                <input 
                    type =          'text'
                    value =         { value }
                    className =     'OWE_WordInput_inp'
                    ref =           { inpRef }
                    maxLength =     { max } 
                    onChange =      { change }
                    onBlur =        { blur }
                    onKeyDown =     { keyDown }
                    placeholder =   { keyName === null? placeholder: LANGUAGES[ keyName ].name }
                />

            </OWE_InputChackStatusWrap>

            <OWE_ErrorText errorText = { errorText }/>


        </div>
    )

};


export function WordInput( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordInputComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
