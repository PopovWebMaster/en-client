
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestDescription.scss';
import { selectorData as testsSlice, setCurrentTestIsChanged, setCurrentTestDescription } from './../../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TestDescriptionComponent = ( props ) => {

    let {
        currentTestDescription,
        setCurrentTestIsChanged,
        setCurrentTestDescription,

    } = props;
    
    let [ testValue, setTestValue ] = useState( currentTestDescription );

    useEffect( () => {

        setTestValue( currentTestDescription );

    }, [ currentTestDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentTestDescription ){
            setCurrentTestDescription( val );
            setCurrentTestIsChanged( true );
        };
    }

    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Краткое описание. Видно в меню со списком тестов, кратко о том, что в тесте.'
                value =         { testValue }
                setValue =      { setTestValue }
                max =           { 255 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TestDescription( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <TestDescriptionComponent
            { ...props }
            currentTestDescription = { tests.currentTestDescription }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestDescription = { ( val ) => { dispatch( setCurrentTestDescription( val ) ) } }


        />
    );


}
