
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonsCount.scss';

import { selectorData as testsSlice } from './../../../../../../../redux/admin/testsSlice.js';

const LessonsCountComponent = ( props ) => {

    let {
        // value,
        testId,

        testsListById,

    } = props;

    let [ isActiveValue, setIsActiveValue ] = useState( 0 );
    let [ isAllValue, setIsAllValue ] = useState( 0 );

    useEffect( () => {
        if( testsListById[ testId ] ){
            // console.dir( testsListById[ testId ] );
            let { lessons } = testsListById[ testId ];
            let all = 0;
            for( let i = 0; i < lessons.length; i++ ){
                let { isActive } = lessons[ i ];
                if( isActive === true ){
                    all++;
                };
            };

            setIsActiveValue( all );
            setIsAllValue( lessons.length );

        }

    }, [ testsListById, testId ] );



    return (
        <div className = 'APT_LessonsCount' >
            <span className = 'APT_LC_title'>Уроков:</span>
            <span className = 'APT_LC_num APT_LC_num_bold'>{ isActiveValue }</span>
            <span className = 'APT_LC_slesh'>/</span>
            <span className = 'APT_LC_num'>{ isAllValue }</span>


            
            
        </div>

    )

};


export function LessonsCount( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonsCountComponent
            { ...props }
            testsListById = { tests.testsListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
