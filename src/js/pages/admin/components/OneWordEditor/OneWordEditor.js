

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneWordEditor.scss';

import { ReadyStatus } from './components/ReadyStatus/ReadyStatus.js';
import { WordForeign } from './components/WordForeign/WordForeign.js';
import { WordRu } from './components/WordRu/WordRu.js';
import { WordTranscription } from './components/WordTranscription/WordTranscription.js';
import { AudioList } from './components/AudioList/AudioList.js';
import { ControlButtons } from './components/ControlButtons/ControlButtons.js';




const OneWordEditorComponent = ( props ) => {

    let {
        wordId,

    } = props;


    return (
        <div className = 'oneWordEditor'>

            
            <div className = 'OWE_line_1'>
                <ReadyStatus
                    wordId = { wordId }
                />

                <WordForeign
                    wordId = { wordId }
                />

                <WordRu
                    wordId = { wordId }
                />

                <WordTranscription
                    wordId = { wordId }
                />
            </div>

            <div className = 'OWE_line_2'>
                <AudioList
                    wordId = { wordId }
                />

                <ControlButtons
                    wordId = { wordId }
                />

            </div>

            
            
            

        </div>
    )

};


export function OneWordEditor( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OneWordEditorComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
