
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsList.scss';

import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';


const LessonsListComponent = ( props ) => {

    let {
        lessonList,

    } = props;

    return (
        <div className = 'APL_LessonsList'>
            APL_LessonsList
        </div>

    )

};


export function LessonsList( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonsListComponent
            { ...props }
            lessonList = { lessons.lessonList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
