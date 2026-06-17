
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageNewDictionary.scss';


import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';



const AdminPageNewDictionaryComponent = ( props ) => {

    let {

    } = props;


    return (
        <AdminPageContainer>
            AdminPageNewDictionary

        </AdminPageContainer>
    )

};


export function AdminPageNewDictionary( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageNewDictionaryComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
