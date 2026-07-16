
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageContainer.scss';

import { useNavigate } from "react-router-dom";


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';

import { A_TopNav } from './A_TopNav/A_TopNav.js';


const AdminPageContainerComponent = ( props ) => {

    let {
        goBackButton = false,
        // languageKeyName,

        children

    } = props;

    // let [ keyName, setKeyName ] = useState( languageKeyName );

    let navigate = useNavigate();

    const clickBack = () => {
        navigate( -1 );
    };

    // useEffect( () => {
    //     if( languageKeyName !== keyName ){
    //         console.dir( 'languageKeyName' );
    //         console.dir( languageKeyName );
    //         console.dir( window.location.pathname);


    //         // navigate( window.location.pathname );


    //         setKeyName( languageKeyName );
    //     };

    // }, [ languageKeyName ] );


    return (

        <div className = 'AdminPageContainer'>

            { goBackButton? (
                <div
                    className = 'goBackButton'
                    onClick = { clickBack }
                >
                    <span className = 'goBackButton_icon icon-left'></span>
                    <span className = 'goBackButton_text'>Назад</span>

                </div>

            ): '' }

            <A_TopNav />

            <div className = 'APC_body'>
                { children }
            </div>

        </div>


    )

};


export function AdminPageContainer( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageContainerComponent
            { ...props }
            // languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
