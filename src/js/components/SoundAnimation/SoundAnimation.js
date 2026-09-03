// SoundAnimation


import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SoundAnimation.scss';

// import { selectorData as languageSlice } from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


const SoundAnimationComponent = ( props ) => {

    let {
        children,
        runAnimation,
        setRunAnimation,

    } = props;


    const click = () => {
        setRunAnimation( true );
        let temerId = setTimeout( () => {
            setRunAnimation( false );
            clearTimeout( temerId );
        }, 2000 );
        

    };
// icon-volume
    return (

        <div
            className = 'soundAnimation'
            onClick = { click }
        >

            <div className = 'SA_soundWrap'>
                <div className = 'SA_soundVol'>
                    {/* <span className = { `icon-volume icon ${runAnimation? 'SA_sound_amin': ''}`}></span> */}
                    <div className = 'SA_soundVol_img_group'>
                        <div className = ' SA_soundVol_img SA_soundVol_img_1'></div>
                        <div className = ' SA_soundVol_img SA_soundVol_img_2'></div>
                        <div className = ' SA_soundVol_img SA_soundVol_img_3'></div>
                        <div className = ' SA_soundVol_img SA_soundVol_img_4'></div>



                    </div>
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
