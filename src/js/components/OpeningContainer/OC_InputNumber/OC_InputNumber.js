
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_InputNumber.scss';

import { OC_InputTitle } from './../OC_Input/OC_InputTitle/OC_InputTitle.js';
import { OC_InputMax } from './../OC_Input/OC_InputMax/OC_InputMax.js';

const OC_InputNumberComponent = ( props ) => {

    let {
        title = 'Упс, а чё это?',
        value,
        setValue,
        min = 0,
        max = 255,

        blure = () => {},

    } = props;



    const change = ( e ) => {
        let val = Number( e.target.value );
        if( val >= min && val <= max ){
            setValue( val );
        };

    }

    
    return (
        <div className = 'OC_InputNumber'>

            <OC_InputTitle
                title =         { title }
                isRequired =    { false }
            />


            <input 
                type =          'number'
                className =     'OC_Input_inp_number'
                value =         { value }  
                maxLength =     { max } 
                minLength =     { min }
                onChange =      { change }
                onBlur =        { blure }
            />

            <OC_InputMax
                value = { value }
                min = { min }
                max = { max }

            />

        </div>

    )

};


export function OC_InputNumber( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputNumberComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
