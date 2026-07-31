
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestBlockForPage.scss';

import { selectorData as testsSlice } from './../../../../../../../redux/admin/testsSlice.js';

// import { PageTitleEdit } from './../PageTitleEdit/PageTitleEdit.js';
// import { PageDescriptionEdit } from './../PageDescriptionEdit/PageDescriptionEdit.js';
// import { PageKeyWordsEdit } from './../PageKeyWordsEdit/PageKeyWordsEdit.js';
// import { PageTextEdit } from './../PageTextEdit/PageTextEdit.js';



// import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';
import { TestBlockContainer } from './../TestBlockContainer/TestBlockContainer.js';
import { PageTitleEdit } from './PageTitleEdit/PageTitleEdit.js';
import { PageTextEdit } from './PageTextEdit/PageTextEdit.js';
import { PageDescriptionEdit } from './PageDescriptionEdit/PageDescriptionEdit.js';
import { PageKeyWordsEdit } from './PageKeyWordsEdit/PageKeyWordsEdit.js';



const TestBlockForPageComponent = ( props ) => {

    let {
        currentTestPageTitle,
        currentTestPageDescription,
        currentTestPageKeyWords,
        currentTestPageText,


    } = props;

    let [ pageIsOpen, setPageIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );

    useEffect( () => {

        if( currentTestPageDescription !== '' && currentTestPageKeyWords !== '' && currentTestPageText !== '' && currentTestPageTitle !== '' ){
            setAttention( false );
        }else{
            setAttention( true );
        };

        

    }, [
        currentTestPageTitle,
        currentTestPageDescription,
        currentTestPageKeyWords,
        currentTestPageText,

    ] );




    return (

        <TestBlockContainer
            isOpen =                { pageIsOpen }
            setIsOpen =             { setPageIsOpen }
            blockTitle =            'Страница'
            blockSecondTitle =      { currentTestPageTitle }
            openingContainerTitle = 'Данные страницы'
            attention = { attention }

        >
            <PageTitleEdit />
            <PageTextEdit />
            <PageDescriptionEdit />
            <PageKeyWordsEdit />

        </TestBlockContainer>

    )

};


export function TestBlockForPage( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestBlockForPageComponent
            { ...props }

            currentTestPageTitle =          { tests.currentTestPageTitle }
            currentTestPageDescription =    { tests.currentTestPageDescription }
            currentTestPageKeyWords =       { tests.currentTestPageKeyWords }
            currentTestPageText =           { tests.currentTestPageText }



            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
