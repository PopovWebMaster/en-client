// SpeakerAnimation

// SoundAnimation


import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SpeakerAnimation.scss';

// import { selectorData as languageSlice } from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


const SpeakerAnimationComponent = ( props ) => {

    let {
        runAnimation,

    } = props;



    return (

        <div className = 'SA_SpeakerAnimation'>
            <div className = 'SA_SpeakerAnimation_grop'>

                <div className = { `SA_SA_layer SA_SA_img_1 ${runAnimation? 'SA_SA_img_1_anim': ''}` }></div>
                <div className = { `SA_SA_layer SA_SA_img_2 ${runAnimation? 'SA_SA_img_2_anim': ''}` }></div>
                <div className = { `SA_SA_layer SA_SA_img_3 ${runAnimation? 'SA_SA_img_3_anim': ''}` }></div>
                <div className = { `SA_SA_layer SA_SA_img_4 ${runAnimation? 'SA_SA_img_4_anim': ''}` }></div>

                <div className = { `SA_SA_layer SA_SA_filter ${runAnimation? 'SA_SA_filter_anim': ''}` }></div>
                
                <div className = { `SA_SA_circle_1 ${runAnimation? 'SA_SA_circle_1_anim': ''}` }></div>
                <div className = { `SA_SA_circle_2 ${runAnimation? 'SA_SA_circle_2_anim': ''}` }></div>

            </div>
            
            
        </div>




    )

};


export function SpeakerAnimation( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <SpeakerAnimationComponent
            { ...props }
            // languageAlias = { language.languageAlias }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
