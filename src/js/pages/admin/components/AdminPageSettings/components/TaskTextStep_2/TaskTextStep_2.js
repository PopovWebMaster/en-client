
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TaskTextStep_2.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setTaskForStep_2 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TaskTextStep_2Component = ( props ) => {

    let {
        taskForStep_2,
        setSettingsIsChanged,
        setTaskForStep_2,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( taskForStep_2 );
    }, [ taskForStep_2 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== taskForStep_2 ){
            setTaskForStep_2( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_TaskTextStep_2'>
            <OC_Input
                title =         'Шаг 2. Задание'
                value =         { value }
                setValue =      { setValue }
                max =           { 500 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TaskTextStep_2( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <TaskTextStep_2Component
            { ...props }
            taskForStep_2 =    { settings.taskForStep_2 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setTaskForStep_2 = { ( val ) => { dispatch( setTaskForStep_2( val ) ) } }



            // setWordListIsChanged

        />
    );


}
