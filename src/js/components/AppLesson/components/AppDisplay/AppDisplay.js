// AppDisplay


import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppDisplay.scss';

import { AppMessage } from './../AppMessage/AppMessage.js';


const AppDisplayComponent = ( props ) => {

    let {
        appMessage,
        currentStepNomber,

    } = props;

    const create = ( message, step ) => {
        let result = '';
        if( message === '' ){

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
