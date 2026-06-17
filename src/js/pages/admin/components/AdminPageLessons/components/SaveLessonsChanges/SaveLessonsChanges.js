// SaveLessonsChanges


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveLessonsChanges.scss';
import { selectorData as lessonsSlice, setLessonListIsChanged } from './../../../../../../redux/admin/lessonsSlice.js';
import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_lesson_list_changes_on_server } from './../../../../../../helpers/save_lesson_list_changes_on_server.js';
import { set_lesson_list_to_store } from './../../../../../../helpers/set_lesson_list_to_store.js';




const SaveLessonsChangesComponent = ( props ) => {

    let {
        wordListIsChanged,
        lessonListIsChanged,
        setLessonListIsChanged,

    } = props;
    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( lessonListIsChanged ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                    // return 
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            if( lessonListIsChanged ){
                save_lesson_list_changes_on_server();
            };

        }
    }, [ lessonListIsChanged ]);
  
    const click = () => {
        if( lessonListIsChanged ){
            setIsWaiting( true );

            save_lesson_list_changes_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.lessonList ){
                        set_lesson_list_to_store( resp.lessonList );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { lessonListIsChanged }
            setIsChanges =  { setLessonListIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveLessonsChanges( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <SaveLessonsChangesComponent
            { ...props }
            lessonListIsChanged = { lessons.lessonListIsChanged }
            setLessonListIsChanged = { ( val ) => { dispatch( setLessonListIsChanged( val ) ) } }

        />
    );


}
