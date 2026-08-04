
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TestPageApp.scss';

// import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';


const TestPageAppComponent = ( props ) => {

    let {

    } = props;




    return (
        <PageContainer>
            <div className = 'testPage'>

                TestPageApp
            </div>
        </PageContainer>

    )

};


export function TestPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <TestPageAppComponent
            { ...props }
            // isAuth = { userInfo.isAuth }
            // user_position = { userInfo.user_position }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
