

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemOrder.scss';

import { selectorData as testsSlice, setTestsListIsChanged } from './../../../../../../../redux/admin/testsSlice.js';
import { move_lesson_item } from './vendors/move_lesson_item.js';

import { set_tests_list_to_store } from './../../../../../../../helpers/set_tests_list_to_store.js';




const ItemOrderComponent = ( props ) => {

    let {
        testId,
        value,
        testsList,

        setTestsListIsChanged,

    } = props;


    const clickUp = () => {

        move_lesson_item( value, 'up', () => {

            let passLessonId = null;
            for( let i = 0; i < testsList.length; i++ ){
                if( testsList[ i ].order === value - 1 ){
                    passLessonId = testsList[ i ].id;
                    break;
                };
            };

            let newTestList = [];

            for( let i = 0; i < testsList.length; i++ ){
                let item = structuredClone( testsList[ i ] );
                if( item.id === passLessonId ){
                    item.order = item.order + 1;
                };
                if( item.id === testId ){
                    item.order = item.order - 1;
                };

                newTestList.push( item );

            };


            set_tests_list_to_store( newTestList );
            setTestsListIsChanged( true );

        } );


    }

    const clickDown = () => {

        move_lesson_item( value, 'down', () => {

            let passLessonId = null;
            for( let i = 0; i < testsList.length; i++ ){
                if( testsList[ i ].order === value + 1 ){
                    passLessonId = testsList[ i ].id;
                    break;
                };
            };

            let newTestList = [];
            for( let i = 0; i < testsList.length; i++ ){
                let item = structuredClone( testsList[ i ] );
                if( item.id === passLessonId ){
                    item.order = item.order - 1;
                };
                if( item.id === testId ){
                    item.order = item.order + 1;
                };

                newTestList.push( item );

            };


            set_tests_list_to_store( newTestList );
            setTestsListIsChanged( true );

        } );
        
    }


    return (<>
        <div className = 'APL_ItemOrder' >
            <div className = 'APL_ItemOrder_BtnWrap'>
                <span
                    className = 'APL_ItemOrder_btn icon-up-dir'
                    onClick = { clickUp }
                ></span>
                <span
                    className = 'APL_ItemOrder_btn icon-down-dir'
                    onClick = { clickDown }
                ></span>
            </div>
        </div>
    </>)

};


export function ItemOrder( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <ItemOrderComponent
            { ...props }
            testsList = { tests.testsList }

            setTestsListIsChanged = { ( val ) => { dispatch( setTestsListIsChanged( val ) ) } }

        />
    );


}
