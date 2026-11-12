
import React from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'
// import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';

// import './WLCP_BtnForeignByBadPOS.scss';
import { WLSB_BtnContainer } from './../WLSB_BtnContainer/WLSB_BtnContainer.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/wordsList.js';
import { selectorData as wordsSlice, setWordsListSortingValue } from './../../../../../../../redux/admin/wordsSlice.js';

const WLCP_BtnForeignByBadPOSComponent = ( props ) => {

    let {
        // languageKeyName,
        setWordsListSortingValue,
        wordsListSortingValue,

    } = props;

    const click = () => {
        setWordsListSortingValue( WORDS_LIST_SORT_BY.BAD_POS );
    }

    return (
        <WLSB_BtnContainer
            isActive =      { wordsListSortingValue === WORDS_LIST_SORT_BY.BAD_POS }
            hoverTitle =    { 'Первые в списке слова без части речи' }
            title =         { 'ЧР' }
            icon =          { 'icon-thumbs-down-alt' }
            clickHandler =  { click }
        />
    )

};


export function WLCP_BtnForeignByBadPOS( props ){

    // const language = useSelector( languageSlice );
    const words = useSelector( wordsSlice );
    const dispatch = useDispatch();

    return (
        <WLCP_BtnForeignByBadPOSComponent
            { ...props }
            // languageKeyName = { language.languageKeyName }
            wordsListSortingValue = { words.wordsListSortingValue }
            setWordsListSortingValue = { ( val ) => { dispatch( setWordsListSortingValue( val ) ) } }

        />
    );


}
