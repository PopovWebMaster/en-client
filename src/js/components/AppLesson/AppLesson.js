
import React, { useState, useEffect, useMemo }   from "react";

// import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppLesson.scss';

import { AppShowAnimationContainer } from './../AppShowAnimationContainer/AppShowAnimationContainer.js';
import { SetAppWordsListToStore } from './../SetAppWordsListToStore/SetAppWordsListToStore.js';
import { SetDataFromMetaToStore } from './../SetDataFromMetaToStore/SetDataFromMetaToStore.js';
import { add_WordsListAsText_to_DOM } from './../../helpers/add_WordsListAsText_to_DOM.js';
// import { LessonTask } from './components/LessonTask/LessonTask.js';
import { StepButtons } from './components/StepButtons/StepButtons.js';
import { ProgressScale } from './components/ProgressScale/ProgressScale.js';

// import { SetAppDataToStore } from './../SetAppDataToStore/SetAppDataToStore.js';
import { SetAppDataToStore } from './../SetAppDataToStore/SetAppDataToStore.js';
// import { SetCurrentStepDataToStore } from './../SetCurrentStepDataToStore/SetCurrentStepDataToStore.js';
import { AppDisplay } from './components/AppDisplay/AppDisplay.js';
import { add_MyLessonsSuccess_into_DOM } from './../MyLessonsSuccess/add_MyLessonsSuccess_into_DOM.js';

// import { selectorData as appDataSlice } from './../../redux/appDataSlice.js';
import { selectorData as appDataSlice } from './../../redux/appDataSlice.js';



const AppLessonComponent = ( props ) => {

    let {
        // showStatus,
        // setShowStatus,
        // store,
        userSuccessList,
        userResult,
    } = props;

    useEffect( () => {
        add_WordsListAsText_to_DOM();
        add_MyLessonsSuccess_into_DOM();
        
    }, [] );



    return (

        <SetDataFromMetaToStore>
            <AppShowAnimationContainer>
                <SetAppWordsListToStore>
                    <SetAppDataToStore>
                        {/* <SetCurrentStepDataToStore> */}
                            <div className = 'appLesson'>

                                
                                <StepButtons />
                                <ProgressScale />
                                <AppDisplay />


                            </div>
                        {/* </SetCurrentStepDataToStore> */}
                    </SetAppDataToStore>
                </SetAppWordsListToStore>
            </AppShowAnimationContainer>
        </SetDataFromMetaToStore>



    )

};


export function AppLesson( props ){

    // const appControl = useSelector( appControlSlise );
    // const dispatch = useDispatch();

    const appData = useSelector( appDataSlice );

    return (
        <AppLessonComponent
            { ...props }
            userSuccessList = { appData.userSuccessList }
            userResult = { appData.userResult }


            
            // showStatus = { appControl.showStatus }
            // setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
