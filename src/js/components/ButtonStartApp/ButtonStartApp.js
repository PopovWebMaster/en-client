// ButtonStartApp


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonStartApp.scss';

const ButtonStartAppComponent = ( props ) => {

    let {
        click,
        title = 'Начнёмс',
    } = props;


    return (
        <div 
            id = { 'buttonStartApp' }
            // onClick = { click }
        >
            <span className = 'BSA_icon icon-thumbs-up'></span>
            <span className = 'BSA_title'>{ title }</span>
        </div>

    )

};


export function ButtonStartApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonStartAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
