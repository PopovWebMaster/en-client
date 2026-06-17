
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewLessonButton.scss';

import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';

import { ButtonAdd } from './../../../../../../components/ButtonAdd/ButtonAdd.js';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { LESSON_LITLE } from './../../../../../../config/lessons.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_lesson_list_to_store } from './../../../../../../helpers/set_lesson_list_to_store.js';

const AddNewLessonButtonComponent = ( props ) => {

    let {
        lessonList,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ newTitle, setNewTitle ] = useState( '' );

    useEffect( () => {
        if( isOpen ){
            setNewTitle( `Урок ${lessonList.length + 1}` );
        }else{
            setNewTitle( '' );
        };

    }, [ isOpen ] );


    const click = () => {
        setIsOpen( true );

    }

    const send = () => {

        send_request_to_server({
            route: 'admin/add-new-lesson',
            data: {
                lessonTitle: newTitle,
            },
            addKeyName: true,
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );
                if( resp.ok ){
                    if( resp.lessonList ){
                        set_lesson_list_to_store( resp.lessonList );
                    };
                    setIsOpen( false );
                };


            },
        }, true);
        

    }
   

    return (
        <div className = 'ANL_AddNewLessonButton'>
            <AlertWindowContainer
                isOpen  = { isOpen }
                setIsOpen  = { setIsOpen }
                title = 'Добавить урок'
                width = '40vw'
                height = '40vh'
            >

                <AWInputText
                    title =     { 'Название урока' }
                    value =     { newTitle }
                    onChange =  { setNewTitle }
                    max =       { LESSON_LITLE.MAX }
                />

                <AWButtonAdd
                    title = 'Добавить'
                    isReady = { true }
                    clickHandler = { send }
                />


            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em',
                }}
                click = { click }
                title = 'Добавить урок'
            />
        </div>

    )

};


export function AddNewLessonButton( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <AddNewLessonButtonComponent
            { ...props }
            lessonList = { lessons.lessonList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
