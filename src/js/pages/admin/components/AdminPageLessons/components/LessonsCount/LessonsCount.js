

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsCount.scss';

import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';


const LessonsCountComponent = ( props ) => {

    let {
        lessonList,

    } = props;
    let [ isActiveCount, setIsActiveCount ] = useState( 0 );

    useEffect( () => {

        setIsActiveCount( getIsActiveCount( lessonList ) );

    }, [ lessonList ] );

    const getIsActiveCount = ( arr ) => {
        let result = 0;

        for( let i = 0; i < arr.length; i++ ){
            if( arr[ i ].is_active === true ){
                result++;
            };
        };

        return result;

    }


    return (
        <div className = 'APL_LessonsCount'>
            <span className = 'APL_LC_title'>Всего уроков:</span>
            <span className = 'APL_LC_num APL_LC_num_bold'>{ isActiveCount }</span>
            <span className = 'APL_LC_slesh'>/</span>
            <span className = 'APL_LC_num'>{ lessonList.length }</span>
        </div>

    )

};


export function LessonsCount( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonsCountComponent
            { ...props }
            lessonList = { lessons.lessonList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
