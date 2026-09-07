
import React, { useState, useEffect, useRef } from "react";

import { selectorData as appDataSlice } from './../../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep3ResultFeed.scss';



const AppStep3ResultFeedComponent = ( props ) => {

    let {
        answer,
        answerIsCorrect = false,
        answerCorrect = '',

        currentLearnWordId,

    } = props;

    let [ answerSpan, setAnswerSpan ] = useState( '' );

    let [ showAnswer, setShowAnswer ] = useState( '' );
    let [ fadingAnswer, setFadingAnswer ] = useState( '' );


    let [ style_fading, setStyle_fading ] = useState( { opacity: 0.5, transition: '' } );
    let [ style_show, setStyle_show ] = useState( { opacity: 1, transition: '' } );
    let [ style_showing, setStyle_showing ] = useState( { height: 0, transition: '' } );

    useEffect( () => {
        if( answer === null ){
            setAnswerSpan( '' );
            setShowAnswer( '' );
            setFadingAnswer( '' );
        }else{
            let span = ''
            if( answerIsCorrect === true ){
                span = (<span className = 'answerIsCorrect'>{ answer }</span>);
            }else{
                let text = `${answer} (${answerCorrect})`
                span = (<span className = 'answerIsUncorrect'>{ text.trim() }</span>);
            };
            setAnswerSpan( span );

            move( span, showAnswer );
            
        };

    }, [ answer, currentLearnWordId, answerIsCorrect ] );


    let newRef = useRef();


    const move = ( span, lastSpan ) => {

        let timer1 = setTimeout( () => {
            let style = window.getComputedStyle( newRef.current );

            setStyle_show( { opacity: 0.5, transition: 'opacity 0.3s ease' } );
            setStyle_fading( { opacity: 0, transition: 'opacity 0.3s ease' } );
            setStyle_showing( { height: style.height, transition: 'height 0.3s ease' } );

            let timerId = setTimeout( () => {
                setShowAnswer( span );
                setFadingAnswer( lastSpan );

                setStyle_show( { opacity: 1, transition: '' } );
                setStyle_fading( { opacity: 0.5, transition: '' } );
                setStyle_showing( { height: 0, transition: '' } );

                clearTimeout( timerId );

            }, 400 );

            clearTimeout( timer1 );

        }, 50 );
        
    }


    return (

        <div className = 'appStep3ResultFeed' >

            <div className = 'ASRF_answers_list'>

                <div className = 'ASRF_answer_fading' style = { style_fading  }>
                    { fadingAnswer }
                </div>

                <div className = 'ASRF_answer_last' style = { style_show }>
                    { showAnswer }
                </div>

                <div
                    className = 'ASRF_answer_showing'
                    style = { style_showing }
                >
                    { answerSpan }
                </div>

                
            </div>

            <div className = 'ASRF_new_answer' ref = { newRef }>
                { answerSpan }
            </div>
            
        </div>
    )

};


export function AppStep3ResultFeed( props ){

    const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <AppStep3ResultFeedComponent
            { ...props }

            currentLearnForeign =       { appData.currentLearnForeign }
            currentLearnRu =            { appData.currentLearnRu }
            currentLearnTranscription = { appData.currentLearnTranscription }
            currentLearnWordId =        { appData.currentLearnWordId }
            currentStepNomber =         { appData.currentStepNomber }


        />
    );


}
