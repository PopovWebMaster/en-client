
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageWords.scss';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';

import { AddNewWord } from './components/AddNewWord/AddNewWord.js';



const AdminPageWordsComponent = ( props ) => {

    let {

    } = props;


    return (
        <AdminPageContainer>
            <AddNewWord />


        </AdminPageContainer>
    )

};


export function AdminPageWords( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageWordsComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
