
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetOrderPosBtn.scss';

import { selectorData as lessonsSlice, setLessonListIsChanged } from './../../../../../../../../../redux/admin/lessonsSlice.js';
import { move_lesson_item } from './../vendors/move_lesson_item.js';

import { set_lesson_list_to_store } from './../../../../../../../../../helpers/set_lesson_list_to_store.js';

// import { set_lesson_list_to_store } from './set_lesson_list_to_store.js';
import { AlertWindowContainer } from './../../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText } from './../../../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd } from './../../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';



const SetOrderPosBtnComponent = ( props ) => {

    let {
        lessonId,
        value,
        setOrder,

        lessonList,

        setLessonListIsChanged,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ inpValue, setInpValue ] = useState( 1 );
    let [ maxValue, setMaxValue ] = useState( lessonList.length );
    let [ minValue, setMinValue ] = useState( 1 );




    const change = ( e ) => {
        let num = Number( e.target.value );
        if( typeof num === 'number' ){
            if( isNaN( num ) ){

            }else{
                setInpValue( num );
            };
        };
    }

    const addClick = ( ) => {
        
        let order = inpValue;
        if( inpValue === 0 ){
            order = 1
        }else if( inpValue > lessonList.length ){
            order = lessonList.length;
        };

        setOrder( order );
        setIsOpen( false );



    };

    const clickOpen = () => {
        setInpValue( value );
        setMaxValue( lessonList.length );
        setMinValue( 1 );
        setIsOpen( true );
    }

    const setCorrectVal = () => {
        if( inpValue === 0 ){
            setInpValue( 1 );
        }else if( inpValue > lessonList.length ){
            setInpValue( lessonList.length );
        };
    }

    return (

        <div className = 'APL_IO_SetOrderPosBtn' >

            <AlertWindowContainer
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen}
                title =     'Порядковый номер'
                width =     '25vw'
                height =    '20vh'
            >

                <AWInputText
                    title = 'Порядковый номер'
                    value = { inpValue }
                    onChange = { change }
                    max = { maxValue }
                    min = { minValue }
                    enterHandler = { setCorrectVal }
                />

                <AWButtonAdd
                    title = 'Изменить'
                    isReady = { true }
                    clickHandler = { addClick }
                />
                

            </AlertWindowContainer>
            <span
                className = 'APL_IO_SetOrderPosBtn_value'
                onClick = { clickOpen }
            >{ value }</span>
            
           
            
        </div>


    )

};


export function SetOrderPosBtn( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <SetOrderPosBtnComponent
            { ...props }
            lessonList = { lessons.lessonList }

            setLessonListIsChanged = { ( val ) => { dispatch( setLessonListIsChanged( val ) ) } }

        />
    );


}
