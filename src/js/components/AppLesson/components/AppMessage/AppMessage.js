
import React from "react";

import { selectorData as appDataSlice, setCurrentStepNomber } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppMessage.scss';


const AppMessageComponent = ( props ) => {

    let {
        appMessage,
        currentStepNomber,
        setCurrentStepNomber,

    } = props;

    const click = () => {
        if( currentStepNomber < 3 ){
            setCurrentStepNomber( currentStepNomber+1 );
        }else{
            setCurrentStepNomber( 1 );
        }

    };



    return (

        <div className = 'AL_AppMessage' >
           
           <div className = 'AL_AppMessage_text'>{ appMessage }</div>

           <div
                className = 'AL_AppMessage_btn'
            >
                <span
                    onClick = { click }
                >{ currentStepNomber < 3? 'Продолжить': 'Начать сначала' }</span>
           </div>

        </div>

    )

};


export function AppMessage( props ){

    const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    const dispatch = useDispatch();

    return (
        <AppMessageComponent
            { ...props }
            appMessage = { appData.appMessage }
            currentStepNomber = { appData.currentStepNomber }

            setCurrentStepNomber = { ( val ) => { dispatch( setCurrentStepNomber( val ) ) } }


        />
    );


}
