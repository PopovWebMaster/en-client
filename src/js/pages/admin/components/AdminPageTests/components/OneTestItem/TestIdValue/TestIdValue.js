
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TestIdValue.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

const TestIdValueComponent = ( props ) => {

    let {
        testId,

    } = props;

    let [ value, setValue ] = useState( testId );

    // let inpRef = useRef();

    useEffect( () => {

        setValue( testId );

    }, [ testId ] );



    return (
        <div className = 'APL_TestIdValue'>

            <span className = 'APL_TId_title'>id:</span>
            <span className = 'APL_TId_val'>{ testId }</span>



        </div>

    )

};


export function TestIdValue( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <TestIdValueComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
