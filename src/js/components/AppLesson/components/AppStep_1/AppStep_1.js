
import React, { useState, useEffect, useMemo } from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_1.scss';

import { QuestionContainer } from './../QuestionContainer/QuestionContainer.js';
import { AnswerButtons } from './../AnswerButtons/AnswerButtons.js';
import { app_audio_play_random } from './../../../../helpers/app_audio_play_random.js';
// import { set_next_current_group_index } from './../../../../helpers/set_next_current_group_index.js';

import { AppLearnModeClass } from './../../../../classes/AppLearnModeClass.js';
import { AppStepContainer } from './../AppStepContainer/AppStepContainer.js';

import { SoundAnimation } from './../../../SoundAnimation/SoundAnimation.js';


const AppStep_1Component = ( props ) => {

    let {
        // appMessage,
        currentStepNomber,

        currentLearnForeign,
        currentLearnRu,
        currentLearnTranscription,
        // currentLearnWordId,

    } = props;
    let [ runAnimation, setRunAnimation ] = useState( false );
    let [ isPlaying, setIsPlaying ] = useState( false );

    let AppLearn = useMemo( () => {
        let AppLearnMode = new AppLearnModeClass;
        return AppLearnMode; 
    }, [] );

    useEffect( () => {
        if( currentStepNomber === 1 ){
            AppLearn.StartForStep( currentStepNomber );
        }else{
            AppLearn = null;
        };
        
    }, [ currentStepNomber ] );

    const sound = ( e ) => {
        play_audio( e, AppLearn.GetCurrentWordId() );
    }

    // const response = ( e ) => {
    //     play_audio( e, AppLearn.GetCurrentWordId() );
    //     // app_audio_play_random( AppLearn.GetCurrentWordId() );
    // }

    const success = () => {
        AppLearn.Next( true );
    }

    const next = () => {
        AppLearn.Next( false );
        
    }


    const play_audio = ( e, wordId ) => {
        
        if( isPlaying === false ){
            setRunAnimation( true );
            setIsPlaying( true );

            let timerAudio = setTimeout( () => {
                app_audio_play_random( wordId );
                clearTimeout( timerAudio );
            }, 500 );
            
            let timerId = setTimeout( () => {
                setRunAnimation( false );
                setIsPlaying( false );
                clearTimeout( timerId );
            }, 2000 );

        };
        
    }


    return (

        <AppStepContainer className = 'AL_AppStep_1'>
            <QuestionContainer
                isHovered = { true }
                clickHandler = { (e) => { play_audio( e, AppLearn.GetCurrentWordId() ) } }
            >
                
                <div className = 'AL_AppStep_1_transcr'>
                    <span>{ currentLearnTranscription === ''? '': `[${currentLearnTranscription}]` }</span>
                </div>
                <div className = 'AL_AppStep_1_foreign'>
                    <span>{ currentLearnForeign }</span>
                </div>
                <div className = 'AL_AppStep_1_ru'>
                    <span>{ currentLearnRu }</span>
                </div>

                <div className = 'AL_AppStep_1_speaker'>
                    <SoundAnimation
                        runAnimation =      { runAnimation }
                        asButton = { true }
                        clickHandler = { () => {} }
                    />
                </div>

            </QuestionContainer>

            <AnswerButtons
                clickSound = { sound }
                // clickResponse = { response }
                clickSuccess =  { success }
                clickNext =     { next }
           />
        </AppStepContainer>



    )

};


export function AppStep_1( props ){

    const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_1Component
            { ...props }

            currentLearnForeign =       { appData.currentLearnForeign }
            currentLearnRu =            { appData.currentLearnRu }
            currentLearnTranscription = { appData.currentLearnTranscription }
            currentLearnWordId =        { appData.currentLearnWordId }

            currentStepNomber = { appData.currentStepNomber }


        />
    );


}
