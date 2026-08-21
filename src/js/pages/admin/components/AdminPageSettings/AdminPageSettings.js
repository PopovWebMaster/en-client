
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageSettings.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';
import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';

// import { SaveMainChanges } from './components/SaveMainChanges/SaveMainChanges.js';
import { SaveSettingsChanges } from './components/SaveSettingsChanges/SaveSettingsChanges.js';
import { ButtonNameStep_1 } from './components/ButtonNameStep_1/ButtonNameStep_1.js';
import { ButtonNameStep_2 } from './components/ButtonNameStep_2/ButtonNameStep_2.js';
import { ButtonNameStep_3 } from './components/ButtonNameStep_3/ButtonNameStep_3.js';
import { TaskTextStep_1 } from './components/TaskTextStep_1/TaskTextStep_1.js';
import { TaskTextStep_2 } from './components/TaskTextStep_2/TaskTextStep_2.js';
import { TaskTextStep_3 } from './components/TaskTextStep_3/TaskTextStep_3.js';
import { RepeateCircleLengtn } from './components/RepeateCircleLengtn/RepeateCircleLengtn.js';
import { CorrectAnswersLength } from './components/CorrectAnswersLength/CorrectAnswersLength.js';


const AdminPageSettingsComponent = ( props ) => {

    let {

    } = props;

    let what_to_take = [
        'appData',
    ];



    return (
        <AdminPageContainer>
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take }
            >


                <A_TopButtonsContainer>
                    <SaveSettingsChanges />

                </A_TopButtonsContainer>

                <div className = 'AMP_AdminPageSettings'>

                    <ButtonNameStep_1 />
                    <TaskTextStep_1 />
                    <ButtonNameStep_2 />
                    <TaskTextStep_2 />
                    <ButtonNameStep_3 />
                    <TaskTextStep_3 />

                    <RepeateCircleLengtn />
                    <CorrectAnswersLength />

                </div>

            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};


export function AdminPageSettings( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageSettingsComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
