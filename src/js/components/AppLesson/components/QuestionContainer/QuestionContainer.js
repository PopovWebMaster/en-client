
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './QuestionContainer.scss';


const QuestionContainerComponent = ( props ) => {

    let {
        // appMessage,
        // currentStepNomber,
        children,

    } = props;

    

    return (

        <div className = 'AL_QuestionContainer' >
            { children }
        </div>

    )

};


export function QuestionContainer( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <QuestionContainerComponent
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
