
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneFreeWordItem.scss';
import { ReadyStatus } from './ReadyStatus/ReadyStatus.js';
import { WordForeign } from './WordForeign/WordForeign.js';
import { WordRu } from './WordRu/WordRu.js';
import { WordTranscription } from './WordTranscription/WordTranscription.js';
import { AudioList } from './AudioList/AudioList.js';
import { ControlButtons } from './ControlButtons/ControlButtons.js';



const OneFreeWordItemComponent = ( props ) => {

    let {
        wordId,

    } = props;


    return (
        <div className = 'oneFreeWordItem'>

            
            <div className = 'OFW_line_1'>
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

            <div className = 'OFW_line_2'>
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


export function OneFreeWordItem( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OneFreeWordItemComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
