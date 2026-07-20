
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './HomePageApp.scss';

import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';
 

const HomePageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;




    return (
        <div className = 'homePageApp'>


        </div>
    )

};


export function HomePageApp( props ){

    const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <HomePageAppComponent
            { ...props }
            isAuth = { userInfo.isAuth }
            user_position = { userInfo.user_position }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
