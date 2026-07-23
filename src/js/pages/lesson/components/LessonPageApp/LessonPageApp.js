
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonPageApp.scss';

// import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
 

const LessonPageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;




    return (
        <PageContainer>
            <div className = 'lessonPage'>
LessonPageApp
                
            </div>
        </PageContainer>

    )

};


export function LessonPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LessonPageAppComponent
            { ...props }
            // isAuth = { userInfo.isAuth }
            // user_position = { userInfo.user_position }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
