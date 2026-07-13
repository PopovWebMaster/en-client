

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './IsPaidStatus.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsPaid, setCurrentLessonIsChanged } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { ToggleSwitchButton } from './../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';


const IsPaidStatusComponent = ( props ) => {

    let {
        currentLessonIsPaid,
        setCurrentLessonIsChanged,
        setCurrentLessonIsPaid

    } = props;

    const click = () => {
        setCurrentLessonIsPaid( !currentLessonIsPaid );
        setCurrentLessonIsChanged( true );
    }

    

    return (
        <div className = 'APLE_IsPaidStatust'>
            <span className = 'APLE_IsPaidStatus_text'>Платный
                { currentLessonIsPaid? (<span className = 'APLE_IPS_yes'>Да</span>): (<span className = 'APLE_IPS_no'>Нет</span>) }
                
            </span>

            <ToggleSwitchButton
                value = { currentLessonIsPaid }
                changeHandler = { click }
                style = {{ fontSize: '0.8em', margin: '0 0.5em'}}
            />
           

        </div>
    )

};


export function IsPaidStatus( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <IsPaidStatusComponent
            { ...props }
            currentLessonIsPaid = { lessons.currentLessonIsPaid }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentLessonIsPaid = { ( val ) => { dispatch( setCurrentLessonIsPaid( val ) ) } }


            

        />
    );


}
