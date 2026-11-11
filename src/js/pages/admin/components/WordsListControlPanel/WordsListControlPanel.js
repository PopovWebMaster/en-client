
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice } from './../../../../redux/admin/wordsSlice.js';

import './WordsListControlPanel.scss';

import { WordsListCount } from './components/WordsListCount/WordsListCount.js';
import { WordsListSortButtons } from './components/WordsListSortButtons/WordsListSortButtons.js';


const WordsListControlPanelComponent = ( props ) => {

    let {
        // wordList,

    } = props;


    return (
        <div className = 'wordsListControlPanel'>

            <WordsListCount />

            <WordsListSortButtons />
            
            
        </div>
        
    )

};


export function WordsListControlPanel( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListControlPanelComponent
            { ...props }
            // wordList = { words.wordList }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
