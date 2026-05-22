
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_InputErrorText.scss';



const OC_InputErrorTextComponent = ( props ) => {

    let {
        errorText
        
    } = props;

    return (

        <p className = 'OC_Input_errText'>{ errorText }</p>

    )

};


export function OC_InputErrorText( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputErrorTextComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
