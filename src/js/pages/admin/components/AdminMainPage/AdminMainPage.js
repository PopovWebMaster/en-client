
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminMainPage.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';

import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';

import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';
import { SaveMainChanges } from './components/SaveMainChanges/SaveMainChanges.js';

import { SiteBlock } from './components/SiteBlock/SiteBlock.js';
// import { LanguagePageBlock } from './components/LanguagePageBlock/LanguagePageBlock.js';
import { LanguageActiveListBlock } from './components/LanguageActiveListBlock/LanguageActiveListBlock.js';
import { LessonsListAllLanguagesBlock } from './components/LessonsListAllLanguagesBlock/LessonsListAllLanguagesBlock.js';
import { LessonsListOneLessonBlock } from './components/LessonsListOneLessonBlock/LessonsListOneLessonBlock.js';
import { TestsListAllLanguagesBlock } from './components/TestsListAllLanguagesBlock/TestsListAllLanguagesBlock.js';



const AdminMainPageComponent = ( props ) => {

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
                    <SaveMainChanges />

                </A_TopButtonsContainer>

                <div className = 'AMP_AdminMainPage'>
                    <SiteBlock />
                    {/* <LanguagePageBlock /> */}
                    <LessonsListAllLanguagesBlock />
                    <LessonsListOneLessonBlock />
                    <TestsListAllLanguagesBlock />
                    <LanguageActiveListBlock />

                </div>

 
            </GetStartingAdminDataFromServer>
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
