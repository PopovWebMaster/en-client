
import React from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'
// import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';

// import './WLCP_BtnForeignByBadRu.scss';
import { WLSB_BtnContainer } from './../WLSB_BtnContainer/WLSB_BtnContainer.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/routes.js';
import { setWordsListSortingValue } from './../../../../../../../redux/admin/wordsSlice.js';

const WLCP_BtnForeignByBadRuComponent = ( props ) => {

    let {
        // languageKeyName,


    } = props;

    const click = () => {
        alert( 'не прописан' );
    }

    return (
        <WLSB_BtnContainer
            hoverTitle =    { 'Первые в списке слова без русского перевода'  }
            title =         { 'RU' }
            icon =          { 'icon-thumbs-down-alt' }
            clickHandler =  { click }
        />
    )

};


export function WLCP_BtnForeignByBadRu( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <WLCP_BtnForeignByBadRuComponent
            { ...props }
            // languageKeyName = { language.languageKeyName }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
