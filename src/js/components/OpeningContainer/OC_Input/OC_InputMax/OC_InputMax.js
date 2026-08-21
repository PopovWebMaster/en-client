
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_InputMax.scss';



const OC_InputMaxComponent = ( props ) => {

    let {
        value,
        min = 0,
        max,
        
    } = props;

    return (

        <div className = 'OC_Input_max'>
            { typeof value === 'number'? <span>{ `${min} > ${value} < ${max}` }</span>: <span>{value.length}/{ max }</span>}
            {/* { typeof value === 'number'? <span>{ `${min} > ` }</span>: ''}
            <span>{ typeof value === 'number'? ` ${value} < `: `${value.length}/` }{ max }</span> */}
        </div>

    )

};


export function OC_InputMax( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputMaxComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
