// TestBlockForLessons


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestBlockForLessons.scss';

import { selectorData as testsSlice } from './../../../../../../../redux/admin/testsSlice.js';

import { TestBlockContainer } from './../TestBlockContainer/TestBlockContainer.js';
import { AddNewLessonButton } from './AddNewLessonButton/AddNewLessonButton.js';


const TestBlockForLessonsComponent = ( props ) => {

    let {
        currentTestLessons,
        currentTestWordsCount,
    
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );

    useEffect( () => {
        if( currentTestLessons.length > 0 ){
            setAttention( false );
        }else{
            setAttention( true );
        };
    }, [ currentTestLessons ] );




    return (

        <TestBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Уроки'
            blockSecondTitle =      { `Всего уроков: ${currentTestLessons.length}. Всего слов: ${currentTestWordsCount}` }
            openingContainerTitle = 'Данные уроков'
            attention = { attention }
        >
            <div className = 'OTE_topButtonsWrap'>
            
                <div className = 'OTE_topButtons_left'>

                    

                </div>
                
                <AddNewLessonButton />

                
            </div>



        </TestBlockContainer>

    )

};


export function TestBlockForLessons( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestBlockForLessonsComponent
            { ...props }
            currentTestLessons = { tests.currentTestLessons }
            currentTestWordsCount = { tests.currentTestWordsCount }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
