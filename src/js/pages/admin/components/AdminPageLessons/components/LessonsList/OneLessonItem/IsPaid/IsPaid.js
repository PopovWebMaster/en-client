// IsPaid

// LevelName


import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './IsPaid.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

import { ToggleSwitchButton } from './../../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';
import { set_lesson_list_value_into_store } from './../../../../../../../../helpers/set_lesson_list_value_into_store.js';
import { LESSON_TITLE } from './../../../../../../../../config/lessons.js';


const IsPaidComponent = ( props ) => {

    let {
        lessonId,
        value,

    } = props;



    return (
        <div className = 'APL_IsPaid'>

            { value? (<span>{ 'Платный!' }</span>): '' }

            

           

        </div>

    )

};


export function IsPaid( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <IsPaidComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
