
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';

import './WordsListAsText.scss';
import { app_audio_play_random } from './../../helpers/app_audio_play_random.js';

const WordsListAsTextComponent = ( props ) => {

    let {
        
        appWordsList
    } = props;

    console.dir( 'appWordsList' );
    console.dir( appWordsList );




    const create = ( arr  ) => {

        let  span = arr.map( ( item, index ) => {
            let {
                audio,
                foreign,
                id,
                keyName,
                ru,
                transcription,
            } = item;

            return (
                <span 
                    key = { index }
                    onClick = { () => { app_audio_play_random( id ) } }
                    title = { ru }
                >{ foreign },</span>
            );

        } );

        return span;

    };






    return (
        <div className = 'wordsListAsText'>
            
            { create( appWordsList ) }
        </div>

    )

};


export function WordsListAsText( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListAsTextComponent
            { ...props }
            appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
