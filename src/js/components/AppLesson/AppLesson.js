
import React, { useRef, useState, useEffect }   from "react";

import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppLesson.scss';

import { AppShowAnimationContainer } from './../AppShowAnimationContainer/AppShowAnimationContainer.js';

const AppLessonComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
    } = props;

    // let [ isOpen, setIsOpen ] = useState( false );


    // useEffect( () => {
    //     let appPlace = document.getElementById( 'appPlace' );
    //     if( showStatus ){
    //         if( appPlace ){
    //             appPlace.style.width = '100%';
    //             appPlace.style.height = '100%';
    //         };

    //         let buttonStartApp = document.getElementById( 'buttonStartApp' );
    //         buttonStartApp.onclick = null

    //     }else{

    //         let buttonStartApp = document.getElementById( 'buttonStartApp' );
    //         buttonStartApp.onclick = btnclick;




    //         let timerId = setTimeout( () => {
    //             if( appPlace ){
    //                 appPlace.style.width = '0%';
    //                 appPlace.style.height = '0%';
    //             };
    //             clearTimeout( timerId );
    //         }, 200 )
    //     };




    // }, [ showStatus ] );

    //  const btnclick = () => {

    //     let elem = document.getElementById( 'textPlace' );
    //     elem.classList.add( 'textPlaceHide' );
    //     elem.classList.remove( 'textPlaceShow' );
    //     setShowStatus( true );
    // }

    // const click = () => {
    //     let elem = document.getElementById( 'textPlace' );
    //     elem.classList.remove( 'textPlaceHide' );
    //     elem.classList.add( 'textPlaceShow' );


        
    //     setShowStatus( false );
    // }


    return (
        // <div id = 'appLesson' className = { showStatus? 'appPlaceShow': 'appPlaceHide' } >
          
        // </div>

        <AppShowAnimationContainer>
AppLesson
        </AppShowAnimationContainer>

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
