
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestBlockForTest.scss';

import { selectorData as testsSlice } from './../../../../../../../redux/admin/testsSlice.js';

import { TestBlockContainer } from './../TestBlockContainer/TestBlockContainer.js';

import { TestTitleEdit } from './TestTitleEdit/TestTitleEdit.js';
import { TestDescription } from './TestDescription/TestDescription.js';
import { TestLevelNameEdit } from './TestLevelNameEdit/TestLevelNameEdit.js';


const TestBlockForTestComponent = ( props ) => {

    let {
        currentTestTitle,
        currentTestDescription,
        currentTestLevelName,

    } = props;

    let [ lessonIsOpen, setLessonIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );

    useEffect( () => {
        if( currentTestDescription !== '' && currentTestLevelName !== '' && currentTestTitle !== '' ){
            setAttention( false );
        }else{
            setAttention( true );
        };
        

    }, [
        currentTestDescription,
        currentTestLevelName,
        currentTestTitle,
    ] );




    return (

        <TestBlockContainer
            isOpen =                { lessonIsOpen }
            setIsOpen =             { setLessonIsOpen }
            blockTitle =            'Тест'
            blockSecondTitle =      { currentTestTitle }
            openingContainerTitle = 'Данные теста'
            attention = { attention }
        >
            <TestTitleEdit />
            <TestDescription />
            <TestLevelNameEdit />

        </TestBlockContainer>

    )

};


export function TestBlockForTest( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestBlockForTestComponent
            { ...props }
            currentTestTitle = { tests.currentTestTitle }
            currentTestDescription = { tests.currentTestDescription }
            currentTestLevelName = { tests.currentTestLevelName }


            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
