
import React, { useRef, useEffect } from "react";

// import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppResponseInput.scss';


import { AppReasAnswersFeed } from './AppReasAnswersFeed/AppReasAnswersFeed.js'


const AppResponseInputComponent = ( props ) => {

    let {
        responseValue,
        setResponseValue,
        placeholder = 'место для ответа',
        acceptResponse = () => {},

        answer = '',
        answerIsCorrect = false,
        answerCorrect = '',

    } = props;
    let refInp = useRef();

    useEffect( () => {
        refInp.current.focus();
    }, [] );

    const change = ( e ) => {
        let val = e.target.value;
        setResponseValue( val );
    }
    const enter = ( e ) => {
        if( e.which === 13 ){
            acceptResponse();
        };
    }


    return (

        <div className = 'AppResponse'>

            <AppReasAnswersFeed
                answer = { answer }
                answerIsCorrect = { answerIsCorrect }
                answerCorrect = { answerCorrect }
            />



            <div className = 'AppResponseInput'>
                <input
                    type = 'text'
                    value  = { responseValue }
                    onChange = { change }
                    onKeyDown = { enter }
                    className = 'AppResponseInput_inp'
                    placeholder = { placeholder }
                    ref = { refInp }
                />
                <div className = 'AppResponseInput_btn'>
                    <span
                        onClick = { acceptResponse }
                    >Enter</span>

                </div>
            </div>

        </div>

        
    )

};


export function AppResponseInput( props ){

    // const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppResponseInputComponent
            { ...props }

                // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
