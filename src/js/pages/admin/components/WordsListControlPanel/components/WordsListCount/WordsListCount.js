
import React from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js'

import './WordsListCount.scss';

const WordsListCountComponent = ( props ) => {

    let {
        wordList,
    } = props;

    return (
        <div className = 'WLCP_wordsCount'>
            <span className = 'WLCP_WC_text'>Всего слов:</span>
            <span className = 'WLCP_WC_value'>{ wordList.length }</span>
        </div>
    )

};


export function WordsListCount( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListCountComponent
            { ...props }
            wordList = { words.wordList }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
