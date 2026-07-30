
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LevelName.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';


const LevelNameComponent = ( props ) => {

    let {
        testId,
        value,

    } = props;

    return (
        <div className = 'APT_LevelName'>
            <span>{ value }</span>
        </div>
    )

};


export function LevelName( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LevelNameComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
