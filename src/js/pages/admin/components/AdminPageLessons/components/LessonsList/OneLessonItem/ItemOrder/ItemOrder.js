

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ItemOrder.scss';

import { selectorData as lessonsSlice, setLessonListIsChanged } from './../../../../../../../../redux/admin/lessonsSlice.js';
import { move_lesson_item } from './vendors/move_lesson_item.js';

import { set_lesson_list_to_store } from './../../../../../../../../helpers/set_lesson_list_to_store.js';

// import { set_lesson_list_to_store } from './set_lesson_list_to_store.js';


const ItemOrderComponent = ( props ) => {

    let {
        lessonId,
        value,
        lessonList,

        setLessonListIsChanged,

    } = props;


    const clickUp = () => {

        move_lesson_item( value, 'up', () => {

            let passLessonId = null;
            for( let i = 0; i < lessonList.length; i++ ){
                if( lessonList[ i ].order === value - 1 ){
                    passLessonId = lessonList[ i ].id;
                    break;
                };
            };

            let newLessonList = [];
            for( let i = 0; i < lessonList.length; i++ ){
                let item = structuredClone( lessonList[ i ] );
                if( item.id === passLessonId ){
                    item.order = item.order + 1;
                };
                if( item.id === lessonId ){
                    item.order = item.order - 1;
                };

                newLessonList.push( item );

            };


            set_lesson_list_to_store( newLessonList );
            setLessonListIsChanged( true );

        } );


    }

    const clickDown = () => {

        move_lesson_item( value, 'down', () => {

            let passLessonId = null;
            for( let i = 0; i < lessonList.length; i++ ){
                if( lessonList[ i ].order === value + 1 ){
                    passLessonId = lessonList[ i ].id;
                    break;
                };
            };

            let newLessonList = [];
            for( let i = 0; i < lessonList.length; i++ ){
                let item = structuredClone( lessonList[ i ] );
                if( item.id === passLessonId ){
                    item.order = item.order - 1;
                };
                if( item.id === lessonId ){
                    item.order = item.order + 1;
                };

                newLessonList.push( item );

            };


            set_lesson_list_to_store( newLessonList );
            setLessonListIsChanged( true );

        } );
        
    }


    return (<>

        
        <div className = 'APL_ItemOrder' >
            {/* <span className = 'APL_ItemOrder_value'>{ value }</span> */}
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
    </>


    )

};


export function ItemOrder( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <ItemOrderComponent
            { ...props }
            lessonList = { lessons.lessonList }

            setLessonListIsChanged = { ( val ) => { dispatch( setLessonListIsChanged( val ) ) } }

        />
    );


}
