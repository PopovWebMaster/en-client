
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_3.scss';


const AppStep_3Component = ( props ) => {

    let {
        // appMessage,
        // currentStepNomber,

    } = props;

    

    return (

        <div className = 'AL_AppStep_3' >
           AppStep_3
        </div>

    )

};


export function AppStep_3( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_3Component
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
