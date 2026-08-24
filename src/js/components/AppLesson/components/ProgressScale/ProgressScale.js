
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './ProgressScale.scss';


const ProgressScaleComponent = ( props ) => {

    let {
        currentProgress,
    } = props;

    return (

        <div className = 'AL_ProgressScale' >
           
            <div className = 'AL_ProgressScale_wrap' >
                <div className = 'AL_ProgressScale_value'>
                    <span>Progress: { `${currentProgress}%` }</span>
                </div>

                <div className = 'AL_ProgressScale_scale_wrap'>
                    <div
                        className = 'AL_ProgressScale_scale'
                        style = {{ width: `${currentProgress}%` }}
                    ></div>
                </div>
            </div>
            
        </div>

    )

};


export function ProgressScale( props ){

    const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <ProgressScaleComponent
            { ...props }
            currentProgress = { appData.currentProgress }

        />
    );


}
