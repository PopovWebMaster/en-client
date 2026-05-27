
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageWords.scss';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';

import { AddNewWord } from './components/AddNewWord/AddNewWord.js';



const AdminPageWordsComponent = ( props ) => {

    let {
        languageKeyName
    } = props;

    const create = () => {

    }


    return (
        <AdminPageContainer>

            <AddNewWord />
            


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
