
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordTranscription.scss';



const WordTranscriptionComponent = ( props ) => {

    let {
        wordId,

    } = props;




    return (
        <div className = 'OFW_WordTranscription'>
            
            WordTranscription

        </div>
    )

};


export function WordTranscription( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordTranscriptionComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
