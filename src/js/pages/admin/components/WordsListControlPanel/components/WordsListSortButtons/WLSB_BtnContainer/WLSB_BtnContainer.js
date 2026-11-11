

import React from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js'

import './WLSB_BtnContainer.scss';

const WLSB_BtnContainerComponent = ( props ) => {

    let {
        isActive = false,
        hoverTitle = '',
        title = '',
        icon = '',
        clickHandler = () => {},


    } = props;

    const click = () => {
        clickHandler();

        let freeWordsList = document.querySelector( '.freeWordsList' );
        if( freeWordsList ){
            freeWordsList.scrollIntoView( {behavior: "smooth", block: "start", inline: "start"});
        }else{
            console.error( 'Тревога! не получатеся прокрутить наверх из кнопки WLSB_BtnContainer' );
        };
        

    }
    
    return (
        <div
            className = { `WLSB_BtnContainer ${isActive? 'WLSB_BtnContainer_active': ''}` }
            onClick = { click }
            title = { hoverTitle }
        >
            <span className = 'WLSB_BtnContainer_name'>{ `${title}:` }</span>
            <span className = { `WLSB_BtnContainer_icon ${ icon }` }></span>
        </div>
    )

};


export function WLSB_BtnContainer( props ){

    // const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WLSB_BtnContainerComponent
            { ...props }
            // wordList = { words.wordList }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
