
import React, { useState, useEffect, useMemo } from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';
import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_2.scss';

import { QuestionContainer } from './../QuestionContainer/QuestionContainer.js';
import { app_audio_play_random } from './../../../../helpers/app_audio_play_random.js';
import { AppLearnModeClass } from './../../../../classes/AppLearnModeClass.js';
import { AppStepContainer } from './../AppStepContainer/AppStepContainer.js';

import { SoundAnimation } from './../../../SoundAnimation/SoundAnimation.js';

import { AppResponseInput } from './../AppResponseInput/AppResponseInput.js';


const AppStep_2Component = ( props ) => {

    let {
        currentStepNomber,
        currentLearnRu,
        currentLearnWordId,

    } = props;

    let [ runAnimation, setRunAnimation ] = useState( false );
    let [ isPlaying, setIsPlaying ] = useState( false );

    let [ response, setResponse ] = useState( '' );
    
    let [ answer, setAnswer ] = useState( null );
    let [ answerIsCorrect, setAnswerIsCorrect] = useState( false );
    let [ answerCorrect, setAnswerCorrect ] = useState( '' );





    let AppLearn = useMemo( () => {
        let AppLearnMode = new AppLearnModeClass;
        return AppLearnMode; 
    }, [] );

    useEffect( () => {

        setResponse( '' );
        setAnswerCorrect( currentLearnRu );

        if( currentStepNomber === 2 ){
            AppLearn.StartForStep( currentStepNomber );
            setAnswer( null );
        }else{
            AppLearn = null;
        };

    }, [ currentStepNomber ] );

    useEffect( () => {
        setResponse( '' );
        play_audio( AppLearn.GetCurrentWordId() );
        setAnswerCorrect( currentLearnRu );
    }, [ currentLearnWordId ] );



    const play_audio = ( ) => {
        let wordId = AppLearn.GetCurrentWordId();
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



    const acceptResponse = () => {

        let resp = response.trim();
        if( resp === '' ){
            if( answer === resp ){
                setAnswer( ' ' );
            }else{
                setAnswer( '' );
            };
            setAnswerIsCorrect( false );
        }else{
            if( resp.toLowerCase() === currentLearnRu.toLowerCase() ){
                setAnswerIsCorrect( true );
                setAnswer( response );
            }else{
                let correctStr = currentLearnRu.toLowerCase();
                let arr = correctStr.split( ',' );
                let correctArr = [];
                for( let i = 0; i < arr.length; i++ ){
                    let str = arr[ i ].toLowerCase().trim();
                    correctArr.push( str );
                };
                let respLower = resp.toLowerCase();
                if( correctArr.indexOf( respLower ) === -1 ){
                    setAnswerIsCorrect( false );
                    setAnswer( resp );
                }else{
                    setAnswerIsCorrect( true );
                    setAnswer( correctStr );
                };

                // console.dir( correctArr );

                




                // setAnswerIsCorrect( false );
            };
            // setAnswer( resp );
            // setAnswer( response );
        };

        AppLearn.Next( resp.toLowerCase() === answerCorrect.toLowerCase() );
        

    }


    return (

        <AppStepContainer className = 'AL_AppStep_2'>
            <QuestionContainer>

                <SoundAnimation
                    runAnimation =      { runAnimation }
                    // clickHandler = { () => { play_audio( AppLearn.GetCurrentWordId() ) } }
                    clickHandler = { play_audio }

                />
                <AppResponseInput
                    responseValue =     { response }
                    setResponseValue =  { setResponse }
                    placeholder =       'Ответ на русском'
                    acceptResponse =    { acceptResponse }
                    answer =            { answer }
                    answerIsCorrect =   { answerIsCorrect }
                    answerCorrect =     { answerCorrect }
                    playAudio = { play_audio }

                />

            
            </QuestionContainer>

        </AppStepContainer>



    )

};


export function AppStep_2( props ){

    const appData = useSelector( appDataSlice );
    const appWords = useSelector( appWordsSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_2Component
            { ...props }
            currentLearnForeign =       { appData.currentLearnForeign }
            currentLearnRu =            { appData.currentLearnRu }
            currentLearnTranscription = { appData.currentLearnTranscription }
            currentLearnWordId =        { appData.currentLearnWordId }
            currentPOSId =        { appData.currentPOSId }

            currentStepNomber = { appData.currentStepNomber }
            partOfSpeechListById = { appWords.partOfSpeechListById }


        />
    );


}
