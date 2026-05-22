
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageEditDictionary.scss';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';



const AdminPageEditDictionaryComponent = ( props ) => {

    let {

    } = props;


    return (
        <AdminPageContainer>
            AdminPageEditDictionary

        </AdminPageContainer>
    )

};


export function AdminPageEditDictionary( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageEditDictionaryComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
