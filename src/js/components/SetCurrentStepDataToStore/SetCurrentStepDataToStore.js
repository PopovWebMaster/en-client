
import React, { useState, useEffect }   from "react";

import { selectorData as appDataSlice, setCurrentStepTask, setCurrentProgress, setAppMessage } from './../../redux/appDataSlice.js';
import { selectorData as settingsSlice } from './../../redux/settingsSlice.js';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetCurrentStepDataToStore.scss';


const SetCurrentStepDataToStoreComponent = ( props ) => {

    let {
        currentStepNomber,
        setCurrentStepTask,
        setCurrentProgress,
        setAppMessage,

        taskForStep_1,
        taskForStep_2,
        taskForStep_3,
        children,
    } = props;

    useEffect( () => {

        let currentTask = '';

        if( currentStepNomber === 1 ){
            currentTask = taskForStep_1;
        }else if( currentStepNomber === 2 ){
            currentTask = taskForStep_2;
        }else if( currentStepNomber === 3 ){
            currentTask = taskForStep_3;
        };

        setCurrentStepTask( currentTask );
        setCurrentProgress( 0 );
        setAppMessage( '' );

    }, [ currentStepNomber ] );

    
    return (
       <>{ children }</>
    )

};



export function SetCurrentStepDataToStore( props ){

    const appData = useSelector( appDataSlice );
    const settings = useSelector( settingsSlice );

    
    const dispatch = useDispatch();

    return (
        <SetCurrentStepDataToStoreComponent
            { ...props }
            currentStepNomber = { appData.currentStepNomber }
            taskForStep_1 = { settings.taskForStep_1 }
            taskForStep_2 = { settings.taskForStep_2 }
            taskForStep_3 = { settings.taskForStep_3 }

            setCurrentStepTask = { ( val ) => { dispatch( setCurrentStepTask( val ) ) } }
            setCurrentProgress = { ( val ) => { dispatch( setCurrentProgress( val ) ) } }
            setAppMessage = { ( val ) => { dispatch( setAppMessage( val ) ) } }




            

        />
    );


}
