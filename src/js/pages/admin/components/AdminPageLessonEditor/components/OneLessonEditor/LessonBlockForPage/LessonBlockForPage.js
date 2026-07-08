
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonBlockForPage.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';

import { PageTitleEdit } from './../PageTitleEdit/PageTitleEdit.js';
import { PageDescriptionEdit } from './../PageDescriptionEdit/PageDescriptionEdit.js';
import { PageKeyWordsEdit } from './../PageKeyWordsEdit/PageKeyWordsEdit.js';
import { PageTextEdit } from './../PageTextEdit/PageTextEdit.js';


import { get_isOpen_for_page } from './../vendors/get_isOpen_for_page.js';

import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';


const LessonBlockForPageComponent = ( props ) => {

    let {
        currentPageTitle,

    } = props;

    let [ pageIsOpen, setPageIsOpen ] = useState( false );

    useEffect( () => {

        let timerId = setTimeout( () => {
            setPageIsOpen( get_isOpen_for_page() );
            clearTimeout( timerId );
        }, 300 );
        

    }, [] );




    return (

        <LessonBlockContainer
            isOpen =                { pageIsOpen }
            setIsOpen =             { setPageIsOpen }
            blockTitle =            'Страница'
            blockSecondTitle =      { currentPageTitle }
            openingContainerTitle = 'Данные страницы'
        >
            <PageTitleEdit />
            <PageDescriptionEdit />
            <PageKeyWordsEdit />
            <PageTextEdit />

        </LessonBlockContainer>

    )

};


export function LessonBlockForPage( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockForPageComponent
            { ...props }
            currentPageTitle = { lessons.currentPageTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
