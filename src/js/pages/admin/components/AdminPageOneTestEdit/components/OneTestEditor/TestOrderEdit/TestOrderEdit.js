
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TestOrderEdit.scss';
import { selectorData as testsSlice } from './../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TestOrderEditComponent = ( props ) => {

    let {
        currentTestOrder,
        lessons,

    } = props;

    return (
        <div className = 'APTE_TestOrderEdit'>
            <span className = 'APTE_TestOrderEdit_text'>Порядковый номер теста - </span>
            <span className = 'APTE_TestOrderEdit_value'>{ currentTestOrder }</span>
        </div>
    )

};

export function TestOrderEdit( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestOrderEditComponent
            { ...props }
            currentTestOrder = { tests.currentTestOrder }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
