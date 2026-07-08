
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonLevelNameEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentLessonLevelName } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LessonLevelNameEditComponent = ( props ) => {

    let {
        currentLessonLevelName,
        setCurrentLessonIsChanged,
        setCurrentLessonLevelName,

    } = props;

    let [ lessonValue, setLessonValue ] = useState( currentLessonLevelName );

    useEffect( () => {
        setLessonValue( currentLessonLevelName );
    }, [ currentLessonLevelName ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentLessonLevelName ){
            setCurrentLessonLevelName( val );
            setCurrentLessonIsChanged( true );
        };
    }

    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Уровень'
                value =         { lessonValue }
                setValue =      { setLessonValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LessonLevelNameEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <LessonLevelNameEditComponent
            { ...props }
            currentLessonLevelName = { lessons.currentLessonLevelName }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentLessonLevelName = { ( val ) => { dispatch( setCurrentLessonLevelName( val ) ) } }


        />
    );


}
