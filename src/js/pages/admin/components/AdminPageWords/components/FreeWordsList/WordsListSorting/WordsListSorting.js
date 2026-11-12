
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './WordsListSorting.scss';


import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js';

import { get_arr_sort_by_bad_audio } from './vendors/get_arr_sort_by_bad_audio.js';
import { get_arr_sort_by_bad_foreign } from './vendors/get_arr_sort_by_bad_foreign.js';
import { get_arr_sort_by_bad_POS } from './vendors/get_arr_sort_by_bad_POS.js';
import { get_arr_sort_by_bad_ru } from './vendors/get_arr_sort_by_bad_ru.js';
import { get_arr_sort_by_bad_transctipt } from './vendors/get_arr_sort_by_bad_transctipt.js';
import { get_arr_sort_by_repeats } from './vendors/get_arr_sort_by_repeats.js';
import { get_arr_sort_by_topics } from './vendors/get_arr_sort_by_topics.js';
import { get_arr_sort_foreign_alpha } from './vendors/get_arr_sort_foreign_alpha.js';
import { get_arr_sort_foreign_length } from './vendors/get_arr_sort_foreign_length.js';
import { get_arr_sort_ru_alpha } from './vendors/get_arr_sort_ru_alpha.js';

import { WORDS_LIST_SORT_BY } from './../../../../../config/wordsList.js';
 
import { set_word_list_to_store } from './../../../../../../../helpers/set_word_list_to_store.js';


const WordsListSortingComponent = ( props ) => {

    let {
        wordsListSortingValue,
        wordList,
        
        children,
    } = props;

    useEffect( () => {
        let result = [];

        switch( wordsListSortingValue ){
            case WORDS_LIST_SORT_BY.FOREIGN_ALPHABET:
                result = get_arr_sort_foreign_alpha( wordList );
                break;

            case WORDS_LIST_SORT_BY.RU_ALPHABET:
                result = get_arr_sort_ru_alpha( wordList );
                break;

            case WORDS_LIST_SORT_BY.FOREIGN_LENGTH:
                result = get_arr_sort_foreign_length( wordList );
                break;

            case WORDS_LIST_SORT_BY.TOPIC:
                result = get_arr_sort_by_topics( wordList );
                break;

            case WORDS_LIST_SORT_BY.REPEATS:
                result = get_arr_sort_by_repeats( wordList );
                break;

            case WORDS_LIST_SORT_BY.BAD_POS:
                result = get_arr_sort_by_bad_POS( wordList );
                break;

            case WORDS_LIST_SORT_BY.BAD_AUDIO:
                result = get_arr_sort_by_bad_audio( wordList );
                break;

            case WORDS_LIST_SORT_BY.BAD_FOREIGN:
                result = get_arr_sort_by_bad_foreign( wordList );
                break;

            case WORDS_LIST_SORT_BY.BAD_RU:
                result = get_arr_sort_by_bad_ru( wordList );
                break;

            case WORDS_LIST_SORT_BY.BAD_TRANSCRIPTION:
                result = get_arr_sort_by_bad_transctipt( wordList );
                break;

            default:
                result = wordList;

        };

        set_word_list_to_store( result );

    }, [ wordsListSortingValue ] );

   
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
            wordsListSortingValue = { words.wordsListSortingValue }
            wordList = { words.wordList }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
