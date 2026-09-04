
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

import { SoundAnimation } from './../../../SoundAnimation/SoundAnimation.js';


const AppStep_2Component = ( props ) => {

    let {
        currentStepNomber,

        currentLearnForeign,
        currentLearnRu,
        currentLearnTranscription,
        currentLearnWordId,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ runAnimation, setRunAnimation ] = useState( false );
    let [ isPlaying, setIsPlaying ] = useState( false );
    let [ buttonsIsActive, setButtonsIsActive ] = useState( true );



    






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
        // app_audio_play_random( AppLearn.GetCurrentWordId() );
        play_audio( AppLearn.GetCurrentWordId() )
        setIsOpen( false );
    }, [ currentLearnWordId ] );

    const response = () => {
        // app_audio_play_random( AppLearn.GetCurrentWordId() );
        setIsOpen( true );
    }

    const success = () => {
        AppLearn.Next( true );
        setIsOpen( false );
    }

    const next = () => {
        AppLearn.Next( false );
        setIsOpen( false );
        
    }

    const play_audio = ( wordId ) => {
        if( isPlaying === false ){
            setRunAnimation( true );
            setIsPlaying( true );
            setButtonsIsActive( false );

            let timerAudio = setTimeout( () => {
                app_audio_play_random( wordId );
                clearTimeout( timerAudio );
            }, 500 );
            


            let timerId = setTimeout( () => {
                setRunAnimation( false );
                setIsPlaying( false );
                clearTimeout( timerId );
                setButtonsIsActive( true );
            }, 2000 );

        };
        
    }
    

    return (

        <AppStepContainer className = 'AL_AppStep_2'>
            <QuestionContainer>

                <>{ isOpen? (
                    <div className = 'AL_AppStep_2_response'>
                        <div className = 'AL_AppStep_2_response_transcr'>
                            <span>{ currentLearnTranscription }</span>
                        </div>
                        <div className = 'AL_AppStep_2_response_foreign'>
                            <span>{ currentLearnForeign }</span>
                        </div>
                        <div className = 'AL_AppStep_2_response_ru'>
                            <span>{ currentLearnRu }</span>
                        </div>

                    </div>
                ): (
                    <SoundAnimation
                        runAnimation =      { runAnimation }
                        clickHandler = { () => { play_audio( AppLearn.GetCurrentWordId() ) } }
                    />
                ) }</>
                
            
            </QuestionContainer>

            <AnswerButtons
                isActive = { buttonsIsActive }
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
