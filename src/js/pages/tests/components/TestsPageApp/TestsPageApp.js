
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TestsPageApp.scss';

// import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';
import { TestsListOfAllLanguages } from './../../../../components/TestsListOfAllLanguages/TestsListOfAllLanguages.js';
 

const TestsPageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;




    return (
        <PageContainer>
            <div className = 'testsPage'>

                <p className = 'text'>Здесь вы можете изучать самостоятельно английские слова без посторонней помощи, пополнить свой словарный запас, подтянуть свой английских до любого уровня. Наше приложения создано специально для этого.</p> 
                <p className = 'text'>Вам не нужен репетитор, вам нужно лишь свободное время и немного усилий для того, чтоб сформировать привычку регулярно заниматься. Остальное мы уже сделали за вас.</p> 

                <TestsListOfAllLanguages />
                
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
