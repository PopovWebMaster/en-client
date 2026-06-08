
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AudioList.scss';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';
import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';


import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_word_list_to_store } from './../../../../../../helpers/set_word_list_to_store.js';
import { AUDIO_FORMATS } from './../../../../../../config/audio.js';

import { AudioButtonAdd } from './AudioButtonAdd/AudioButtonAdd.js';



const AudioListComponent = ( props ) => {

    let {
        wordId,

        wordListById,
        languageKeyName,
        currentLessonId,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( wordListById[ wordId ] ){
            let arr = [];
            let { audio } = wordListById[ wordId ];
            for( let i = 0; i < audio.length; i++ ){
                let { base64, name } = audio[ i ];
                arr.push( { base64, name } );

            };

            setList( arr );

        };

    }, [ wordListById, wordId ] );

    const click = ( base64 ) => {
        if( base64 ){
            const audio = new Audio();
            audio.src = base64;
            audio.play();
        };

    }

    const remove = ( fileName ) => {

        send_request_to_server({
            route: 'admin/remove-audio-file',
            data: {
                keyName: languageKeyName,
                lessonId: currentLessonId,
                foreignWordId: wordId,
                audioFileName: fileName,

            },
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                if( resp.ok ){
                    set_word_list_to_store( resp.wordList, [ 'audio' ] );
                };
            },
        }, true );

    };


    const create = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            let { base64, name } = item;
            return (
                <div 
                    className = 'OFW_AudioList_item'
                    key = { index }
                    
                >
                    <span
                        className = 'OFW_AudioList_fileName'
                        onClick = { () => { click( base64 ) } }
                    >{ name }</span>

                    <span
                        className = 'OFW_AudioList_cancel icon-cancel-2'
                        onClick = { () => { remove( name ) }  }
                    ></span>

                </div>
            );

        } );

        return span;

    };


    return (
        <div className = 'OFW_AudioList'>
            <h4>audio</h4>

            <AudioButtonAdd
                wordId = { wordId }
            />

            { create( list ) }

        </div>
    )

};


export function AudioList( props ){

    const words = useSelector( wordsSlice );
    const language = useSelector( languageSlice );
    const lessons = useSelector( lessonsSlice );


    


    
    // const dispatch = useDispatch();

    return (
        <AudioListComponent
            { ...props }
            wordListById = { words.wordListById }
            languageKeyName = { language.languageKeyName }
            currentLessonId = { lessons.currentLessonId }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
