
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './WordsCount.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

const WordsCountComponent = ( props ) => {

    let {
        value,

    } = props;


    return (
        <div className = 'APT_WordsCount' >
            <span className = 'APT_WordsCount_value'>{ value }</span>
            <span className = 'APT_WordsCount_text'>сл.</span>
        </div>

    )

};


export function WordsCount( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsCountComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
