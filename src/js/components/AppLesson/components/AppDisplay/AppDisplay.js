// AppDisplay


import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppDisplay.scss';

import { AppMessage } from './../AppMessage/AppMessage.js';
import { AppStep_1 } from './../AppStep_1/AppStep_1.js';
import { AppStep_2 } from './../AppStep_2/AppStep_2.js';
import { AppStep_3 } from './../AppStep_3/AppStep_3.js';



const AppDisplayComponent = ( props ) => {

    let {
        appMessage,
        currentStepNomber,

    } = props;

    const create = ( message, step ) => {
        let result = '';
        if( message === '' ){
            if( step === 1 ){
                result = <AppStep_1 />
            }else if( step === 2 ){
                result = <AppStep_2 />
            }else if( step === 3 ){
                result = <AppStep_3/>
            };
        }else{
            result = <AppMessage />;
        };



        return result;

    };

    return (

        <div className = 'AL_AppDisplay' >
            <div className = 'AL_AppDisplay_hidden'></div>
            <div className = 'AL_AppDisplay_wrap'>
                { create( appMessage, currentStepNomber ) }

            </div>
        </div>

    )

};


export function AppDisplay( props ){

    const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AppDisplayComponent
            { ...props }
            appMessage = { appData.appMessage }
            currentStepNomber = { appData.currentStepNomber }


        />
    );


}
