// OWE_ErrorText


import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OWE_ErrorText.scss';
import { LANGUAGES } from './../../../../../../../config/languages.js'

const OWE_ErrorTextComponent = ( props ) => {

    let {
        errorText,
        widthValue,
       
    } = props;

  

    return (<>
        { errorText === ''? '': (
            <p
                className = 'OWE_WordInput_err'
            >{ errorText }</p>
        )}
    </>)

};


export function OWE_ErrorText( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OWE_ErrorTextComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
