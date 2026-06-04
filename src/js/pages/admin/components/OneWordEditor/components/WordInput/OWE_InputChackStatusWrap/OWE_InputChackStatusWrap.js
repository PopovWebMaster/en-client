
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OWE_InputChackStatusWrap.scss';
import { LANGUAGES } from './../../../../../../../config/languages.js'

const OWE_InputChackStatusWrapComponent = ( props ) => {

    let {
        chackStatuse,
        keyName,

        children,
       
    } = props;

    const getChackStatusClass = ( val ) => {
        let result = 'OWE_Input_chackStatus';
        let cl_2 = '';
        if( val === true ){
            cl_2 = ' OWE_Input_CS_ok';
        }else if( val === false ){
            cl_2 = ' OWE_Input_CS_wait';
        };
        return result + cl_2;
    }



    return (
        <div className = 'OWE_Input_inp_wrap'>
            <div className = 'OWE_Input_inp_icon'>
                { keyName !== null? (
                    <img
                        src = { LANGUAGES[ keyName ].icon }
                    />
                ): '' }
            </div>

            <div className = { getChackStatusClass( chackStatuse ) }>
                <span className = 'icon-spin2 animate-spin'></span>
                <span className = 'icon-ok'></span>
            </div>

            { children }
        </div>

    )

};


export function OWE_InputChackStatusWrap( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OWE_InputChackStatusWrapComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
