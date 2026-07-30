
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageOneTestEdit.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';
import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';

// import { SaveMainChanges } from './components/SaveMainChanges/SaveMainChanges.js';


const AdminPageOneTestEditComponent = ( props ) => {

    let {

    } = props;

    let what_to_take = [
        'mainPage',
    ];



    return (
        <AdminPageContainer>
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take }
            >


                <A_TopButtonsContainer>
                    {/* <SaveMainChanges /> */}

                </A_TopButtonsContainer>

                <div className = 'AMP_AdminPageOneTestEdit'>
AdminPageOneTestEdit
                </div>

 
            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};


export function AdminPageOneTestEdit( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageOneTestEditComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
