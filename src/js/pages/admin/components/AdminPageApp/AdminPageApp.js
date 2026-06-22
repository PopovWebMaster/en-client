
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageApp.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { AdminMainPage } from './../AdminMainPage/AdminMainPage.js';
import { AdminPageIcons } from './../AdminPageIcons/AdminPageIcons.js';
import { AdminPageWords } from './../AdminPageWords/AdminPageWords.js';
// import { AdminPageDictionaries } from './../AdminPageDictionaries/AdminPageDictionaries.js';
// import { AdminPageNewDictionary } from './../AdminPageNewDictionary/AdminPageNewDictionary.js';
// import { AdminPageEditDictionary } from './../AdminPageEditDictionary/AdminPageEditDictionary.js';

import { AdminPageLessons } from './../AdminPageLessons/AdminPageLessons.js';
import { AdminPageLessonEditor } from './../AdminPageLessonEditor/AdminPageLessonEditor.js';

import { ADMIN_ROUTES } from './../../config/routes.js';



const AdminPageAppComponent = ( props ) => {

    let {

    } = props;

    let navigate = useNavigate();

    useEffect(() => {

        if( IS_DEVELOPMENT ){
            
            // navigate( `/admin` );
            // navigate( ADMIN_ROUTES.MAIN.ROUTE );
            // navigate( ADMIN_ROUTES.WORDS.ROUTE );
            navigate( ADMIN_ROUTES.LESSONS.ROUTE );



        }else{
        };

    }, [])



    return (


            <Routes>
                <Route path = { ADMIN_ROUTES.MAIN.ROUTE }                   element = { <AdminMainPage /> } />
                <Route path = { ADMIN_ROUTES.WORDS.ROUTE }                  element = { <AdminPageWords /> } />
                <Route path = { ADMIN_ROUTES.LESSONS.ROUTE }                element = { <AdminPageLessons /> } />
                <Route path = { ADMIN_ROUTES.LESSONS.ROUTE + '/:id' }       element = { <AdminPageLessonEditor /> } />



                
                {/* <Route path = { ADMIN_ROUTES.DICTIONARIES.ROUTE }           element = { <AdminPageDictionaries /> } />
                <Route path = { ADMIN_ROUTES.DICTIONARIES.ROUTE + '/:id' }  element = { <AdminPageEditDictionary /> } />
                <Route path = { ADMIN_ROUTES.ADD_DICTIONARY.ROUTE }         element = { <AdminPageNewDictionary /> } /> */}
                <Route path = { ADMIN_ROUTES.ICONS.ROUTE }                  element = { <AdminPageIcons /> } />
                


            </Routes>




    )

};


export function AdminPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageAppComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
