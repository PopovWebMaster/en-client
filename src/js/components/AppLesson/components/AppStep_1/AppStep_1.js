
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppStep_1.scss';

import { QuestionContainer } from './../QuestionContainer/QuestionContainer.js';
import { AnswerButtons } from './../AnswerButtons/AnswerButtons.js';
import { app_audio_play_random } from './../../../../helpers/app_audio_play_random.js';
import { set_next_current_group_index } from './../../../../helpers/set_next_current_group_index.js';


const AppStep_1Component = ( props ) => {

    let {
        // appMessage,
        // currentStepNomber,

        appData,


        currentLearnForeign,
        currentLearnRu,
        currentLearnTranscription,
        currentLearnWordId,

    } = props;

    // console.dir( 'appData' );
    // console.dir( appData );

    const response = () => {
        app_audio_play_random( currentLearnWordId );
    }

    const success = () => {
        set_next_current_group_index( true );
    }

    const next = () => {
        set_next_current_group_index( false );
    }


    return (

        <div className = 'AL_AppStep_1' >
            <QuestionContainer>
                <div className = 'AL_AppStep_1_wrap'>
                    <div className = 'AL_AppStep_1_transcr'>
                        <span>{ currentLearnTranscription === ''? '': `[${currentLearnTranscription}]` }</span>
                    </div>
                    <div className = 'AL_AppStep_1_foreign'>
                        <span>{ currentLearnForeign }</span>
                    </div>
                    <div className = 'AL_AppStep_1_ru'>
                        <span>{ currentLearnRu }</span>
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

    const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AppStep_1Component
            { ...props }
            appData = { appData }

            currentLearnForeign =       { appData.currentLearnForeign }
            currentLearnRu =            { appData.currentLearnRu }
            currentLearnTranscription = { appData.currentLearnTranscription }
            currentLearnWordId =        { appData.currentLearnWordId }




            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
