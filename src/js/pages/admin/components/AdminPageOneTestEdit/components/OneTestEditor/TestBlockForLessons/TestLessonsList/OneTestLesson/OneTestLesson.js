
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OneTestLesson.scss';
// import { selectorData as wordEditSlice, setNewWordContainerIsOpen } from './../../../../../../redux/admin/wordEditSlice.js';
import { send_request_to_server } from './../../../../../../../../../helpers/send_request_to_server.js';
import { set_one_test_data_to_store } from './../../../../../../../../../helpers/set_one_test_data_to_store.js';

const OneTestLessonComponent = ( props ) => {

    let {

        lessonId,
        description,
        isActive,
        levelName,
        order,
        title,
        wordsCount,

    } = props;

    const remove = () => {
        let isConfirm = confirm( `Прибить урок "${title}", да?` );
        if( isConfirm ){
            send_request_to_server( {
                route: 'admin/remove-lesson-from-test',
                data: {
                    lessonsIdList: [ lessonId ],
                },
                addKeyName: true,
                addTestId: true,

                successCallback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );
                    if( resp.ok ){
                        if( resp.oneTestData ){
                            set_one_test_data_to_store( resp.oneTestData );
                        };
                    };


                },
            }, true );

        };

    }




    return (
        <div className = 'LLS_OneTestLesson'
        >

            <div className = 'LLS_OTL_words'>
                <div className = 'LLS_OTL_words_wrap'>
                    <span className = 'LLS_OTL_words_val'>{ wordsCount }</span>
                    <span className = 'LLS_OTL_words_title'>сл.</span>
                </div>
            </div>

            <div className = 'LLS_OTL_name_descr'>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </div>

            <div className = 'LLS_OTL_levelName'>
                <span>{ levelName }</span>
            </div>

            <div className = 'LLS_OTL_active'>
                { isActive? (<span>Включен</span>): '' }
            </div>

            <div className = 'LLS_OTL_remove'>
                <span
                    onClick = { remove }
                >Удалиь</span>
            </div>


           
        </div>
    )

};


export function OneTestLesson( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <OneTestLessonComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
