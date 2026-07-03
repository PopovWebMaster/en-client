

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


const OneLessonEditorComponent = ( props ) => {

    let {
 

    } = props;

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


    return (
        <div className = 'APLE_OneLessonEditor'>
            <div className = 'OLE_blockWrap'>
                <h2 className = 'OLE_block_head'>Страница</h2>
                <PageTitleEdit />
                <PageDescriptionEdit />
                <PageKeyWordsEdit />
                <PageTextEdit />
            </div>
            <div className = 'OLE_blockWrap'>
                <h2 className = 'OLE_block_head'>Урок</h2>
                {/* <PageTitleEdit /> */}
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
