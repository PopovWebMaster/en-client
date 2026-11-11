
import React from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'
import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';

// import './WLCP_BtnForeignAZ.scss';
import { WLSB_BtnContainer } from './../WLSB_BtnContainer/WLSB_BtnContainer.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/routes.js';
import { setWordsListSortingValue } from './../../../../../../../redux/admin/wordsSlice.js';

const WLCP_BtnForeignAZComponent = ( props ) => {

    let {
        languageKeyName,


    } = props;

    const click = () => {
        alert( 'не прописан' );
    }

    return (
        <WLSB_BtnContainer
            hoverTitle =    { 'Сортировка по иностранным словам по алфавиту от A до Z' }
            title =         { languageKeyName }
            icon =          { 'icon-sort-name-up' }
            clickHandler =  { click }
        />
    )

};


export function WLCP_BtnForeignAZ( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <WLCP_BtnForeignAZComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
