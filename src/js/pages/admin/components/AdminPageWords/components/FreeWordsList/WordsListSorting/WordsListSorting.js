// WordsListSorting


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './WordsListSorting.scss';


import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js';


const WordsListSortingComponent = ( props ) => {

    let {
        
        children,
    } = props;

   
    return (

        <>{ children }</>
        
        
    )

};


export function WordsListSorting( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListSortingComponent
            { ...props }
            wordList = { words.wordList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
