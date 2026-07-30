
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestsList.scss';

import { selectorData as testsSlice } from './../../../../../../redux/admin/testsSlice.js';

import { OneTestItem } from './../OneTestItem/OneTestItem.js';


const TestsListComponent = ( props ) => {

    let {
        testsList,

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let { id } = item;

            return (
                <OneTestItem 
                    key = { index }
                    testId = { id }
                />
            );
        } );

        return div

    };

    return (
        <div className = 'APT_TestsList'>
            { create( testsList ) }
        </div>

    )

};


export function TestsList( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestsListComponent
            { ...props }
            testsList = { tests.testsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
