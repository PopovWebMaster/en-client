// LessonIdValue


import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonIdValue.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

const LessonIdValueComponent = ( props ) => {

    let {
        lessonId,

    } = props;

    let [ value, setValue ] = useState( lessonId );

    // let inpRef = useRef();

    useEffect( () => {

        setValue( lessonId );

    }, [ lessonId ] );



    return (
        <div className = 'APL_LessonIdValue'>

            <span className = 'APL_LId_title'>id:</span>
            <span className = 'APL_LId_val'>{ value }</span>



        </div>

    )

};


export function LessonIdValue( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonIdValueComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
