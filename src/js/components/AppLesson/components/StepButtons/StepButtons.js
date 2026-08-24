
import React from "react";

import { selectorData as appDataSlice, setCurrentStepNomber } from './../../../../redux/appDataSlice.js';
import { selectorData as settingsSlice } from './../../../../redux/settingsSlice.js';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './StepButtons.scss';


const StepButtonsComponent = ( props ) => {

    let {
        // showStatus,
        // setShowStatus,
        currentStepNomber,

        buttonNameStep_1,
        buttonNameStep_2,
        buttonNameStep_3,

        setCurrentStepNomber,

    } = props;

    const click = ( num ) => {
        setCurrentStepNomber( num );
    };



    return (

        <div className = 'AL_StepButtons_wrap' >
            <div
                className = { `AL_StepButtons_btn ${ currentStepNomber === 1? 'isActive': '' }` }
                onClick = { () => { click( 1 ) } }
            >
                <span>{ buttonNameStep_1 }</span>
            </div>

            <div
                className = { `AL_StepButtons_btn ${ currentStepNomber === 2? 'isActive': '' }` }
                onClick = { () => { click( 2 ) } }
            >
                <span>{ buttonNameStep_2 }</span>
            </div>

            <div
                className = { `AL_StepButtons_btn ${ currentStepNomber === 3? 'isActive': '' }` }
                onClick = { () => { click( 3 ) } }
            >
                <span>{ buttonNameStep_3 }</span>
            </div>

           
            
        </div>

        



    )

};


export function StepButtons( props ){

    const appData = useSelector( appDataSlice );
    const settings = useSelector( settingsSlice );

    const dispatch = useDispatch();

    return (
        <StepButtonsComponent
            { ...props }
            currentStepNomber = { appData.currentStepNomber }

            buttonNameStep_1 = { settings.buttonNameStep_1 }
            buttonNameStep_2 = { settings.buttonNameStep_2 }
            buttonNameStep_3 = { settings.buttonNameStep_3 }

            setCurrentStepNomber = { ( val ) => { dispatch( setCurrentStepNomber( val ) ) } }

        />
    );


}
