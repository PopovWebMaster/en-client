
import React from "react";

import { selectorData as appDataSlice } from './../../../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AnswerButtons.scss';


const AnswerButtonsComponent = ( props ) => {

    let {
        clickResponse = () => {},
        clickSuccess = () => {},
        clickNext = () => {},

        responseContent = 'speaker', 



    } = props;

    

    return (

        <div className = 'AL_AnswerButtons' >

            <div className = 'AL_AB_wrap'>
                <div className = 'AL_AB_wrap_left'>

                    <div className = 'AL_AB_btn AL_AB_btn_blue' onClick = { clickResponse }>
                        <span className = { `AL_AB_btn_icon ${responseContent === 'speaker'? 'icon-volume-down': '' }` }></span>
                        <span className = 'AL_AB_btn_text'>{ responseContent === 'speaker'? '': responseContent }</span>
                        <span className = 'AL_AB_btn_icon_key icon-left'></span>
                    </div>


                </div>

                <div className = 'AL_AB_wrap_right'>
                    <div className = 'AL_AB_btn AL_AB_btn_green' onClick = { clickSuccess }>
                        <span className = 'AL_AB_btn_icon icon-thumbs-up'></span>
                        <span className = 'AL_AB_btn_text'>Отлично помню</span>
                        <span className = 'AL_AB_btn_icon_key icon-up'></span>
                    </div>

                    <div className = 'AL_AB_btn AL_AB_btn_grey' onClick = { clickNext }>
                        <span className = 'AL_AB_btn_icon'></span>
                        <span className = 'AL_AB_btn_text'>Не помню</span>
                        <span className = 'AL_AB_btn_icon_key icon-right'></span>
                    </div>

                    
                </div>
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
