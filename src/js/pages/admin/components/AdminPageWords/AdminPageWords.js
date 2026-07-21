
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageWords.scss';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';

import { AddNewWord } from './components/AddNewWord/AddNewWord.js';
import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';
import { FreeWordsList } from './components/FreeWordsList/FreeWordsList.js';

import { AddNewWordComponent } from './components/AddNewWordComponent/AddNewWordComponent.js';
import { SaveWordsChanges } from './components/SaveWordsChanges/SaveWordsChanges.js';

import { WordsCount } from './../WordsCount/WordsCount.js';
import { WordsSortingButtons } from './../WordsSortingButtons/WordsSortingButtons.js';


const AdminPageWordsComponent = ( props ) => {

    let {
        languageKeyName,

    } = props;
    let what_to_take = [
        'wordList',
    ];


    return (
        <AdminPageContainer>
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take}
                currentLessonId =   { null }
            >
                <A_TopButtonsContainer>

                    <div className = 'A_TopButtonsLeftBlock'>
                        <WordsCount />
                        <WordsSortingButtons />
                    </div>

                    <AddNewWord />
                    <SaveWordsChanges />

                </A_TopButtonsContainer>

                <AddNewWordComponent />

                <FreeWordsList />

               
            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};


export function AdminPageWords( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageWordsComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
