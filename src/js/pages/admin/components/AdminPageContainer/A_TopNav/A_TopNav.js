
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_TopNav.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


import { get_route_list } from './../../../vendors/get_route_list.js';

import { A_NavItem } from './A_NavItem/A_NavItem.js';

import { A_RightsLink } from './A_RightsLink/A_RightsLink.js';
// import { A_LanguageMenu } from './A_LanguageMenu/A_LanguageMenu.js';

import { LanguageMenu } from './../../../../../components/LanguageMenu/LanguageMenu.js';


const A_TopNavComponent = ( props ) => {

    let {

        children

    } = props;

    const create = () => {
        let arr = get_route_list();

        let div = arr.map( ( item, index ) => {
            let {
                ROUTE,
                NAME,
                TITLE,
                ICON
            } = item;

            if( index === 0 ){
                return (
                    <React.Fragment key =       { index }>
                        <A_NavItem
                            route =     { HOST_TO_API_SERVER }
                            routeName = { '' }
                            title =     { 'Site' }
                            icon =      { 'icon-star-empty' }
                            asLink =    { true }
                            target =    '_blank'

                        />
                        <A_NavItem
                            key =       { index }
                            route =     { ROUTE }
                            routeName = { NAME }
                            title =     { TITLE }
                            icon =      { ICON }

                        />
                    </React.Fragment>
                );
            }else{
                return (
                    <A_NavItem
                        key =       { index }
                        route =     { ROUTE }
                        routeName = { NAME }
                        title =     { TITLE }
                        icon =      { ICON }

                    />
                );
            }

            

        } );

        return div;

    };


    return (

        <div className = 'A_TopNav'>
            { create() }

            <div className = 'A_TopNav_right'>

                <LanguageMenu />

                <A_RightsLink
                    route  = { 'logout' } 
                    title  = { 'Выйти' }
                    icon = ''
                />

            </div>
        </div>


    )

};


export function A_TopNav( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <A_TopNavComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
