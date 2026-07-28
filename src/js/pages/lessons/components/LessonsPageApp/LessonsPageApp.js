
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonsPageApp.scss';

// import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

 
const LessonsPageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;

    
    const click = () => {




    }


    return (
        <PageContainer>
            <div className = 'lessonsPage'>

                <h2 onClick = { click }>click</h2>

                
            </div>
        </PageContainer>

    )

};


export function LessonsPageApp( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <LessonsPageAppComponent
            { ...props }
            // isAuth = { userInfo.isAuth }
            // user_position = { userInfo.user_position }

            // company = { company }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
