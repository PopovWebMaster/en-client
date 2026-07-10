

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SFW_OneFreeWord.scss';

import { selectorData as lessonsSlice } from './../../../../../../../../../redux/admin/lessonsSlice.js';

import { audio_play } from './../../../../../../../../../helpers/audio_play.js';


const SFW_OneFreeWordComponent = ( props ) => {

    let {
        id,
        foreign,
        ru,
        transcription,
        audio,
        isSelected,

        toggleSelect,

    } = props;

    let [ lastAudioIndex, setLastAudioIndex ] = useState( 0 );

    const click = ( e ) => {
        if( e.target.className !== 'OLE_SFW_audio_btn' ){
            toggleSelect( id );
        };
    };

    const clickAudio = () => {
        audio_play( audio[ lastAudioIndex ] );
        if( audio[ lastAudioIndex + 1 ] ){
            setLastAudioIndex( lastAudioIndex + 1 );
        }else{
            setLastAudioIndex( 0 );
        };
    };


    return (
        <div
            className = { `OLE_SFW_OneFreeWord ${isSelected? 'isSelected': ''}` }
            onClick = { click }
        >
            <div className = 'OLE_SFW_chack'>
                { isSelected? <span className = 'icon-ok'></span>: '' }
            </div>

             <div className = 'OLE_SFW_audio'>
                { audio.length > 0? (
                    <span 
                        className = 'OLE_SFW_audio_btn'
                        onClick = { clickAudio }
                    >audio { `(${audio.length})` }</span>
                ): '' }
                
            </div>

            <div className = 'OLE_SFW_words'>

                <div className = 'OLE_SFW_words_1'>
                    <span className = 'OLE_SFW_words_foreign'>{ foreign }</span>
                    <span className = 'OLE_SFW_words_transcription'>{ transcription === ''? '': `[${transcription}]` }</span>
                </div>

                <div className = 'OLE_SFW_words_2'>
                    <span className = 'OLE_SFW_words_ru'>{ ru }</span>
                </div>
                
            </div>

           


        </div>

       
    )

};


export function SFW_OneFreeWord( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <SFW_OneFreeWordComponent
            { ...props }
            // currentPageTitle = { lessons.currentPageTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
