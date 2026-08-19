
import React from "react";

import './ColumnContainer.scss';

export const ColumnContainer = ( props ) => {

    let {
        children,

        className = '',
        
    } = props;


    return (

        <div className = { `WLAT_ListColumn ${className}` }>
            { children }
        </div>
            
    )

};

