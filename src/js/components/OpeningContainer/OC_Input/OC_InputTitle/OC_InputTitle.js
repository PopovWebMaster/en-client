
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_InputTitle.scss';

const OC_InputTitleComponent = ( props ) => {

    let {
        title,
        isRequired,
       
    } = props;



    return (
        <h4 className = 'OC_Input_title'>{ title }{ isRequired? (<span className = 'isReq'>required</span>): '' }</h4>

    )

};


export function OC_InputTitle( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputTitleComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
