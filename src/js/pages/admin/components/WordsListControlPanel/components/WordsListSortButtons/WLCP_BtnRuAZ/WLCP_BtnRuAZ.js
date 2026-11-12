
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'
// import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';

// import './WLCP_BtnRuAZ.scss';
import { WLSB_BtnContainer } from './../WLSB_BtnContainer/WLSB_BtnContainer.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/wordsList.js';
import { selectorData as wordsSlice, setWordsListSortingValue } from './../../../../../../../redux/admin/wordsSlice.js';

const WLCP_BtnRuAZComponent = ( props ) => {

    let {
        // languageKeyName,
        setWordsListSortingValue,
        wordsListSortingValue,

    } = props;

    const click = () => {
        setWordsListSortingValue( WORDS_LIST_SORT_BY.RU_ALPHABET );
    }

    return (
        <WLSB_BtnContainer
            isActive =      { wordsListSortingValue === WORDS_LIST_SORT_BY.RU_ALPHABET }
            hoverTitle =    { 'Сортировка по русским словам по алфавиту от А до Я' }
            title =         { 'RU' }
            icon =          { 'icon-sort-name-up' }
            clickHandler =  { click }
        />
    )

};


export function WLCP_BtnRuAZ( props ){

    // const language = useSelector( languageSlice );
    const words = useSelector( wordsSlice );
    const dispatch = useDispatch();

    return (
        <WLCP_BtnRuAZComponent
            { ...props }
            // languageKeyName = { language.languageKeyName }
            wordsListSortingValue = { words.wordsListSortingValue }
            setWordsListSortingValue = { ( val ) => { dispatch( setWordsListSortingValue( val ) ) } }

        />
    );


}
