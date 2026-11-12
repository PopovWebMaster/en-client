
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'
import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';

// import './WLCP_BtnForeignAZ.scss';
import { WLSB_BtnContainer } from './../WLSB_BtnContainer/WLSB_BtnContainer.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/wordsList.js';
import { selectorData as wordsSlice, setWordsListSortingValue } from './../../../../../../../redux/admin/wordsSlice.js';

const WLCP_BtnForeignAZComponent = ( props ) => {

    let {
        languageKeyName,
        wordsListSortingValue,
        setWordsListSortingValue,


    } = props;

    const click = () => {
        setWordsListSortingValue( WORDS_LIST_SORT_BY.FOREIGN_ALPHABET );
    }

    return (
        <WLSB_BtnContainer
            isActive =      { wordsListSortingValue === WORDS_LIST_SORT_BY.FOREIGN_ALPHABET }
            hoverTitle =    { 'Сортировка по иностранным словам по алфавиту от A до Z' }
            title =         { languageKeyName }
            icon =          { 'icon-sort-name-up' }
            clickHandler =  { click }
        />
    )

};


export function WLCP_BtnForeignAZ( props ){

    const language = useSelector( languageSlice );
    const words = useSelector( wordsSlice );


    const dispatch = useDispatch();

    return (
        <WLCP_BtnForeignAZComponent
            { ...props }
            wordsListSortingValue = { words.wordsListSortingValue }
            languageKeyName = { language.languageKeyName }
            setWordsListSortingValue = { ( val ) => { dispatch( setWordsListSortingValue( val ) ) } }

        />
    );


}
