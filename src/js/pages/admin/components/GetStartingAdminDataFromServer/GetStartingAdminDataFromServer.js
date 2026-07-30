
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './GetStartingAdminDataFromServer.scss';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';
import { set_word_list_to_store } from './../../../../helpers/set_word_list_to_store.js';
import { set_lesson_id_to_store } from './../../../../helpers/set_lesson_id_to_store.js';
import { set_lesson_list_to_store } from './../../../../helpers/set_lesson_list_to_store.js';
import { set_one_lesson_data_to_store } from './../../../../helpers/set_one_lesson_data_to_store.js';
import { set_main_page_data_to_store } from './../../../../helpers/set_main_page_data_to_store.js';
import { set_tests_list_to_store } from './../../../../helpers/set_tests_list_to_store.js'


const GetStartingAdminDataFromServerComponent = ( props ) => {

    let {
        what_to_take = [],
        children,
        languageKeyName,
        currentLessonId = null,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        send_request_to_server({
            route: 'admin/get-starting-data',
            data: {
                what_to_take,
                keyName: languageKeyName,
                lessonId: currentLessonId,
            },
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                set_lesson_id_to_store( currentLessonId );

                if( resp.wordList ){ set_word_list_to_store( resp.wordList ); }
                if( resp.lessonList ){ set_lesson_list_to_store( resp.lessonList ); }
                if( resp.oneLessonData ){ set_one_lesson_data_to_store( resp.oneLessonData ); }
                if( resp.mainPage ){ set_main_page_data_to_store( resp.mainPage ) };
                if( resp.testsList ){ set_tests_list_to_store( resp.testsList ) };



                setIsReady( true );


            },
        });

    }, [ languageKeyName ] );





    return (
        <>{ isReady? children: (<div className = 'SDWaiting'><span>Ждёмс..</span></div>) }</>
    )

};


export function GetStartingAdminDataFromServer( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <GetStartingAdminDataFromServerComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
