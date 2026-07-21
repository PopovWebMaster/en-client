
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageKeyWordsEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentPageKeyWords } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageKeyWordsEditComponent = ( props ) => {

    let {
        currentPageKeyWords,
        setCurrentLessonIsChanged,
        setCurrentPageKeyWords,

    } = props;
    let [ pageValue, setPageValue ] = useState( currentPageKeyWords );

    useEffect( () => {

        setPageValue( currentPageKeyWords );

    }, [ currentPageKeyWords ] );

    const blurHandler = ( e ) => {
        // let val = e.target.value;

        let val = e.target.value.trim();
        if( val !== currentPageKeyWords ){
            setCurrentPageKeyWords( val );
            setCurrentLessonIsChanged( true );
        };


    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Ключевые слова <meta name="keywords" content>'
                value =         { pageValue }
                setValue =      { setPageValue }
                max =           { 255 }
                // isRequired =    { true }
                // errorText =     { '' }
                // setErrorText =  { () => {} }
                asTextArea =    { true }
                blure =         { blurHandler }
                chackStatuse =  { null }// true false null
            />

        </div>
    )

};


export function PageKeyWordsEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <PageKeyWordsEditComponent
            { ...props }
            currentPageKeyWords = { lessons.currentPageKeyWords }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentPageKeyWords = { ( val ) => { dispatch( setCurrentPageKeyWords( val ) ) } }


            

        />
    );


}
