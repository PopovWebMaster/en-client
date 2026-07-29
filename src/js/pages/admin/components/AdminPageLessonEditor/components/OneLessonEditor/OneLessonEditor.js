

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './OneLessonEditor.scss';
import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';

import { IsActiveStatusEdit } from './IsActiveStatusEdit/IsActiveStatusEdit.js';
import { IsPaidStatus } from './IsPaidStatus/IsPaidStatus.js';
import { LessonOrderEdit } from './LessonOrderEdit/LessonOrderEdit.js';

import { LessonBlockForPage } from './LessonBlockForPage/LessonBlockForPage.js';
import { LessonBlockForLesson } from './LessonBlockForLesson/LessonBlockForLesson.js';
import { LessonBlockForPhrases } from './LessonBlockForPhrases/LessonBlockForPhrases.js';
import { LessonBlockForWords } from './LessonBlockForWords/LessonBlockForWords.js';
import { RemoveLessonButton } from './RemoveLessonButton/RemoveLessonButton.js';


const OneLessonEditorComponent = ( props ) => {

    let {
        languageAlias,
        currentLessonId,
        languageKeyName,
 

    } = props;

    let [ lastKeyName, setLastKeyName ] = useState( languageKeyName );

    let navigate = useNavigate();

    useEffect( () => {
        if( lastKeyName !== languageKeyName ){
            navigate( -1 );
        };
    }, [ languageKeyName ] );



    return (
        <div className = 'APLE_OneLessonEditor'>

            <div className = 'OLE_blockWrap'>
                <div className = 'OLE_topBlockWrap'>
                    <div className = 'OLE_topLessonPuth'>
                        <span>{ `${HOST_TO_API_SERVER}/lessons/${languageAlias}/${currentLessonId}` }</span>
                    </div>
                    <IsPaidStatus />
                    <LessonOrderEdit />
                    <IsActiveStatusEdit />
                </div>
            </div>

            <LessonBlockForPage />
            <LessonBlockForLesson />
            <LessonBlockForWords />
            <LessonBlockForPhrases />

            <div className = 'OLE_blockWrap'>
                <div className = 'OLE_topBlockWrap'>
                    <RemoveLessonButton />
                </div>
            </div>
            

            

        </div>
    )

};


export function OneLessonEditor( props ){

    const lessons = useSelector( lessonsSlice );
    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <OneLessonEditorComponent
            { ...props }
            languageAlias =          { language.languageAlias }
            currentLessonId = { lessons.currentLessonId }

            languageKeyName = { language.languageKeyName }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
