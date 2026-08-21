
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TaskTextStep_1.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setTaskForStep_1 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TaskTextStep_1Component = ( props ) => {

    let {
        taskForStep_1,
        setSettingsIsChanged,
        setTaskForStep_1,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( taskForStep_1 );
    }, [ taskForStep_1 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== taskForStep_1 ){
            setTaskForStep_1( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_TaskTextStep_1'>
            <OC_Input
                title =         'Шаг 1. Задание'
                value =         { value }
                setValue =      { setValue }
                max =           { 500 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TaskTextStep_1( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <TaskTextStep_1Component
            { ...props }
            taskForStep_1 =    { settings.taskForStep_1 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setTaskForStep_1 = { ( val ) => { dispatch( setTaskForStep_1( val ) ) } }



            // setWordListIsChanged

        />
    );


}
