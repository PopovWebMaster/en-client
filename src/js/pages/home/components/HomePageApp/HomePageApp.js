
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './HomePageApp.scss';

import { selectorData as userInfoSlice } from "../../../../redux/userInfoSlice.js";

// import { send_request_to_server }   from './../../../../helpers/send_request_to_server.js';
// import { BackgroundContainer }      from './../BackgroundContainer/BackgroundContainer.js';
// import { BodyContainer } from './../BodyContainer/BodyContainer.js';

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { LessonsListOfAllLanguages } from './../../../../components/LessonsListOfAllLanguages/LessonsListOfAllLanguages.js';
 

const HomePageAppComponent = ( props ) => {

    let {
        isAuth,
        user_position,
    } = props;




    return (
        <PageContainer>
            <div className = 'homePage'>

                <p className = 'text'>Здесь вы можете изучать самостоятельно английские слова без посторонней помощи, пополнить свой словарный запас, подтянуть свой английских до любого уровня. Наше приложения создано специально для этого.</p> 
                <p className = 'text'>Вам не нужен репетитор, вам нужно лишь свободное время и немного усилий для того, чтоб сформировать привычку регулярно заниматься. Остальное мы уже сделали за вас.</p> 
                <p className = 'text'>Весь процесс обучения разбит на уроки. Все уроки выстроены по порядку от простого к сложному. Каждый урок – это набор слов и выражений который необходимо выучить. Не приступайте к следующему уроку пока не освоите предыдущий.</p> 
                <p className = 'text'>А теперь главное!</p> 
                <p className = 'text'>Мы не просто собрали для вас коллекцию английских слов и разбили их на части. Мы написали приложение, с помощью которого вы можете проработать эту коллекцию слов разными способами, а именно: наработать практику чтения, произношения, восприятия английской речи на слух и практику вспоминать нужное слово.</p> 
                <p className = 'text'>Как это работает?</p> 
                <p className = 'text'>Вы выбираете нужный вам урок из списка и, пошагово, прорабатываете его от простого к сложному.</p> 
                <p className = 'text'>Первое, с чего нужно начать, - это вкладка «Чтение», здесь нужно вычитать всё, что предложено. Кликом на англ. слово вы сможете прослушать его звучание. Даже, если вы не знаете английских правил чтения, просто слушайте, что говорит носитель и используйте транскрипцию. Здесь не нужно ничего заучивать, главное наработать произношение вслух. На данном этапе ваша задача научиться безошибочно читать все слова и выражения из списка.</p> 
                <p className = 'text'>Далее вкладка «Зубрёжка». Задача на этом этапе – постараться выучить как можно больше, как получится. К совершенству стремиться не надо, этого вы добьётесь на этапе тренинга. Там система будет спрашивать вас снова и снова, прорабатывая ваши слабые места до того, как вы их окончательно не запомните. А в «Зубрёжке» просто постарайтесь запомнить, как можно больше. Даже если вы пропустите этап зубрения, вы всё равно всё выучите на тренинге, только с большими затратами сил и времени.</p> 
                <p className = 'text'>Ну, и конечно же тесты. Проходя тесты, вы получите реальную картину вашего прогресса. Тесты нужны для оценки полученных знаний, и для того, чтоб определить ваш реальный словарный запас на данном этапе обучения.</p> 
                <p className = 'text'>Вот и вся сложность, друзья, желаем вам успехов в учёбе!</p> 

                <LessonsListOfAllLanguages />


                

            </div>
        </PageContainer>

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
