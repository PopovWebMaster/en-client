
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonsCount.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

const LessonsCountComponent = ( props ) => {

    let {
        value,

    } = props;


    return (
        <div className = 'APT_LessonsCount' >
            <span className = 'APT_LessonsCount_value'>{ value }</span>
            <span className = 'APT_LessonsCount_text'>уроков</span>
            
        </div>

    )

};


export function LessonsCount( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonsCountComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
