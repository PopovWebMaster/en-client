
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_Input.scss';

import { OC_InputTitle } from './OC_InputTitle/OC_InputTitle.js';
import { OC_InputChackStatusWrap } from './OC_InputChackStatusWrap/OC_InputChackStatusWrap.js';
import { OC_InputMax } from './OC_InputMax/OC_InputMax.js';
import { OC_InputErrorText } from './OC_InputErrorText/OC_InputErrorText.js';

import { set_focus_for_input } from './vendors/set_focus_for_input.js';

const OC_InputComponent = ( props ) => {

    let {
        title = 'Упс, а чё это?',
        value,
        setValue,
        max = 255,
        isRequired = false,
        errorText = '',
        setErrorText = () => {},
        asTextArea = false,

        blure = () => {},

        chackStatuse = null, // true false null

    } = props;

    let inpRef = useRef();
    let textRef = useRef();



    const change = ( e ) => {
        let val = e.target.value;

        if( val.charCodeAt( 0 ) !== 10 ){
            /*
                10 это код символа перевода строки enter
                это здесь, чтоб не появлялся \n при включении фокуса от соседнего input/textarea
            */
            setValue( val );
        };
    }

    const keyDown = ( e ) => {
        let { which, shiftKey } = e;
        if( asTextArea === false ){
            
            if( which === 13 ){ // enter
                set_focus_for_input( inpRef.current, 'next' );

            }else if( which === 40 ){ // down
                set_focus_for_input( inpRef.current, 'next' );

            }else if( which === 38 ){  // up
                set_focus_for_input( inpRef.current, 'preview' );
            };
        }else{
            if( which === 13 && shiftKey === false ){ // enter
                textRef.current.blur();
            };
        };

    }




    return (
        <div className = { `OC_Input ${ errorText !== ''? 'OC_Input_error': ''}` }>

            <OC_InputTitle
                title =         { title }
                isRequired =    { isRequired }
            />

            <OC_InputChackStatusWrap
                chackStatuse = { chackStatuse }
            >
                <>{ asTextArea? (
                    <textarea 
                        className =     'OC_Input_inp'
                        value =         { value }  
                        ref =           { textRef }
                        maxLength =     { max } 
                        onChange =      { change }
                        onBlur =        { blure }
                        onKeyDown =     { keyDown }
                    />
                ): (
                    <input 
                        type =          'text'
                        className =     'OC_Input_inp'
                        value =         { value }  
                        ref =           { inpRef }
                        maxLength =     { max } 
                        onChange =      { change }
                        onBlur =        { blure }
                        onKeyDown =     { keyDown }
                    />
                ) }</>
                

            </OC_InputChackStatusWrap>

            <OC_InputMax
                value = { value }
                max = { max }
            />

            <OC_InputErrorText
                errorText = { errorText }
            />

        </div>

    )

};


export function OC_Input( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
