
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestsCount.scss';

import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';
import { selectorData as testsSlice } from './../../../../../../redux/admin/testsSlice.js';



const TestsCountComponent = ( props ) => {

    let {
        testsList,

    } = props;
    let [ isActiveCount, setIsActiveCount ] = useState( 0 );

    useEffect( () => {

        setIsActiveCount( getIsActiveCount( testsList ) );

    }, [ testsList ] );

    const getIsActiveCount = ( arr ) => {
        let result = 0;

        for( let i = 0; i < arr.length; i++ ){
            if( arr[ i ].isActive === true ){
                result++;
            };
        };

        return result;

    }


    return (
        <div className = 'APL_TestsCount'>
            <span className = 'APL_TC_title'>Всего тестов:</span>
            <span className = 'APL_TC_num APL_TC_num_bold'>{ isActiveCount }</span>
            <span className = 'APL_TC_slesh'>/</span>
            <span className = 'APL_TC_num'>{ testsList.length }</span>
        </div>

    )

};


export function TestsCount( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestsCountComponent
            { ...props }
            testsList = { tests.testsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
