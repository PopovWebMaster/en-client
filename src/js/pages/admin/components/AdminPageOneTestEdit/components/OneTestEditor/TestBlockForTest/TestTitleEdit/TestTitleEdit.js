
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestTitleEdit.scss';
import { selectorData as testsSlice, setCurrentTestIsChanged, setCurrentTestTitle } from './../../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TestTitleEditComponent = ( props ) => {

    let {
        currentTestTitle,
        setCurrentTestIsChanged,
        setCurrentTestTitle,

    } = props;

    let [ testValue, setTestValue ] = useState( currentTestTitle );

    useEffect( () => {
        setTestValue( currentTestTitle );
    }, [ currentTestTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentTestTitle ){
            setCurrentTestTitle( val );
            setCurrentTestIsChanged( true );
        };
    }

    return (
        <div className = 'APTE_PageTitleEdit'>
            <OC_Input
                title =         'Заголовок Теста'
                value =         { testValue }
                setValue =      { setTestValue }
                max =           { 255 }
                // isRequired =    { true }
                // errorText =     { '' }
                // setErrorText =  { () => {} }
                // asTextArea =    { true }
                blure =         { blurHandler }
                // chackStatuse =  { null }// true false null
            />

        </div>
    )

};


export function TestTitleEdit( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <TestTitleEditComponent
            { ...props }
            currentTestTitle = { tests.currentTestTitle }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestTitle = { ( val ) => { dispatch( setCurrentTestTitle( val ) ) } }



        />
    );


}
