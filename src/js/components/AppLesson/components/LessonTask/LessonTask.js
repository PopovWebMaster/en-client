// LessonTask


import React, { useState, useEffect }   from "react";

// import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonTask.scss';


const LessonTaskComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
    } = props;





    return (

        <div className = 'AL_lessonTask'>
            <span className = 'AL_lessonTask_title'>Задание!</span>
            <span className = 'AL_lessonTask_text'>Вычитеть каждое слово вслух. Ваша цель - научиться без подсказок правильно произнести вслух каждое из слов урока</span>   
        </div>



    )

};


export function LessonTask( props ){

    // const appControl = useSelector( appControlSlise );
    // const dispatch = useDispatch();

    return (
        <LessonTaskComponent
            { ...props }
            // showStatus = { appControl.showStatus }
            // setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
