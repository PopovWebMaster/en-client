
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'
import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';

// import './WLCP_BtnForeignByLength.scss';
import { WLSB_BtnContainer } from './../WLSB_BtnContainer/WLSB_BtnContainer.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/wordsList.js';
import { selectorData as wordsSlice, setWordsListSortingValue } from './../../../../../../../redux/admin/wordsSlice.js';

const WLCP_BtnForeignByLengthComponent = ( props ) => {

    let {
        languageKeyName,
        setWordsListSortingValue,
        
        wordsListSortingValue,

    } = props;

    const click = () => {
        setWordsListSortingValue( WORDS_LIST_SORT_BY.FOREIGN_LENGTH );
    }

    return (
        <WLSB_BtnContainer
            isActive =      { wordsListSortingValue === WORDS_LIST_SORT_BY.FOREIGN_LENGTH }
            hoverTitle =    { 'Первые в списке слова, самые короткие по иностр.' }
            title =         { languageKeyName }
            icon =          { 'icon-sort-number-up' }
            clickHandler =  { click }
        />
    )

};


export function WLCP_BtnForeignByLength( props ){

    const language = useSelector( languageSlice );
    const words = useSelector( wordsSlice );
    const dispatch = useDispatch();

    return (
        <WLCP_BtnForeignByLengthComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            wordsListSortingValue = { words.wordsListSortingValue }
            setWordsListSortingValue = { ( val ) => { dispatch( setWordsListSortingValue( val ) ) } }

        />
    );


}
