
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonTitleEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentLessonTitle } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LessonTitleEditComponent = ( props ) => {

    let {
        currentLessonTitle,
        setCurrentLessonIsChanged,
        setCurrentLessonTitle,

    } = props;
    let [ lessonValue, setLessonValue ] = useState( currentLessonTitle );

    useEffect( () => {

        setLessonValue( currentLessonTitle );

    }, [ currentLessonTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentLessonTitle ){
            setCurrentLessonTitle( val );
            setCurrentLessonIsChanged( true );
        };

    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Заголовок урока'
                value =         { lessonValue }
                setValue =      { setLessonValue }
                max =           { 255 }
                // isRequired =    { true }
                // errorText =     { '' }
                // setErrorText =  { () => {} }
                // asTextArea =    { true }
                blure =         { blurHandler }
                // chackStatuse =  { null }// true false null
            />

        </div>
    )

};


export function LessonTitleEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <LessonTitleEditComponent
            { ...props }
            currentLessonTitle = { lessons.currentLessonTitle }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentLessonTitle = { ( val ) => { dispatch( setCurrentLessonTitle( val ) ) } }



        />
    );


}
