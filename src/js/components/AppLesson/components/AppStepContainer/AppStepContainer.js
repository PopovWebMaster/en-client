
import React from "react";

// import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStepContainer.scss';


const AppStepContainerComponent = ( props ) => {

    let {
        className = '',
        children,

    } = props;


    return (
        <div className = { `AL_AppStep_Container ${className}` } >
            { children }
        </div>
    )

};


export function AppStepContainer( props ){

    // const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppStepContainerComponent
            { ...props }
            // appData = { appData }
            // currentLearnForeign =       { appData.currentLearnForeign }

        />
    );


}
