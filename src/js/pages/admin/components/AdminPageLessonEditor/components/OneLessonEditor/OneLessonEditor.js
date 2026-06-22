

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneLessonEditor.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../redux/admin/lessonsSlice.js';
import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';


const OneLessonEditorComponent = ( props ) => {

    let {
 

    } = props;


    return (
        <div className = 'APLE_OneLessonEditor'>
            APLE_OneLessonEditor

        </div>
    )

};


export function OneLessonEditor( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <OneLessonEditorComponent
            { ...props }
            currentLessonIsChanged = { lessons.currentLessonIsChanged }
            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
