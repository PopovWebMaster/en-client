// A_RightsLink


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_RightsLink.scss';

// import { NavLink } from 'react-router-dom';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";



const A_RightsLinkComponent = ( props ) => {

    let {
        route,
        title,
        icon = '',

    } = props;


    return (

        <a 
            href = { `${HOST_TO_API_SERVER}/${route}`}
            className = 'A_RightsLink'
        >
            <span className = { `ARL_icon ${ icon }` }></span>
            <span className = 'ARL_title'>{ title }</span>
        </a>
                


    )

};


export function A_RightsLink( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <A_RightsLinkComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
