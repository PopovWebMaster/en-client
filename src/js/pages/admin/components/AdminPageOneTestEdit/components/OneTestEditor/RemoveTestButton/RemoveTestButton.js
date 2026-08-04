
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import './RemoveTestButton.scss';
// import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';
import { send_request_to_server } from './../../../../../../../helpers/send_request_to_server.js';
import { set_tests_list_to_store } from './../../../../../../../helpers/set_tests_list_to_store.js';

const RemoveTestButtonComponent = ( props ) => {

    let {


    } = props;

    let navigate = useNavigate();

    const click = () => {
        let isRemove = confirm( 'Вы действительно хотите удалить урок?' );
        if( isRemove ){

           send_request_to_server( {
                route: 'admin/remove-one-test',
                data: {},
                addKeyName: true,
                addTestId: true,

                successCallback: ( resp ) => {

                    console.dir( 'resp' );
                    console.dir( resp );

                    if( resp.ok ){
                        if( resp.testsList ){
                            set_tests_list_to_store( resp.testsList );
                            navigate( -1 );
                        };

                    };

                },
           }, true );
            



        };
    }


    return (
        <div className = 'APTE_RemoveTestButton'>
            <span
                onClick = { click }
            >Удалить тест</span>

        </div>
    )

};


export function RemoveTestButton( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <RemoveTestButtonComponent
            { ...props }
            // currentLessonIsPaid = { lessons.currentLessonIsPaid }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            // setCurrentLessonIsPaid = { ( val ) => { dispatch( setCurrentLessonIsPaid( val ) ) } }


            

        />
    );


}
