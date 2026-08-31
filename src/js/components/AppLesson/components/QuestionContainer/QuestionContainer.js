
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './QuestionContainer.scss';

// import { LessonTask } from './../LessonTask/LessonTask.js';
import { LessonTask } from './../LessonTask/LessonTask.js';


const QuestionContainerComponent = ( props ) => {

    let {
        // appMessage,
        // currentStepNomber,
        children,

    } = props;

    

    return (

        <div className = 'AL_QuestionContainer' >
            <div className = 'taskWrap'>
                <LessonTask />
            </div>

            { children }
        </div>

    )

};


export function QuestionContainer( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <QuestionContainerComponent
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
