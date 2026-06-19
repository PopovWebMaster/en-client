
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsList.scss';

import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';

import { OneLessonItem } from './OneLessonItem/OneLessonItem.js';


const LessonsListComponent = ( props ) => {

    let {
        lessonList,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { id } = item;

            return (
                <OneLessonItem 
                    key = { index }
                    lessonId = { id }
                />
            );
        } );

        return div

    };

    return (
        <div className = 'APL_LessonsList'>
            { create( lessonList ) }
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
