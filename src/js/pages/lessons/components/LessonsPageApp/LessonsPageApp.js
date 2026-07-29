
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonsPageApp.scss';

// import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { LessonsListOfAllLanguages } from './../../../../components/LessonsListOfAllLanguages/LessonsListOfAllLanguages.js';

 
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

                <p className = 'text'>Здесь вы можете изучать самостоятельно английские слова без посторонней помощи, пополнить свой словарный запас, подтянуть свой английских до любого уровня. Наше приложения создано специально для этого.</p> 
                <p className = 'text'>Вам не нужен репетитор, вам нужно лишь свободное время и немного усилий для того, чтоб сформировать привычку регулярно заниматься. Остальное мы уже сделали за вас.</p> 

                <LessonsListOfAllLanguages />

                
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
