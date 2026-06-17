
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageLessons.scss';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';

import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';

import { AddNewLessonButton } from './components/AddNewLessonButton/AddNewLessonButton.js';
import { LessonsList } from './components/LessonsList/LessonsList.js';
import { SaveLessonsChanges } from './components/SaveLessonsChanges/SaveLessonsChanges.js';

const AdminPageLessonsComponent = ( props ) => {

    let {
        languageKeyName,

    } = props;
    let what_to_take = [
        'lessonList',
    ];


    return (
        <AdminPageContainer>
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take}
                currentLessonId =   { null }
            >

                
                <A_TopButtonsContainer>

                    <AddNewLessonButton />
                    <SaveLessonsChanges />

                </A_TopButtonsContainer>

                <LessonsList />
               
            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};


export function AdminPageLessons( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageLessonsComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
