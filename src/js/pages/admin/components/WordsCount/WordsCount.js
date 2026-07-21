
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice } from './../../../../redux/admin/wordsSlice.js'

import './WordsCount.scss';


const WordsCountComponent = ( props ) => {

    let {
        wordList,

    } = props;


    return (
        <div className = 'wordsCount'>
            <span className = 'WC_text'>Всего слов:</span>
            <span className = 'WC_value'>{ wordList.length }</span>
        </div>
        
    )

};


export function WordsCount( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsCountComponent
            { ...props }
            wordList = { words.wordList }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
