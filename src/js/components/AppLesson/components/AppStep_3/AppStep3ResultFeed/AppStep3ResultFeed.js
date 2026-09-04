// AppStep3ResultFeed


import React, { useState, useEffect } from "react";

// import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep3ResultFeed.scss';



const AppStep3ResultFeedComponent = ( props ) => {

    let {


    } = props;


    return (

        <div className = 'appStep3ResultFeed'>
            AppStep3ResultFeed
        </div>
    )

};


export function AppStep3ResultFeed( props ){

    // const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppStep3ResultFeedComponent
            { ...props }

                // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
