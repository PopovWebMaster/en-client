
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TaskTextStep_3.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setTaskForStep_3 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TaskTextStep_3Component = ( props ) => {

    let {
        taskForStep_3,
        setSettingsIsChanged,
        setTaskForStep_3,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( taskForStep_3 );
    }, [ taskForStep_3 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== taskForStep_3 ){
            setTaskForStep_3( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_TaskTextStep_3'>
            <OC_Input
                title =         'Шаг 3. Задание'
                value =         { value }
                setValue =      { setValue }
                max =           { 500 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TaskTextStep_3( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <TaskTextStep_3Component
            { ...props }
            taskForStep_3 =    { settings.taskForStep_3 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setTaskForStep_3 = { ( val ) => { dispatch( setTaskForStep_3( val ) ) } }



            // setWordListIsChanged

        />
    );


}
