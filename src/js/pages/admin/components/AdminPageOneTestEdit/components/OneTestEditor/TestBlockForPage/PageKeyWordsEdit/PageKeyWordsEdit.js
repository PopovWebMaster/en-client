
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageKeyWordsEdit.scss';
import { selectorData as testsSlice, setCurrentTestPageKeyWords, setCurrentTestIsChanged } from './../../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageKeyWordsEditComponent = ( props ) => {

    let {
        currentTestPageKeyWords,
        setCurrentTestIsChanged,
        setCurrentTestPageKeyWords,

    } = props;
    let [ pageValue, setPageValue ] = useState( currentTestPageKeyWords );

    useEffect( () => {

        setPageValue( currentTestPageKeyWords );

    }, [ currentTestPageKeyWords ] );

    const blurHandler = ( e ) => {
        // let val = e.target.value;

        let val = e.target.value.trim();
        if( val !== currentTestPageKeyWords ){
            setCurrentTestPageKeyWords( val );
            setCurrentTestIsChanged( true );
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

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <PageKeyWordsEditComponent
            { ...props }
            currentTestPageKeyWords = { tests.currentTestPageKeyWords }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestPageKeyWords = { ( val ) => { dispatch( setCurrentTestPageKeyWords( val ) ) } }


            

        />
    );


}
