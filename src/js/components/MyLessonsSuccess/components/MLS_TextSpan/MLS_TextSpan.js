
import React, { useRef, useState, useEffect }   from "react";

import './MLS_TextSpan.scss';

import { get_elem_width_px } from './../../vendors/get_elem_width_px.js';


export const MLS_TextSpan = ( props ) => {

    let {
        setTextWidth

    } = props;

    let refElem = useRef();

    useEffect( () => {
        let width = get_elem_width_px( refElem.current );
        setTextWidth( width );
    }, [] );



    return (

        <span className = 'MLS_TextSpan' ref = { refElem } >Мой успех:</span>
                
    )

};

