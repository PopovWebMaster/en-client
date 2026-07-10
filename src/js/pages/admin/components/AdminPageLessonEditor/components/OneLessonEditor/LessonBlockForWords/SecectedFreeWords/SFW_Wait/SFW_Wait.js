

import React from "react";

import './SFW_Wait.scss';


export const SFW_Wait = ( props ) => {

    let {
        isWait,
    } = props;

    return (
        <>{ isWait === true? (
            <div className = 'OLE_SFW_wait'>
                <span className = 'icon-spin2 animate-spin'></span>
            </div>
        ): '' }</>

    )

};


