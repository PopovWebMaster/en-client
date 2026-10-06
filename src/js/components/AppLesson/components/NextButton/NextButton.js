
import React, { useEffect, useRef } from "react";

// import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './NextButton.scss';


const NextButtonComponent = ( props ) => {

    let {
        isActive = true,

        clickNext = () => {},

    } = props;


    let greenRef = useRef();


    useEffect( () => {
        let downCount = 0;

        document.onkeydown = ( e ) => {

            if( isActive === true ){
                if( downCount === 0 ){
                    if( e.keyCode === 39 ){ // right
                        greenRef.current.classList.add( 'AL_NextButton_btn_hover' );
                        clickNext( e );
                    };
                };
                downCount++;
            };
            
        };

        document.onkeyup = ( e ) => {
            if( e.keyCode === 39 ){
                greenRef.current.classList.remove( 'AL_NextButton_btn_hover' );
            };
            downCount = 0;
        };

        return () => {
            document.onkeydown = null;
            document.onkeyup = null;

        }
    }, [ isActive ] );



    

    return (

        <div className = 'AL_NextButton' >

            <div 
                className = 'AL_NextButton_btn' 
                onClick = { clickNext }
                ref = { greenRef }
            >
                
                <span className = 'AL_NextButton_btn_text'>Далее</span>
                <span className = 'AL_NextButton_btn_icon icon-right-open'></span>
            </div>

            

        </div>

    )

};


export function NextButton( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <NextButtonComponent
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
