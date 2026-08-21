
import React, { useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AdminPageApp.scss';

import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { AdminMainPage }            from './../AdminMainPage/AdminMainPage.js';
import { AdminPageIcons }           from './../AdminPageIcons/AdminPageIcons.js';
import { AdminPageWords }           from './../AdminPageWords/AdminPageWords.js';
import { AdminPageLessons }         from './../AdminPageLessons/AdminPageLessons.js';
import { AdminPageLessonEditor }    from './../AdminPageLessonEditor/AdminPageLessonEditor.js';
import { AdminPageTests }           from './../AdminPageTests/AdminPageTests.js';
import { AdminPageOneTestEdit }     from './../AdminPageOneTestEdit/AdminPageOneTestEdit.js';
import { AdminPageSettings }        from './../AdminPageSettings/AdminPageSettings.js';




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
            // navigate( ADMIN_ROUTES.LESSONS.ROUTE );
            // navigate( ADMIN_ROUTES.MAIN.ROUTE );

            // navigate( ADMIN_ROUTES.TESTS.ROUTE );
            navigate( ADMIN_ROUTES.SETTINGS.ROUTE );







        }else{
        };

    }, [])



    return (


            <Routes>
                <Route path = { ADMIN_ROUTES.MAIN.ROUTE }                   element = { <AdminMainPage /> } />
                <Route path = { ADMIN_ROUTES.WORDS.ROUTE }                  element = { <AdminPageWords /> } />
                <Route path = { ADMIN_ROUTES.LESSONS.ROUTE }                element = { <AdminPageLessons /> } />
                <Route path = { ADMIN_ROUTES.LESSONS.ROUTE + '/:id' }       element = { <AdminPageLessonEditor /> } />

                <Route path = { ADMIN_ROUTES.TESTS.ROUTE }                  element = { <AdminPageTests /> } />
                <Route path = { ADMIN_ROUTES.TESTS.ROUTE + '/:id' }         element = { <AdminPageOneTestEdit /> } />
                <Route path = { ADMIN_ROUTES.SETTINGS.ROUTE }               element = { <AdminPageSettings /> } />


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
