
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageTextEdit.scss';
import { selectorData as testsSlice, setCurrentTestPageText, setCurrentTestIsChanged } from './../../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageTextEditComponent = ( props ) => {

    let {
        currentTestPageText,
        setCurrentTestIsChanged,
        setCurrentTestPageText,

    } = props;
    let [ pageValue, setPageValue ] = useState( currentTestPageText );

    useEffect( () => {

        setPageValue( currentTestPageText );

    }, [ currentTestPageText ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentTestPageText ){
            setCurrentTestPageText( val );
            setCurrentTestIsChanged( true );
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

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <PageTextEditComponent
            { ...props }
            currentTestPageText = { tests.currentTestPageText }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestPageText = { ( val ) => { dispatch( setCurrentTestPageText( val ) ) } }


        />
    );


}
