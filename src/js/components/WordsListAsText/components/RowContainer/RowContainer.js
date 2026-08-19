
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './RowContainer.scss';

export const RowContainer = ( props ) => {

    let {
        children,
        className = '',
        
    } = props;


    return (

        <div className = { `WLAT_ListRow ${className}` }>
            { children }
        </div>
            
    )

};

