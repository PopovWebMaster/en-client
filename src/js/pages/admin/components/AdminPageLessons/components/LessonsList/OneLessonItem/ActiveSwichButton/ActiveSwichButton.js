
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ActiveSwichButton.scss';

import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

import { ToggleSwitchButton } from './../../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';
import { set_lesson_list_value_into_store } from './../../../../../../../../helpers/set_lesson_list_value_into_store.js';


const ActiveSwichButtonComponent = ( props ) => {

    let {
        lessonId,
        isActiveValue,

    } = props;

    const change = () => {

        set_lesson_list_value_into_store( lessonId, { is_active: !isActiveValue } );

    };



    return (
        <div className = 'APL_ActiveSwichButton'>
            <ToggleSwitchButton
                value = { isActiveValue }
                changeHandler = { change }
            />
        </div>

    )

};


export function ActiveSwichButton( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <ActiveSwichButtonComponent
            { ...props }
            lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
