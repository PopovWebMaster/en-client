
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ControlButtons.scss';

import { RemoveWordBtn } from './../RemoveWordBtn/RemoveWordBtn.js';
import { SendToLesson } from './../SendToLesson/SendToLesson.js';



const ControlButtonsComponent = ( props ) => {

    let {
        wordId,

    } = props;




    return (
        <div className = 'OFW_ControlButtons'>
            <SendToLesson wordId = { wordId }/>
            <RemoveWordBtn wordId = { wordId }/>
            

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
