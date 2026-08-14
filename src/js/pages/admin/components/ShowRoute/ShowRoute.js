
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as lessonsSlice } from './../../../../redux/admin/lessonsSlice.js';
import { selectorData as testsSlice } from './../../../../redux/admin/testsSlice.js';
import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';



import './ShowRoute.scss';

// import { ADMIN_ROUTES } from './../../config/routes.js';
import { ADMIN_ROUTES } from './../../config/routes.js';



const ShowRouteComponent = ( props ) => {

    let {
        fontSize = '1em',
        margin = '0',
        routeName = 'home',
        /*
            'home'

            'lessons',
            'langLessons',
            'oneLesson',

            'tests',
            'langTests',
            'oneTest',



        */

        currentLessonId,
        currentTestId,
        languageAlias,

    } = props;

    const getHref = ( route_name ) => {
        let result = '#';

        switch( route_name ){
            case 'home':
                result = `${HOST_TO_API_SERVER}/`;
                break;

            case 'lessons':
                result = `${HOST_TO_API_SERVER}/lessons`;
                break;

            case 'langLessons':
                result = `${HOST_TO_API_SERVER}/lessons/${languageAlias}`;
                break;

            case 'oneLesson':
                result = `${HOST_TO_API_SERVER}/lessons/${languageAlias}/${currentLessonId}`;
                break;

            case 'tests':
                result = `${HOST_TO_API_SERVER}/test`;
                break;

            case 'langTests':
                result = `${HOST_TO_API_SERVER}/test/${languageAlias}`;
                break;

            case 'oneTest':
                result = `${HOST_TO_API_SERVER}/test/${languageAlias}/${currentTestId}`;
                break;

        };

        return result

    };

    return (
        <div className = 'A_ShowRoute' style = {{ fontSize, margin }}>
            <a href = { getHref( routeName ) } target = '_blank'>{ getHref( routeName ) }</a>
           
        </div>
        
    )

};


export function ShowRoute( props ){

    const lessons = useSelector( lessonsSlice );
    const tests = useSelector( testsSlice );
    const language = useSelector( languageSlice );


    


    
    // const dispatch = useDispatch();

    return (
        <ShowRouteComponent
            { ...props }
            currentLessonId = { lessons.currentLessonId }
            currentTestId = { tests.currentTestId }
            languageAlias = { language.languageAlias }


            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
