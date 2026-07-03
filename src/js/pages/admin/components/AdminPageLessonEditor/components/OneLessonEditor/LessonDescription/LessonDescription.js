
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonDescription.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LessonDescriptionComponent = ( props ) => {

    let {
        currentPageTitle

    } = props;
    let [ pageTitleValue, setPageTitleValue ] = useState( currentPageTitle );

    useEffect( () => {

        setPageTitleValue( currentPageTitle );

    }, [ currentPageTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value;

        console.dir( 'val' );
        console.dir( val );


    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Текст'
                value =         { pageTitleValue }
                setValue =      { setPageTitleValue }
                max =           { 255 }
                isRequired =    { true }
                errorText =     { '' }
                setErrorText =  { () => {} }
                // asTextArea =    { true }
                blure =         { blurHandler }
                chackStatuse =  { null }// true false null
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
            currentPageTitle = { lessons.currentPageTitle }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
