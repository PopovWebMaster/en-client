
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageLessonEditor.scss';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';
import { selectorData as lessonsSlice } from './../../../../redux/admin/lessonsSlice.js';



import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';

import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';

// import { AddNewLessonButton } from './components/AddNewLessonButton/AddNewLessonButton.js';
// import { LessonsList } from './components/LessonsList/LessonsList.js';
// import { SaveLessonsChanges } from './components/SaveLessonsChanges/SaveLessonsChanges.js';

import { SaveLessonDataChanges } from './components/SaveLessonDataChanges/SaveLessonDataChanges.js';
import { OneLessonEditor } from './components/OneLessonEditor/OneLessonEditor.js';

const AdminPageLessonEditorComponent = ( props ) => {

    let {
        languageKeyName,
        currentLessonId,

    } = props;

    let what_to_take = [
        'oneLessonData',
    ];


    return (
        <AdminPageContainer
            goBackButton = { true }
        >
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take}
                currentLessonId =   { currentLessonId }
            >

                <A_TopButtonsContainer>
                    <SaveLessonDataChanges />

                </A_TopButtonsContainer>


                <OneLessonEditor />

               
            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};


export function AdminPageLessonEditor( props ){

    const language = useSelector( languageSlice );
    const lessons = useSelector( lessonsSlice );


    // const dispatch = useDispatch();

    return (
        <AdminPageLessonEditorComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            currentLessonId = { lessons.currentLessonId }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
