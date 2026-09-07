
import React from "react";

import { selectorData as appDataSlice, setCurrentStepNomber, setAppMessage } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppMessage.scss';


const AppMessageComponent = ( props ) => {

    let {
        appMessage,
        currentStepNomber,
        setCurrentStepNomber,
        setAppMessage,

    } = props;

    const click = () => {
        if( currentStepNomber === 3 ){
            setCurrentStepNomber( 1 );
        }else{
            setCurrentStepNomber( currentStepNomber + 1 );
        };
        setAppMessage( '' );
    };



    return (

        <div className = 'AL_AppMessage' >
           
           <div className = 'AL_AppMessage_text'>{ appMessage }</div>

           <div
                className = 'AL_AppMessage_btn'
            >
                <span
                    onClick = { click }
                >{ currentStepNomber === 3? 'Начать сначала': 'Продолжить' }</span>
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
            setAppMessage = { ( val ) => { dispatch( setAppMessage( val ) ) } }


            


        />
    );


}
