
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OneLessonItem.scss';
// import { selectorData as wordEditSlice, setNewWordContainerIsOpen } from './../../../../../../redux/admin/wordEditSlice.js';

const OneLessonItemComponent = ( props ) => {

    let {
        lessonId,
        is_active,
        level_name,
        testId,
        title,
        description,
        wordsCount,
        isChecked,
        lessonChackToggle,

    } = props;

    const click = () => {
        lessonChackToggle( lessonId );
    };


    return (
        <div
            className = { `LLS_OneLessonItem ${ isChecked? 'isChecked': ''}` }
            onClick = { click }
        >
            <div className = 'LLS_OLI_check'>

                <div className = 'LLS_OLI_check_box'>
                    <span className = { isChecked? `icon-ok`: '' }></span>
                </div>

            </div>

            <div className = 'LLS_OLI_words'>
                <div className = 'LLS_OLI_words_wrap'>
                    <span className = 'LLS_OLI_words_val'>{ wordsCount }</span>
                    <span className = 'LLS_OLI_words_title'>сл.</span>
                </div>
            </div>

            <div className = 'LLS_OLI_name_descr'>
                <h3>{ title }</h3>
                <h4>{ description }</h4>
            </div>

            <div className = 'LLS_OLI_levelName'>
                <span>{ level_name }</span>
            </div>

            <div className = 'LLS_OLI_active'>
                { is_active? (<span>Включен</span>): '' }
                
            </div>


           
        </div>
    )

};


export function OneLessonItem( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <OneLessonItemComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
