
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TestsPageApp.scss';

// import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
 

const TestsPageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;




    return (
        <PageContainer>
            <div className = 'testsPage'>
TestsPageApp
                
            </div>
        </PageContainer>

    )

};


export function TestsPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <TestsPageAppComponent
            { ...props }
            // isAuth = { userInfo.isAuth }
            // user_position = { userInfo.user_position }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
