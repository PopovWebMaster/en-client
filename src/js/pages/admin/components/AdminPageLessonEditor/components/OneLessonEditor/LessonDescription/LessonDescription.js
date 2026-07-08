
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonDescription.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentLessonDescription } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LessonDescriptionComponent = ( props ) => {

    let {
        currentLessonDescription,
        setCurrentLessonIsChanged,
        setCurrentLessonDescription,

    } = props;
    let [ lessonValue, setLessonValue ] = useState( currentLessonDescription );

    useEffect( () => {

        setLessonValue( currentLessonDescription );

    }, [ currentLessonDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentLessonDescription ){
            setCurrentLessonDescription( val );
            setCurrentLessonIsChanged( true );
        };
    }

    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Краткое описание'
                value =         { lessonValue }
                setValue =      { setLessonValue }
                max =           { 255 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LessonDescription( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <LessonDescriptionComponent
            { ...props }
            currentLessonDescription = { lessons.currentLessonDescription }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentLessonDescription = { ( val ) => { dispatch( setCurrentLessonDescription( val ) ) } }


        />
    );


}
