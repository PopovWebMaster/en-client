
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestLessonsList.scss';
import { selectorData as testsSlice } from './../../../../../../../../redux/admin/testsSlice.js';

// import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';


// // import { set_one_test_data_to_store } from './../../../../../../../../helpers/set_one_test_data_to_store.js';
import { OneTestLesson } from './OneTestLesson/OneTestLesson.js';

const TestLessonsListComponent = ( props ) => {

    let {
        currentTestLessons,
        

    } = props;




  


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                id,
                description,
                isActive,
                // isPaid,
                levelName,
                // order,
                title,
                wordsCount,
            } = item;

            return (
                <OneTestLesson
                    key =           { index }
                    lessonId =      { id }
                    description =   { description }
                    isActive =      { isActive }
                    levelName =     { levelName }
                    title =         { title }
                    wordsCount =    { wordsCount }

                />
            );

        } );

        return div;

    }


    return (
        <div className = 'OTE_TestLessonsList'>

            { create( currentTestLessons ) }

            
            
        </div>
    )

};


export function TestLessonsList( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <TestLessonsListComponent
            { ...props }
            currentTestLessons = { tests.currentTestLessons }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
