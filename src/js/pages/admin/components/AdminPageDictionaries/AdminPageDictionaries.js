
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageDictionaries.scss';

import { useNavigate } from "react-router-dom";
import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { ADMIN_ROUTES } from './../../config/routes.js';


const AdminPageDictionariesComponent = ( props ) => {

    let {

    } = props;

    let navigate = useNavigate();

    const click = () => {
        navigate( ADMIN_ROUTES.DICTIONARIES.ROUTE + '/11' );

    }


    return (
        <AdminPageContainer>
            AdminPageDictionaries
            <p>
                <span onClick={ click }>click</span>
            </p>

            

        </AdminPageContainer>
    )

};


export function AdminPageDictionaries( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageDictionariesComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
