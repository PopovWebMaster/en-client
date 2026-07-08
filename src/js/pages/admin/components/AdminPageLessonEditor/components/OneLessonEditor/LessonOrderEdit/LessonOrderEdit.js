
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonOrderEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LessonOrderEditComponent = ( props ) => {

    let {
        currentLessonOrder,
        lessons,

    } = props;
    let [ value, setValue ] = useState( currentLessonOrder );

    useEffect( () => {
        setValue( currentLessonOrder );
    }, [ currentLessonOrder ] );


    return (
        <div className = 'APLE_LessonOrderEdit'>
            <span className = 'APLE_LessonOrderEdit_text'>Порядковый номер урока - </span>
            <span className = 'APLE_LessonOrderEdit_value'>{ value + 1 }</span>


        </div>
    )

};


export function LessonOrderEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <LessonOrderEditComponent
            { ...props }
            currentLessonOrder = { lessons.currentLessonOrder }
            lessons = { lessons }


            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
