
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_1.scss';
import { QuestionContainer } from './../QuestionContainer/QuestionContainer.js';
import { AnswerButtons } from './../AnswerButtons/AnswerButtons.js';


const AppStep_1Component = ( props ) => {

    let {
        // appMessage,
        // currentStepNomber,

    } = props;

    const response = () => {
        
    }

    const success = () => {
        
    }

    const next = () => {
        
    }

    

    return (

        <div className = 'AL_AppStep_1' >
            <QuestionContainer>
                <div className = 'AL_AppStep_1_wrap'>
                    <div className = 'AL_AppStep_1_transcr'>
                        <span>[səkˈses]</span>
                    </div>
                    <div className = 'AL_AppStep_1_foreign'>
                        <span>success success success success</span>
                    </div>
                    <div className = 'AL_AppStep_1_ru'>
                        <span>Здесь какой-то длинный ответ</span>
                    </div>
                </div>
            </QuestionContainer>

            <AnswerButtons
                clickResponse = { response }
                clickSuccess =  { success }
                clickNext =     { next }
           />
        </div>

    )

};


export function AppStep_1( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_1Component
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
