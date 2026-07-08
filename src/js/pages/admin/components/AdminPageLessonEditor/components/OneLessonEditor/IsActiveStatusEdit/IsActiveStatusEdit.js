
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './IsActiveStatusEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentLessonIsActive } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { ToggleSwitchButton } from './../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';


const IsActiveStatusEditComponent = ( props ) => {

    let {
        currentLessonIsActive,
        setCurrentLessonIsChanged,
        setCurrentLessonIsActive

    } = props;

    const click = () => {
        setCurrentLessonIsActive( !currentLessonIsActive );
        setCurrentLessonIsChanged( true );
    }

    

    return (
        <div className = 'APLE_IsActiveStatusEdit'>
            <span className = 'APLE_IsActiveStatusEdit_text'>Статус активности</span>

            <ToggleSwitchButton
                value = { currentLessonIsActive }
                changeHandler = { click }
                style = {{ fontSize: '0.8em', margin: '0 0.5em'}}
            />
           

        </div>
    )

};


export function IsActiveStatusEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <IsActiveStatusEditComponent
            { ...props }
            currentLessonIsActive = { lessons.currentLessonIsActive }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentLessonIsActive = { ( val ) => { dispatch( setCurrentLessonIsActive( val ) ) } }


            

        />
    );


}
