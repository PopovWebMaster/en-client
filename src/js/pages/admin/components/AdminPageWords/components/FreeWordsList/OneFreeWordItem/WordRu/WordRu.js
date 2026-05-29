
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordRu.scss';



const WordRuComponent = ( props ) => {

    let {
        wordId,

    } = props;




    return (
        <div className = 'OFW_WordRu'>
            
            WordRu

        </div>
    )

};


export function WordRu( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordRuComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
