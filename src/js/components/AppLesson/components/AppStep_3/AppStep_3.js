
import React, { useState, useEffect, useMemo } from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_3.scss';

import { QuestionContainer } from './../QuestionContainer/QuestionContainer.js';
import { AppLearnModeClass } from './../../../../classes/AppLearnModeClass.js';
import { AppStepContainer } from './../AppStepContainer/AppStepContainer.js';

import { AppStep3Input } from './AppStep3Input/AppStep3Input.js';
import { AppStep3ResultFeed } from './AppStep3ResultFeed/AppStep3ResultFeed.js';


const AppStep_3Component = ( props ) => {

    let {
        currentStepNomber,

        currentLearnForeign,
        currentLearnRu,
        // currentLearnTranscription,
        currentLearnWordId,

    } = props;

    let [ response, setResponse ] = useState( '' );
    let [ answer, setAnswer ] = useState( null );
    let [ answerIsCorrect, setAnswerIsCorrect] = useState( false );
    let [ answerCorrect, setAnswerCorrect ] = useState( '' );



    


    useEffect( () => {

        setResponse( '' );
        setAnswerCorrect( currentLearnForeign );

    }, [ currentLearnWordId ] );


    let AppLearn = useMemo( () => {
        let AppLearnMode = new AppLearnModeClass;
        return AppLearnMode; 
    }, [] );

    useEffect( () => {
        if( currentStepNomber === 3 ){
            AppLearn.StartForStep( currentStepNomber );
            setAnswer( null );
        }else{
            AppLearn = null;
        };
    }, [ currentStepNomber ] );

    const acceptResponse = () => {
        let resp = response.trim();
        if( resp === '' ){
            setAnswer( '' );
            setAnswerIsCorrect( false );
        }else{
            if( resp === currentLearnForeign ){
                setAnswerIsCorrect( true );
            }else{
                setAnswerIsCorrect( false );
            };
            setAnswer( resp );
        };

        AppLearn.Next( resp === currentLearnForeign );
        

    }

    

    return (

        <AppStepContainer className = 'AL_AppStep_3'>
            <QuestionContainer>
                <div className = 'AL_AppStep_3_area'>
                    <div className = 'AL_AppStep_3_question'>
                        <span>{ currentLearnRu }</span>
                    </div>
                    <div className = 'AL_AppStep_3_answer'>
                        <AppStep3ResultFeed
                            answer = { answer }
                            answerIsCorrect = { answerIsCorrect }
                            answerCorrect = { answerCorrect }

                        />

                        <AppStep3Input
                            response =      { response }
                            setResponse =   { setResponse }
                            acceptResponse = { acceptResponse }
                        />
                    </div>
                </div>
            </QuestionContainer>
        </AppStepContainer>

    )

};


export function AppStep_3( props ){

    const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppStep_3Component
            { ...props }
                currentLearnForeign =       { appData.currentLearnForeign }
                currentLearnRu =            { appData.currentLearnRu }
                currentLearnTranscription = { appData.currentLearnTranscription }
                currentLearnWordId =        { appData.currentLearnWordId }

                currentStepNomber = { appData.currentStepNomber }


        />
    );


}
