
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageDescriptionEdit.scss';
import { selectorData as testsSlice, setCurrentTestPageDescription, setCurrentTestIsChanged } from './../../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageDescriptionEditComponent = ( props ) => {

    let {
        currentTestPageDescription,
        setCurrentTestIsChanged,
        setCurrentTestPageDescription,

    } = props;
    let [ pageValue, setPageValue ] = useState( currentTestPageDescription );

    useEffect( () => {

        setPageValue( currentTestPageDescription );

    }, [ currentTestPageDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentTestPageDescription ){
            setCurrentTestPageDescription( val );
            setCurrentTestIsChanged( true );
        };


    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Описание страницы <meta name="description" content>'
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

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <PageDescriptionEditComponent
            { ...props }
            currentTestPageDescription = { tests.currentTestPageDescription }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestPageDescription = { ( val ) => { dispatch( setCurrentTestPageDescription( val ) ) } }


        />
    );


}
