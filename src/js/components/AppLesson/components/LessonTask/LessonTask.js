
import React, { useEffect, useState }   from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonTask.scss';


const LessonTaskComponent = ( props ) => {

    let {
        currentStepTask,
    } = props;
    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        setIsOpen( false );
    }, [] );

    const click = () => {

        setIsOpen( !isOpen );
        
    };

    return (

        <div className = 'AL_lessonTask_wrap' onClick = { click } >

            <div className = { `AL_lessonTask ${isOpen? 'AL_lessonTask_show': '' }` }>
                <div className = { `AL_LT_btn ${isOpen? 'AL_LT_btn_show': '' }` }>
                    <span className = { `AL_LT_btn_text ${isOpen? 'AL_LT_btn_text_show': '' }` }>Задание!</span>

                    <span className = 'AL_LT_btn_icon'>
                        <span className = { `AL_LT_btn_icon_arr ${isOpen? 'AL_LT_btn_icon_arr_show': '' } icon-down-open-1` }></span>
                        <span className = { `AL_LT_btn_icon_cross ${isOpen? 'AL_LT_btn_icon_cross_show': '' } icon-cancel-3` }></span>
                    </span>
                    
                </div>

                <div className = { `AL_LT_text ${isOpen? 'AL_LT_text_show': '' }` }>
                    {currentStepTask}
                </div>


            </div>


            <div className = { `AL_lessonTask_curtain ${isOpen? 'AL_lessonTask_curtain_show': '' }` }>

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
