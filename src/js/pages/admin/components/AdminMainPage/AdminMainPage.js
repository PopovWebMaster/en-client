

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminMainPage.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


import { IconsDemonstration } from './../../../../components/IconsDemonstration/IconsDemonstration.js';
import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';



const AdminMainPageComponent = ( props ) => {

    let {

    } = props;


    return (
        <AdminPageContainer>


        </AdminPageContainer>
    )

};


export function AdminMainPage( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminMainPageComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
