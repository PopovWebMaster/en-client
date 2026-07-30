
import React, { useRef, useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageTests.scss';

import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';
import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';
// import { SaveMainChanges } from './components/SaveMainChanges/SaveMainChanges.js';

import { SaveTestsChanges } from './components/SaveTestsChanges/SaveTestsChanges.js';
import { AddNewTestButton } from './components/AddNewTestButton/AddNewTestButton.js';
import { TestsList } from './components/TestsList/TestsList.js';


const AdminPageTestsComponent = ( props ) => {

    let {

    } = props;

    let what_to_take = [
        'testsList',
    ];


    return (
        <AdminPageContainer>
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take }
            >


                <A_TopButtonsContainer>
                    <AddNewTestButton />
                    <SaveTestsChanges />

                </A_TopButtonsContainer>

                <div className = 'AMP_AdminPageTests'>
                   <TestsList />
                </div>

 
            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};


export function AdminPageTests( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageTestsComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
