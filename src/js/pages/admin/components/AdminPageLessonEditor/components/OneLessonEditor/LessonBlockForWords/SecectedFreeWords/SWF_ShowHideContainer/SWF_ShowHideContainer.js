
import React from "react";

import './SWF_ShowHideContainer.scss';


export const SWF_ShowHideContainer = ( props ) => {

    let {
        isWait,
        children
    } = props;

    return (
        <>{ isWait === false? children: '' }</>

    )

};


