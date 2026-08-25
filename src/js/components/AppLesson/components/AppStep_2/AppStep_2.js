
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_2.scss';


const AppStep_2Component = ( props ) => {

    let {
        // appMessage,
        // currentStepNomber,

    } = props;

    

    return (

        <div className = 'AL_AAppStep_2' >
           AppStep_2
        </div>

    )

};


export function AppStep_2( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_2Component
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
