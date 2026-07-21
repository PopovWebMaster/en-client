
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageTextEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentPageText } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageTextEditComponent = ( props ) => {

    let {
        currentPageText,
        setCurrentLessonIsChanged,
        setCurrentPageText,

    } = props;
    let [ pageValue, setPageValue ] = useState( currentPageText );

    useEffect( () => {

        setPageValue( currentPageText );

    }, [ currentPageText ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentPageText ){
            setCurrentPageText( val );
            setCurrentLessonIsChanged( true );
        };

    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Текст на странице урока'
                value =         { pageValue }
                setValue =      { setPageValue }
                max =           { 255 }
                asTextArea =    { true }
                blure =         { blurHandler }
                // chackStatuse =  { null }// true false null
            />

        </div>
    )

};


export function PageTextEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <PageTextEditComponent
            { ...props }
            currentPageText = { lessons.currentPageText }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentPageText = { ( val ) => { dispatch( setCurrentPageText( val ) ) } }


        />
    );


}
