
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonPageApp.scss';

import { selectorData as appControlSlise, setShowStatus } from "../../../../redux/appControlSlise.js";

import { PageContainer } from './../../../../components/PageContainer/PageContainer.js';

import { ButtonStartApp } from './../../../../components/ButtonStartApp/ButtonStartApp.js';
import { WordsListAsText } from './../../../../components/WordsListAsText/WordsListAsText.js';

import { AppLesson } from './../../../../components/AppLesson/AppLesson.js';
 

const LessonPageAppComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
        store,
    } = props;




    return (
        <PageContainer>
            <div className = 'lessonPage' id = 'textPlace'>
                <p className = 'text'>Здесь вы можете изучать самостоятельно английские слова без посторонней помощи, пополнить свой словарный запас, подтянуть свой английских до любого уровня. Наше приложения создано специально для этого.</p> 
                <p className = 'text'>Вам не нужен репетитор, вам нужно лишь свободное время и немного усилий для того, чтоб сформировать привычку регулярно заниматься. Остальное мы уже сделали за вас.</p> 
                <p className = 'text'>Весь процесс обучения разбит на уроки. Все уроки выстроены по порядку от простого к сложному. Каждый урок – это набор слов и выражений который необходимо выучить. Не приступайте к следующему уроку пока не освоите предыдущий.</p>
                
                <p className = 'text_before_button_start'>Прежде, чем начать тренировку памяти, пожалуйста, вычитайте каждое иностранное слово! Обязательно произносите вслух, всё, что представлено в уроке, более одного раза. Здесь ваша задача запомнить именно звучание, а не перевод слов на русский. Значение всех слов урока вы легко освоите на тренинге.</p>
                
                <ButtonStartApp
                    // title = 'Начать обучение'
                />

                <WordsListAsText />
                
            </div>

            <div id = 'appPlace'>
                <AppLesson store = { store }/>
            </div>
        </PageContainer>

    )

};


export function LessonPageApp( props ){

    const appControl = useSelector( appControlSlise );
    // const company = useSelector( companySlice );
    const dispatch = useDispatch();

    return (
        <LessonPageAppComponent
            { ...props }
            showStatus = { appControl.showStatus }

            setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
