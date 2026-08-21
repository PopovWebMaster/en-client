
import React, { useRef }   from "react";

// import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonTask.scss';


const LessonTaskComponent = ( props ) => {

    let {
        // showStatus,
        // setShowStatus,
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

        let appLesson = document.querySelector( '.appLesson' );
        let appLesson_style = window.getComputedStyle( appLesson );
        let appLesson_width_px = parseFloat( appLesson_style.width );
        // let appLesson_font_size_px = parseFloat( appLesson_style.fontSize );

        task.style.top = absY + 'px';
        task.style.left = absX + 'px';
        task.style.margin = '0';
        task.style.width = `calc(${appLesson_width_px}px - 5.2em)`;

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
                    <span className = 'AL_lessonTask_title'>Задание!</span>
                    Вычитеть каждое слово вслух. Ваша цель - научиться без подсказок правильно произнести вслух каждое из слов урока. Оценивайте себя строго, тогда результат будет самым лучшим!!!</span>

                <div className = 'AL_lessonTask_btn'>
                    <span className = 'text'>Открыть</span>
                    <span className = 'icon icon-down-open-1'></span>
                </div>
            </div>
            
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
