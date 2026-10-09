
import React, { useRef, useState, useEffect }   from "react";

import './MLS_OneCountSpan.scss';

import { LANGUAGES } from './../../../../config/languages.js';
import { get_elem_width_px } from './../../vendors/get_elem_width_px.js';

export const MLS_OneCountSpan = ( props ) => {

    let {
        keyName,
        countString,
        widthList,
        setWidthList,

    } = props;
    // let [ isReady, setIsReady ] = useState( false );

    // let elemRef = useRef();

    // useEffect( () => {
    //     if( isReady === true ){
    //         let width = get_elem_width_px( elemRef.current );
            
    //         let arr = structuredClone( widthList );
    //         arr.push( width );
    //         setWidthList( arr );
            
            
    //     };
    // }, [ isReady ] );


    // const load = () => {

    //     setIsReady( true );
    // }


    return (

        <span className = 'MLS_OneCountSpan'>
            <img
                src = { LANGUAGES[ keyName ].icon }
                // onLoad = { load }
            />
            { countString }
        </span>
                
    )

};

