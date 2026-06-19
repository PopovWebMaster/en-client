
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ToggleSwitchButton.scss';

const ToggleSwitchButtonComponent = ( props ) => {

    let {
        value,
        changeHandler,

        style = {},
    } = props;




    return (
        <div className = { `toggleSwitchButton ${value? 'isAcive': ''}` }
            style = { {...style } }
            onClick = { changeHandler }
        >
            <span className = 'TSB_left'></span>
            <span className = 'TSB_circle'></span>

        </div>

    )

};


export function ToggleSwitchButton( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <ToggleSwitchButtonComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
