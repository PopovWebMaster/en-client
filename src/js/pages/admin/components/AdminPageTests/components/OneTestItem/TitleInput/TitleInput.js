
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TitleInput.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

const TitleInputComponent = ( props ) => {

    let {
        testId,
        value,

    } = props;


    return (
        <div className = 'APT_TitleInput'>
            <span className = 'APT_TitleInput_span'>{ value }</span>
        </div>

    )

};


export function TitleInput( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <TitleInputComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
