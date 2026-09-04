

import React, { useState, useEffect } from "react";

// import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep3Input.scss';



const AppStep3InputComponent = ( props ) => {

    let {


    } = props;


    return (

        <div className = 'AppStep3Input'>
            AppStep3Input
        </div>
    )

};


export function AppStep3Input( props ){

    // const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppStep3InputComponent
            { ...props }

                // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
