
import React, { useEffect, useRef } from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AnswerButtons.scss';


const AnswerButtonsComponent = ( props ) => {

    let {
        isActive = true,
        clickSound = () => {},
        clickResponse = () => {},
        clickResponseUp = () => {},

        clickSuccess = () => {},
        clickNext = () => {},

        // responseContent = 'speaker', 
        response = false,



    } = props;

    let blueSoundRef = useRef();
    let blueResponseRef = useRef();

    let greenRef = useRef();
    let grayRef = useRef();



    useEffect( () => {
        let downCount = 0;

        document.onkeydown = ( e ) => {

            if( isActive === true ){
                if( downCount === 0 ){
                    if( e.keyCode === 37 ){ // left
                        blueResponseRef.current.classList.add( 'AL_AB_btn_blue_hover' );
                        clickResponse( e );
                    }else if( e.keyCode === 38 ){ //up
                        blueSoundRef.current.classList.add( 'AL_AB_btn_blue_hover' );
                        clickSound( e );
                    }else if( e.keyCode === 39 ){ // right
                        grayRef.current.classList.add( 'AL_AB_btn_grey_hover' );
                        clickNext( e );
                    }else if( e.keyCode === 40 ){ // down
                        greenRef.current.classList.add( 'AL_AB_btn_green_hover' );
                        clickSuccess( e );
                    };
                    
                };
                downCount++;
            };
            
        };

        document.onkeyup = ( e ) => {
            
            if( e.keyCode === 37 ){
                blueResponseRef.current.classList.remove( 'AL_AB_btn_blue_hover' );
                clickResponseUp( e );
            }else if( e.keyCode === 38 ){
                blueSoundRef.current.classList.remove( 'AL_AB_btn_blue_hover' );
            }else if( e.keyCode === 39 ){
                grayRef.current.classList.remove( 'AL_AB_btn_grey_hover' );
            }else if( e.keyCode === 40 ){
                greenRef.current.classList.remove( 'AL_AB_btn_green_hover' );
            };
            downCount = 0;
        };

        return () => {
            document.onkeydown = null;
            document.onkeyup = null;

        }
    }, [ isActive ] );



    

    return (

        <div className = 'AL_AnswerButtons' >

            <div className = 'AL_AB_wrap'>
                <div className = 'AL_AB_wrap_left'>

                    {/* <div
                        className = 'AL_AB_btn AL_AB_btn_blue'
                        onClick = { clickResponse }
                        ref = { blueRef }
                    >
                        <span className = { `AL_AB_btn_icon ${responseContent === 'speaker'? 'icon-volume-down': '' }` }></span>
                        <span className = 'AL_AB_btn_text'>{ responseContent === 'speaker'? '': responseContent }</span>
                        <span className = 'AL_AB_btn_icon_key icon-left'></span>
                    </div> */}

                    <div
                        className = 'AL_AB_btn AL_AB_btn_blue'
                        onClick = { clickSound }
                        ref = { blueSoundRef }
                    >
                        <span className = 'AL_AB_btn_icon icon-volume-down'></span>
                        <span className = 'AL_AB_btn_text'></span>
                        <span className = 'AL_AB_btn_icon_key icon-up'></span>
                    </div>

                    { response === true? (
                        <div
                            className = 'AL_AB_btn AL_AB_btn_blue'
                            onMouseDown = { clickResponse }
                            onMouseUp = { clickResponseUp }
                            ref = { blueResponseRef }
                        >
                            <span className = 'AL_AB_btn_icon' ></span>
                            <span className = 'AL_AB_btn_text'>Ответ</span>
                            <span className = 'AL_AB_btn_icon_key icon-left'></span>
                        </div>
                    ): '' }

                    

                </div>

                <div className = 'AL_AB_wrap_right'>

                    <div
                        className = 'AL_AB_btn AL_AB_btn_grey'
                        onClick = { clickNext }
                        ref = { grayRef }
                    >
                        <span className = 'AL_AB_btn_icon'></span>
                        <span className = 'AL_AB_btn_text'>Не помню</span>
                        <span className = 'AL_AB_btn_icon_key icon-right'></span>
                    </div>

                    <div 
                        className = 'AL_AB_btn AL_AB_btn_green' 
                        onClick = { clickSuccess }
                        ref = { greenRef }
                    >
                        <span className = 'AL_AB_btn_icon icon-thumbs-up'></span>
                        <span className = 'AL_AB_btn_text'>Отлично помню</span>
                        <span className = 'AL_AB_btn_icon_key icon-down'></span>
                    </div>

                    

                    
                </div>

                <div className = { `AL_AB_curtain ${isActive? '': 'AL_AB_curtain_hide'}` }></div>
            </div>

        </div>

    )

};


export function AnswerButtons( props ){

    // const appData = useSelector( appDataSlice );
    // const settings = useSelector( settingsSlice );

    // const dispatch = useDispatch();

    return (
        <AnswerButtonsComponent
            { ...props }
            // appMessage = { appData.appMessage }
            // currentStepNomber = { appData.currentStepNomber }


        />
    );


}
