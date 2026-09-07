

import React, { useRef, useEffect } from "react";

// import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep3Input.scss';



const AppStep3InputComponent = ( props ) => {

    let {
        response,
        setResponse,

        acceptResponse = () => {},

    } = props;
    let refInp = useRef();

    useEffect( () => {
        refInp.current.focus();
    }, [] );

    const change = ( e ) => {
        let val = e.target.value;
        setResponse( val );
    }
    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptResponse();
        };
    }


    return (

        <div className = 'AppStep3Input'>
            <input
                type = 'text'
                value  = { response }
                onChange = { change }
                onKeyDown = { enter }
                className = 'AppStep3Input_inp'
                placeholder = 'место для ответа'
                ref = { refInp }
            />
            <div className = 'AppStep3Input_btn'>
                <span
                    onClick = { acceptResponse }
                >Enter</span>

            </div>
        </div>
    )

};


export function AppStep3Input( props ){

    // const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppStep3InputComponent
            { ...props }

                // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
