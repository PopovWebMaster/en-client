
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonBlockForLesson.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';

import { LessonTitleEdit } from './../LessonTitleEdit/LessonTitleEdit.js';
import { LessonDescription } from './../LessonDescription/LessonDescription.js';
import { LessonLevelNameEdit } from './../LessonLevelNameEdit/LessonLevelNameEdit.js';

import { get_isOpen_for_lesson } from './../vendors/get_isOpen_for_lesson.js';

import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';

const LessonBlockForLessonComponent = ( props ) => {

    let {
        currentLessonTitle,

    } = props;

    let [ lessonIsOpen, setLessonIsOpen ] = useState( false );

    useEffect( () => {

        let timerId = setTimeout( () => {
            setLessonIsOpen( get_isOpen_for_lesson() );
            clearTimeout( timerId );
        }, 300 );
        

    }, [] );




    return (

        <LessonBlockContainer
            isOpen =                { lessonIsOpen }
            setIsOpen =             { setLessonIsOpen }
            blockTitle =            'Урок'
            blockSecondTitle =      { currentLessonTitle }
            openingContainerTitle = 'Данные урока'
        >
            <LessonTitleEdit />
            <LessonDescription />
            <LessonLevelNameEdit />

        </LessonBlockContainer>

    )

};


export function LessonBlockForLesson( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockForLessonComponent
            { ...props }
            currentLessonTitle = { lessons.currentLessonTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
