
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';
import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';

import './ButtonsPanel.scss';
import { WordsListButton } from './../WordsListButton/WordsListButton.js';

const ButtonsPanelComponent = ( props ) => {

    let {

        isRow,
        setIsRow,
        isForeign,
        setIsForeign,

        list,
        setList,

        languageKeyName,
        
    } = props;

    const shuffle = () => {
        const newArr = [...list];

        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor( Math.random() * (i + 1));
            [ newArr[i], newArr[j]] = [newArr[j], newArr[i] ];
        };

        setList( newArr );
    }

    return (

        <div className = 'WLAT_ButtonsPanel'>

            <WordsListButton
                isActive =      { isForeign }
                clickHandler =  { () => { setIsForeign( true ) } }
                firstText =     { 'EN' }
                icon =          { 'icon-right' }
                secondText =    { 'RU' }
                iconIsShortenable =         { true }
                secondTextIsShortenable =   { true }
                isFirst = { true }
            />
            <WordsListButton
                isActive =      { !isForeign }
                clickHandler =  { () => { setIsForeign( false ) } }
                firstText =     { 'RU' }
                icon =          { 'icon-right' }
                secondText =    { 'EN' }
                iconIsShortenable =         { true }
                secondTextIsShortenable =   { true }
            />

            <WordsListButton
                isActive =      { isRow }
                clickHandler =  { () => { setIsRow( true ) } }
                secondText =    { 'Строка' }
                isFirst = { true }
            />

            <WordsListButton
                isActive =      { !isRow }
                clickHandler =  { () => { setIsRow( false ) } }
                secondText =    { 'Колонка' }
            />

            <WordsListButton
                isActive =      { false }
                clickHandler =  { shuffle }
                icon =          { 'icon-shuffle' }
                secondText =    { 'Перемешать' }
                firstTextIsShortenable =    { true }
                secondTextIsShortenable =   { true }
                iconStyle = {{ fontSize: '0.78em', paddingTop: '0.2em', color: '#614b4b', }}
                isFirst = { true }
            />


        </div>
            

    )

};


export function ButtonsPanel( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonsPanelComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
