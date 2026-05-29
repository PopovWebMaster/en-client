

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordForeign.scss';



const WordForeignComponent = ( props ) => {

    let {
        wordId,

    } = props;




    return (
        <div className = 'OFW_WordForeign'>
            
            WordForeign

        </div>
    )

};


export function WordForeign( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordForeignComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
