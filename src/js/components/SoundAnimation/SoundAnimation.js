
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SoundAnimation.scss';

// import { selectorData as languageSlice } from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { SpeakerAnimation } from './SpeakerAnimation/SpeakerAnimation.js';


const SoundAnimationComponent = ( props ) => {

    let {
        children,
        runAnimation,
        clickHandler,

    } = props;


    return (

        <div
            className = { `soundAnimation ${runAnimation? 'soundAnimation_anim': ''}` }
            onClick = { clickHandler }
        >

            <div className = 'SA_soundWrap'>
                <div className = 'SA_soundVol'>
                    <SpeakerAnimation runAnimation = { runAnimation }/>
                </div>
                <div className = 'SA_soundReplay'>
                    <span className = 'icon icon-arrows-cw'></span>
                    <span className = 'text'>Повторить</span>


                </div>
            </div>

            <div className = 'SA_childrenWrap'>
                { children }
            </div>

        </div>


    )

};


export function SoundAnimation( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <SoundAnimationComponent
            { ...props }
            // languageAlias = { language.languageAlias }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
