
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageContainer.scss';

import { useNavigate } from "react-router-dom";


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { A_TopNav } from './A_TopNav/A_TopNav.js';


const AdminPageContainerComponent = ( props ) => {

    let {
        goBackButton = false,

        children

    } = props;

    let navigate = useNavigate();

    const clickBack = () => {
        navigate( -1 );

    };


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

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
