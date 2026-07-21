
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonBlockForPage.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';

import { PageTitleEdit } from './../PageTitleEdit/PageTitleEdit.js';
import { PageDescriptionEdit } from './../PageDescriptionEdit/PageDescriptionEdit.js';
import { PageKeyWordsEdit } from './../PageKeyWordsEdit/PageKeyWordsEdit.js';
import { PageTextEdit } from './../PageTextEdit/PageTextEdit.js';


// import { get_isOpen_for_page } from './../vendors/get_isOpen_for_page.js';

import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';


const LessonBlockForPageComponent = ( props ) => {

    let {
        currentPageDescription,
        currentPageKeyWords,
        currentPageText,
        currentPageTitle,


    } = props;

    let [ pageIsOpen, setPageIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );

    useEffect( () => {

        if( currentPageDescription !== '' && currentPageKeyWords !== '' && currentPageText !== '' && currentPageTitle !== '' ){
            setAttention( false );
        }else{
            setAttention( true );
        };

        

    }, [
        currentPageDescription,
        currentPageKeyWords,
        currentPageText,
        currentPageTitle,
    ] );




    return (

        <LessonBlockContainer
            isOpen =                { pageIsOpen }
            setIsOpen =             { setPageIsOpen }
            blockTitle =            'Страница'
            blockSecondTitle =      { currentPageTitle }
            openingContainerTitle = 'Данные страницы'
            attention = { attention }

        >
            <PageTitleEdit />
            <PageTextEdit />
            <PageDescriptionEdit />
            <PageKeyWordsEdit />
            

        </LessonBlockContainer>

    )

};


export function LessonBlockForPage( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockForPageComponent
            { ...props }
            currentPageTitle =          { lessons.currentPageTitle }
            currentPageDescription =    { lessons.currentPageDescription }
            currentPageKeyWords =       { lessons.currentPageKeyWords }
            currentPageText =           { lessons.currentPageText }


            

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
