
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
        wordsCount,
        isChecked,

    } = props;


    return (
        <div className = 'LLS_OneLessonItem'>
{ title }
           
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
