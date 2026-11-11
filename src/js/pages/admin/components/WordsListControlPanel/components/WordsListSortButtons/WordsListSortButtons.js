
import React from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js'

import './WordsListSortButtons.scss';

import { WLCP_BtnForeignAZ } from './WLCP_BtnForeignAZ/WLCP_BtnForeignAZ.js';
import { WLCP_BtnRuAZ } from './WLCP_BtnRuAZ/WLCP_BtnRuAZ.js';
import { WLCP_BtnForeignByLength } from './WLCP_BtnForeignByLength/WLCP_BtnForeignByLength.js';
import { WLCP_BtnForeignByTopic } from './WLCP_BtnForeignByTopic/WLCP_BtnForeignByTopic.js';
import { WLCP_BtnForeignByRepeats } from './WLCP_BtnForeignByRepeats/WLCP_BtnForeignByRepeats.js';
import { WLCP_BtnForeignByBadPOS } from './WLCP_BtnForeignByBadPOS/WLCP_BtnForeignByBadPOS.js';
import { WLCP_BtnForeignByBadAudio } from './WLCP_BtnForeignByBadAudio/WLCP_BtnForeignByBadAudio.js';
import { WLCP_BtnForeignByBadTranscript } from './WLCP_BtnForeignByBadTranscript/WLCP_BtnForeignByBadTranscript.js';
import { WLCP_BtnForeignByBadForeign } from './WLCP_BtnForeignByBadForeign/WLCP_BtnForeignByBadForeign.js';
import { WLCP_BtnForeignByBadRu } from './WLCP_BtnForeignByBadRu/WLCP_BtnForeignByBadRu.js';

const WordsListSortButtonsComponent = ( props ) => {

    let {
        wordList,

    } = props;

    return (
        <div className = 'WLCP_WordsListSortButtons'>
            <WLCP_BtnForeignAZ />
            <WLCP_BtnRuAZ />
            <WLCP_BtnForeignByLength />
            <WLCP_BtnForeignByTopic />
            <WLCP_BtnForeignByRepeats />
            <WLCP_BtnForeignByBadPOS />
            <WLCP_BtnForeignByBadAudio />
            <WLCP_BtnForeignByBadForeign />
            <WLCP_BtnForeignByBadRu />
            <WLCP_BtnForeignByBadTranscript />


        </div>
    )

};


export function WordsListSortButtons( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListSortButtonsComponent
            { ...props }
            wordList = { words.wordList }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
