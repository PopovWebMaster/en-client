// AudioList


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AudioList.scss';



const AudioListComponent = ( props ) => {

    let {
        wordId,

    } = props;




    return (
        <div className = 'OFW_AudioList'>
            
            AudioList

        </div>
    )

};


export function AudioList( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AudioListComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
