
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './RemoveLessonButton.scss';
import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';
import { send_request_to_server } from './../../../../../../../helpers/send_request_to_server.js';

const RemoveLessonButtonComponent = ( props ) => {

    let {


    } = props;

    let navigate = useNavigate();

    const click = () => {
        let isRemove = confirm( 'Вы действительно хотите удалить урок?' );
        if( isRemove ){

           send_request_to_server( {
                route: 'admin/remove-lesson',
                data: {},
                addKeyName: true,
                addLessonId: true,

                successCallback: ( resp ) => {

                    console.dir( 'resp' );
                    console.dir( resp );

                    if( resp.ok ){
                        navigate( -1 );
                    };

                },
           }, true );
            



        };
    }


    return (
        <div className = 'APLE_RemoveLessonButton'>
            <span
                onClick = { click }
            >Удалить урок</span>

        </div>
    )

};


export function RemoveLessonButton( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <RemoveLessonButtonComponent
            { ...props }
            // currentLessonIsPaid = { lessons.currentLessonIsPaid }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            // setCurrentLessonIsPaid = { ( val ) => { dispatch( setCurrentLessonIsPaid( val ) ) } }


            

        />
    );


}
