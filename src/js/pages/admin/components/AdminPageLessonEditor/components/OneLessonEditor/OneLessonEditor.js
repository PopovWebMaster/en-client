

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneLessonEditor.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../redux/admin/lessonsSlice.js';
import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { PageTitleEdit } from './PageTitleEdit/PageTitleEdit.js';
import { PageDescriptionEdit } from './PageDescriptionEdit/PageDescriptionEdit.js';
import { PageKeyWordsEdit } from './PageKeyWordsEdit/PageKeyWordsEdit.js';
import { PageTextEdit } from './PageTextEdit/PageTextEdit.js';
import { OpeningContainer } from './../../../../../../components/OpeningContainer/OpeningContainer.js';
import { LessonTitleEdit } from './LessonTitleEdit/LessonTitleEdit.js';
import { LessonDescription } from './LessonDescription/LessonDescription.js';
import { LessonLevelNameEdit } from './LessonLevelNameEdit/LessonLevelNameEdit.js';
import { LessonPhrasesListEdit } from './LessonPhrasesListEdit/LessonPhrasesListEdit.js';
import { IsActiveStatusEdit } from './IsActiveStatusEdit/IsActiveStatusEdit.js';
import { LessonOrderEdit } from './LessonOrderEdit/LessonOrderEdit.js';


const OneLessonEditorComponent = ( props ) => {

    let {
 

    } = props;

    let [ pageIsOpen, setPageIsOpen ] = useState( false );
    let [ lessonIsOpen, setLessonIsOpen ] = useState( false );


// lessonDescription,
// lessonIsActive,
// lessonLevelName,
// lessonOrder,
// lessonPhrasesList,
// lessonTitle,
// pageDescription,
// pageKeyWords,
// pageText,
// pageTitle,
// wordList,,

    const clickPageHeader = () => {
        setPageIsOpen( !pageIsOpen );

    };

    const clickLessonHeader = () => {
        setLessonIsOpen( !lessonIsOpen );

    };


    return (
        <div className = 'APLE_OneLessonEditor'>

            <div className = 'OLE_blockWrap'>
                <div className = 'OLE_topBlockWrap'>
                    <LessonOrderEdit />
                    <IsActiveStatusEdit />
                </div>
            </div>


            <div className = 'OLE_blockWrap'>
                <h2
                    className = 'OLE_block_head'
                    onClick = { clickPageHeader }
                >
                    <span className = 'OLE_block_head_text'>Страница</span>
                    <span className = { `OLE_block_head_icon ${ pageIsOpen? 'icon-up-open': 'icon-down-open'}` }></span>
                </h2>

                <OpeningContainer
                    title = { 'Данные страницы' }
                    isOpen =    { pageIsOpen }
                    setIsOpen = { setPageIsOpen }
                >
                    <PageTitleEdit />
                    <PageDescriptionEdit />
                    <PageKeyWordsEdit />
                    <PageTextEdit />

                </OpeningContainer>
                
            </div>
            <div className = 'OLE_blockWrap'>
                <h2
                    className = 'OLE_block_head'
                    onClick = { clickLessonHeader }
                >
                    <span className = 'OLE_block_head_text'>Урок</span>
                    <span className = { `OLE_block_head_icon ${ lessonIsOpen? 'icon-up-open': 'icon-down-open'}` }></span>
                </h2>

                 <OpeningContainer
                    title = { 'Данные урока' }
                    isOpen =    { lessonIsOpen }
                    setIsOpen = { setLessonIsOpen }
                >
                    <LessonTitleEdit />
                    <LessonDescription />
                    <LessonLevelNameEdit />
                    <LessonPhrasesListEdit />

                </OpeningContainer>
            </div>
            

        </div>
    )

};


export function OneLessonEditor( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <OneLessonEditorComponent
            { ...props }
            currentLessonIsChanged = { lessons.currentLessonIsChanged }
            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
