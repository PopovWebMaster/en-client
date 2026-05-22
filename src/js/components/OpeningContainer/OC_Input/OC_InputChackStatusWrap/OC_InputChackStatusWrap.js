// OC_InputChackStatusWrap


import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_InputChackStatusWrap.scss';

const OC_InputChackStatusWrapComponent = ( props ) => {

    let {
        chackStatuse,

        children,
       
    } = props;

    const getChackStatusClass = ( val ) => {
        let result = 'OC_Input_chackStatus';
        let cl_2 = '';
        if( val === true ){
            cl_2 = ' OC_Input_CS_ok';
        }else if( val === false ){
            cl_2 = ' OC_Input_CS_wait';
        };
        return result + cl_2;
    }



    return (
        <div className = 'OC_Input_inp_wrap'>
            <div className = { getChackStatusClass( chackStatuse ) }>
                <span className = 'icon-spin2 animate-spin'></span>
                <span className = 'icon-ok'></span>
            </div>

            { children }
        </div>

    )

};


export function OC_InputChackStatusWrap( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputChackStatusWrapComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
