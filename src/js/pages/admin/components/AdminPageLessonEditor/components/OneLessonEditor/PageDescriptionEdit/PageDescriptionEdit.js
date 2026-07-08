// PageDescriptionEdit


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageDescriptionEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentPageDescription } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageDescriptionEditComponent = ( props ) => {

    let {
        currentPageDescription,
        setCurrentLessonIsChanged,
        setCurrentPageDescription,

    } = props;
    let [ pageValue, setPageValue ] = useState( currentPageDescription );

    useEffect( () => {

        setPageValue( currentPageDescription );

    }, [ currentPageDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentPageDescription ){
            setCurrentPageDescription( val );
            setCurrentLessonIsChanged( true );
        };


    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Описание страницы'
                value =         { pageValue }
                setValue =      { setPageValue }
                max =           { 255 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function PageDescriptionEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <PageDescriptionEditComponent
            { ...props }
            currentPageDescription = { lessons.currentPageDescription }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentPageDescription = { ( val ) => { dispatch( setCurrentPageDescription( val ) ) } }


            

        />
    );


}
