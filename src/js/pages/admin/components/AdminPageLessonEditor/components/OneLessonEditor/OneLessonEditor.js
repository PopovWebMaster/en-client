

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneLessonEditor.scss';
// import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../redux/admin/lessonsSlice.js';

import { IsActiveStatusEdit } from './IsActiveStatusEdit/IsActiveStatusEdit.js';
import { LessonOrderEdit } from './LessonOrderEdit/LessonOrderEdit.js';

import { LessonBlockForPage } from './LessonBlockForPage/LessonBlockForPage.js';
import { LessonBlockForLesson } from './LessonBlockForLesson/LessonBlockForLesson.js';
import { LessonBlockForPhrases } from './LessonBlockForPhrases/LessonBlockForPhrases.js';
import { LessonBlockForWords } from './LessonBlockForWords/LessonBlockForWords.js';


const OneLessonEditorComponent = ( props ) => {

    let {
 

    } = props;



    return (
        <div className = 'APLE_OneLessonEditor'>

            <div className = 'OLE_blockWrap'>
                <div className = 'OLE_topBlockWrap'>
                    <LessonOrderEdit />
                    <IsActiveStatusEdit />
                </div>
            </div>

            <LessonBlockForPage />
            <LessonBlockForLesson />
            <LessonBlockForWords />
            <LessonBlockForPhrases />
            

            

        </div>
    )

};


export function OneLessonEditor( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <OneLessonEditorComponent
            { ...props }
            // currentLessonIsChanged = { lessons.currentLessonIsChanged }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
