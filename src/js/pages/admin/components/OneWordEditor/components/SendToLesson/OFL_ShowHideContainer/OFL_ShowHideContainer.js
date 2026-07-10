
import React from "react";

import './OFL_ShowHideContainer.scss';


export const OFL_ShowHideContainer = ( props ) => {

    let {
        isWait,
        children
    } = props;

    return (
        <>{ isWait === false? children: '' }</>

    )

};


