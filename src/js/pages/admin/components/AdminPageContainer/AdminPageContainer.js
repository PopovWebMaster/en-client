
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageContainer.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { A_TopNav } from './A_TopNav/A_TopNav.js';


const AdminPageContainerComponent = ( props ) => {

    let {

        children

    } = props;


    return (

        <div className = 'AdminPageContainer'>

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
