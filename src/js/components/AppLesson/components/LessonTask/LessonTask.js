
import React, { useRef }   from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonTask.scss';


const LessonTaskComponent = ( props ) => {

    let {
        // showStatus,
        // setShowStatus,
        currentStepTask,
    } = props;

    // let [ isOpen, setIsOpen ] = useState( false );

    let taskRef = useRef();

    const set_curtainTask_size_style = () => {

        let AL_lessonTask = document.getElementById( 'AL_lessonTask' );

        let task = AL_lessonTask.children[ 0 ];

        const rect = taskRef.current.getBoundingClientRect();
        const x = rect.x || rect.left;
        const y = rect.y || rect.top;
        const absX = x + window.scrollX;
        const absY = y + window.scrollY;

        // let AL_lessonTask_style = window.getComputedStyle( AL_lessonTask );


        // let lessonTask_style_width_px = parseFloat( AL_lessonTask_style.width );


        // let contentArea = document.getElementById( '.contentArea' );
        // let contentArea_style = window.getComputedStyle( contentArea );
        // let contentArea_width_px = parseFloat( contentArea_style.width );
        // let appLesson_font_size_px = parseFloat( appLesson_style.fontSize );

        // task.style.top = absY + 'px';
        task.style.top = `calc( ${absY}px - 1em )`;

        task.style.left = absX + 'px';
        task.style.margin = '0';
        // task.style.width = `calc(${appLesson_width_px}px - 5.2em)`;
        task.style.width = `calc( ${window.innerWidth - absX - absX}px - 3.4em )`;


    }

    const click = () => {
        
        let block = document.createElement( 'div' );
        block.id = 'AL_lessonTask';

        block.onclick = () => { 
            let block_2 = document.getElementById( 'AL_lessonTask' );
            block_2.remove();
            taskRef.current.style.opacity = '1';
            window.onresize = null;
        };

        window.onresize = set_curtainTask_size_style;

        let task = taskRef.current.cloneNode(true);

        task.classList.add( 'AL_lessonTask_isOpen' );
        task.children[ 1 ].children[ 0 ].innerText = 'Закрыть';
        task.children[ 1 ].children[ 1 ].classList.remove( 'icon-down-open-1' );
        task.children[ 1 ].children[ 1 ].classList.add( 'icon-up-open-1' );
        task.children[ 1 ].children[ 1 ].classList.add( 'icon' );

        block.append( task );

        let appDev = document.getElementById( 'appDev' );
        appDev.append( block );

        set_curtainTask_size_style();

        taskRef.current.style.opacity = '0';

    };

    return (

        <div className = 'AL_lessonTask_wrap' onClick = { click } >

            <div className = 'AL_lessonTask' ref = { taskRef } >
                
                <span className = 'AL_lessonTask_text'>
                    <span className = 'AL_lessonTask_title'>Задание!</span>{currentStepTask}</span>

                <div className = 'AL_lessonTask_btn'>
                    <span className = 'text'>Открыть</span>
                    <span className = 'icon icon-down-open-1'></span>
                </div>
            </div>
            
        </div>

        



    )

};


export function LessonTask( props ){

    const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <LessonTaskComponent
            { ...props }
            currentStepTask = { appData.currentStepTask }
            // setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
