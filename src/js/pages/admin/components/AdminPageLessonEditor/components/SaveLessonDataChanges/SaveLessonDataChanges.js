

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveLessonDataChanges.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../redux/admin/lessonsSlice.js';
import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

// import { save_lesson_list_changes_on_server } from './../../../../../../helpers/save_lesson_list_changes_on_server.js';
// import { set_lesson_list_to_store } from './../../../../../../helpers/set_lesson_list_to_store.js';

import { set_one_lesson_changes_on_server } from './../../../../../../helpers/set_one_lesson_changes_on_server.js';
import { set_one_lesson_data_to_store } from './../../../../../../helpers/set_one_lesson_data_to_store.js';



const SaveLessonDataChangesComponent = ( props ) => {

    let {
        wordListIsChanged,
        lessonListIsChanged,
        currentLessonIsChanged,
        setCurrentLessonIsChanged,

    } = props;
    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( currentLessonIsChanged ){
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
            if( currentLessonIsChanged ){
                set_one_lesson_changes_on_server();
            };

        }
    }, [ currentLessonIsChanged ]);
  
    const click = () => {
        if( currentLessonIsChanged ){

            setIsWaiting( true );

            set_one_lesson_changes_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.oneLessonData ){
                        set_one_lesson_data_to_store( resp.oneLessonData );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { currentLessonIsChanged }
            setIsChanges =  { setCurrentLessonIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveLessonDataChanges( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <SaveLessonDataChangesComponent
            { ...props }
            currentLessonIsChanged = { lessons.currentLessonIsChanged }
            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
