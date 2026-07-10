

import React from "react";

import './OFL_Wait.scss';


export const OFL_Wait = ( props ) => {

    let {
        isWait,
    } = props;

    return (
        <>{ isWait === true? (
            <div className = 'OLE_OFL_Wait'>
                <span className = 'icon-spin2 animate-spin'></span>
            </div>
        ): '' }</>

    )

};


