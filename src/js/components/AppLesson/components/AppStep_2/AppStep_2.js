
import React, { useState, useEffect, useMemo } from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_2.scss';

import { QuestionContainer } from './../QuestionContainer/QuestionContainer.js';
import { AnswerButtons } from './../AnswerButtons/AnswerButtons.js';
import { app_audio_play_random } from './../../../../helpers/app_audio_play_random.js';
import { AppLearnModeClass } from './../../../../classes/AppLearnModeClass.js';
import { AppStepContainer } from './../AppStepContainer/AppStepContainer.js';


const AppStep_2Component = ( props ) => {

    let {
        currentStepNomber,

        currentLearnForeign,
        currentLearnRu,
        currentLearnTranscription,
        currentLearnWordId,

    } = props;
    let AppLearn = useMemo( () => {
        let AppLearnMode = new AppLearnModeClass;
        return AppLearnMode; 
    }, [] );

    useEffect( () => {
        if( currentStepNomber === 2 ){
            AppLearn.StartForStep( currentStepNomber );
        }else{
            
        };
        
    }, [ currentStepNomber ] );

    useEffect( () => {
        app_audio_play_random( AppLearn.GetCurrentWordId() );
    }, [ currentLearnWordId ] );

    const response = () => {
        // app_audio_play_random( AppLearn.GetCurrentWordId() );
    }

    const success = () => {
        AppLearn.Next( true );
    }

    const next = () => {
        AppLearn.Next( false );
        
    }
    

    return (

        <AppStepContainer className = 'AL_AppStep_2'>
            <QuestionContainer>
                <span>{ currentLearnForeign }</span>
                {/* <div className = 'AL_AppStep_1_transcr'>
                    <span>{ currentLearnTranscription === ''? '': `[${currentLearnTranscription}]` }</span>
                </div>
                <div className = 'AL_AppStep_1_foreign'>
                    <span>{ currentLearnForeign }</span>
                </div>
                <div className = 'AL_AppStep_1_ru'>
                    <span>{ currentLearnRu }</span>
                </div> */}
            </QuestionContainer>

            <AnswerButtons
                clickResponse = { response }
                clickSuccess =  { success }
                clickNext =     { next }
                responseContent = 'Ответ' 
            />
        </AppStepContainer>



    )

};


export function AppStep_2( props ){

    const appData = useSelector( appDataSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_2Component
            { ...props }
            currentLearnForeign =       { appData.currentLearnForeign }
            currentLearnRu =            { appData.currentLearnRu }
            currentLearnTranscription = { appData.currentLearnTranscription }
            currentLearnWordId =        { appData.currentLearnWordId }

            currentStepNomber = { appData.currentStepNomber }


        />
    );


}
