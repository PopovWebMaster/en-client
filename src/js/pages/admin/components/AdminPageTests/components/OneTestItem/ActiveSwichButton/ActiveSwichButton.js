
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ActiveSwichButton.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';

import { ToggleSwitchButton } from './../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';
import { set_test_list_value_into_store } from './../../../../../../../helpers/set_test_list_value_into_store.js';

const ActiveSwichButtonComponent = ( props ) => {

    let {
        testId,
        isActiveValue,

    } = props;

    const change = () => {
        set_test_list_value_into_store( testId, { isActive: !isActiveValue } );
    };

    return (
        <div className = 'APT_ActiveSwichButton'>
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
