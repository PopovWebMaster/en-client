
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './OneTestEditor.scss';
import { selectorData as testsSlice } from './../../../../../../redux/admin/testsSlice.js';
import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';

import { TestOrderEdit } from './TestOrderEdit/TestOrderEdit.js';
import { IsActiveStatusEdit } from './IsActiveStatusEdit/IsActiveStatusEdit.js';

import { RemoveTestButton } from './RemoveTestButton/RemoveTestButton.js';

import { TestBlockForPage } from './TestBlockForPage/TestBlockForPage.js';
import { TestBlockForTest } from './TestBlockForTest/TestBlockForTest.js';
import { TestBlockForLessons } from './TestBlockForLessons/TestBlockForLessons.js';


const OneTestEditorComponent = ( props ) => {

    let {
        languageAlias,
        currentTestId,
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
        <div className = 'APTE_OneTestEditor'>

            <div className = 'OTE_blockWrap'>
                <div className = 'OTE_topBlockWrap'>
                    <div className = 'OTE_topTestPuth'>
                        <span>{ `${HOST_TO_API_SERVER}/tests/${languageAlias}/${currentTestId}` }</span>
                    </div>
                    <TestOrderEdit />
                    <IsActiveStatusEdit />

                </div>
            </div>

            <TestBlockForPage />
            <TestBlockForTest />
            <TestBlockForLessons />

            <div className = 'OTE_blockWrap'>
                <div className = 'OTE_topBlockWrap'>
                    <RemoveTestButton />
                </div>
            </div>
            

            

        </div>
    )

};


export function OneTestEditor( props ){

    const tests = useSelector( testsSlice );
    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <OneTestEditorComponent
            { ...props }
            languageAlias =          { language.languageAlias }
            currentTestId = { tests.currentTestId }

            languageKeyName = { language.languageKeyName }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
