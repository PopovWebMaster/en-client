
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
    } = props;

    // let elem = document.getElementById( "words_json" );
    // console.dir( JSON.parse( elem.innerText ) );

    // const click = () => {

    //     let elem = document.getElementById( 'textPlace' );
    //     elem.classList.add( 'textPlaceHide' );
    //     elem.classList.remove( 'textPlaceShow' );
    //     setShowStatus( true );

    //     // elem.style.display = 'none';
    // }




    return (
        <PageContainer>
            <div className = 'lessonPage' id = 'textPlace'>
                <p className = 'text'>Здесь вы можете изучать самостоятельно английские слова без посторонней помощи, пополнить свой словарный запас, подтянуть свой английских до любого уровня. Наше приложения создано специально для этого.</p> 
                <p className = 'text'>Вам не нужен репетитор, вам нужно лишь свободное время и немного усилий для того, чтоб сформировать привычку регулярно заниматься. Остальное мы уже сделали за вас.</p> 
                <p className = 'text'>Весь процесс обучения разбит на уроки. Все уроки выстроены по порядку от простого к сложному. Каждый урок – это набор слов и выражений который необходимо выучить. Не приступайте к следующему уроку пока не освоите предыдущий.</p>
                

                <ButtonStartApp
                    // click = { click }
                    title = 'Начать обучение'
                />

                <div id = 'wordsListAsText'>
                    <WordsListAsText />
                </div>
                


            </div>

            <div id = 'appPlace'>
                <AppLesson />
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
