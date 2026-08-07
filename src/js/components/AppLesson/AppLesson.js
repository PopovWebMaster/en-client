
import React, { useRef, useState, useEffect }   from "react";

import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppLesson.scss';

const AppLessonComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    useEffect( () => {
        let appPlace = document.getElementById( 'appPlace' );
        if( showStatus ){
            if( appPlace ){
                appPlace.style.width = '100%';
                appPlace.style.height = '100%';
            };

            let buttonStartApp = document.getElementById( 'buttonStartApp' );
            buttonStartApp.onclick = null

        }else{

            let buttonStartApp = document.getElementById( 'buttonStartApp' );
            // console.dir( buttonStartApp );
            buttonStartApp.onclick = btnclick;




            let timerId = setTimeout( () => {
                if( appPlace ){
                    appPlace.style.width = '0%';
                    appPlace.style.height = '0%';
                };
                clearTimeout( timerId );
            }, 200 )
        };




    }, [ showStatus ] );

     const btnclick = () => {
        console.log( 'open' );

        let elem = document.getElementById( 'textPlace' );
        elem.classList.add( 'textPlaceHide' );
        elem.classList.remove( 'textPlaceShow' );
        setShowStatus( true );
    }

    const click = () => {
        let elem = document.getElementById( 'textPlace' );
        elem.classList.remove( 'textPlaceHide' );
        elem.classList.add( 'textPlaceShow' );


        
        setShowStatus( false );
    }


    return (
        <div id = 'appLesson' className = { showStatus? 'appPlaceShow': 'appPlaceHide' } onClick = { click } >
           
           <p className = 'text'>Свойство transform в CSS открывает множество возможностей для манипуляций с элементами на веб-странице. С его помощью можно поворачивать, изменять масштаб, искажать и перемещать элементы, создавая удивительные визуальные эффекты. В этой статье мы рассмотрим все основные аспекты использования свойства transform и приведем примеры для каждого из них.</p> 
                <p className = 'text'>Вам не нужен репетитор, вам нужно лишь свободное время и немного усилий для того, чтоб сформировать привычку регулярно заниматься. Остальное мы уже сделали за вас.</p> 
                <p className = 'text'>Весь процесс обучения разбит на уроки. Все уроки выстроены по порядку от простого к сложному. Каждый урок – это набор слов и выражений который необходимо выучить. Не приступайте к следующему уроку пока не освоите предыдущий.</p>
                
        </div>

    )

};


export function AppLesson( props ){

    const appControl = useSelector( appControlSlise );
    const dispatch = useDispatch();

    return (
        <AppLessonComponent
            { ...props }
            showStatus = { appControl.showStatus }
            
            setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
