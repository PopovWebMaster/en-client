
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ControlButtons.scss';



const ControlButtonsComponent = ( props ) => {

    let {
        wordId,

    } = props;




    return (
        <div className = 'OFW_ControlButtons'>
            
            ControlButtons

        </div>
    )

};


export function ControlButtons( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <ControlButtonsComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
