
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_NavItem.scss';

import { NavLink } from 'react-router-dom';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";



const A_NavItemComponent = ( props ) => {

    let {

        route,
        routeName,
        title,
        icon,

    } = props;


    return (

        <NavLink
            to = { route }
            className={ ({ isActive }) => isActive ? "isActive A_NavItem" : "A_NavItem" }
            end
        >
            <>
                <span className = { `ANI_icon ${ icon }` }></span>
                <span className = 'ANI_title'>{ title }</span>
            </>
                
        </NavLink>


    )

};


export function A_NavItem( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <A_NavItemComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
