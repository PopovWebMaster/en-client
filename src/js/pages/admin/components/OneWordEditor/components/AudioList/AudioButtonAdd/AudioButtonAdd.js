
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AudioButtonAdd.scss';

// import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js';
import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';

import { selectorData as languageSlice } from './../../../../../../../redux/languageSlice.js';


import { send_request_to_server } from './../../../../../../../helpers/send_request_to_server.js';
import { set_word_list_to_store } from './../../../../../../../helpers/set_word_list_to_store.js';
import { AUDIO_FORMATS } from './../../../../../../../config/audio.js';



const AudioButtonAddComponent = ( props ) => {

    let {
        wordId,

        languageKeyName,
        currentLessonId,

    } = props;


    let inpRef = useRef();


    const clickAdd = () => {

        let accept = AUDIO_FORMATS;
        let input = inpRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };

    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;

        async function audioToBase64(audioFile) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onerror = reject;
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(audioFile);
            });
        }

        let base64List = [];
        for( let i = 0; i < files.length; i++ ){
            
            audioToBase64( files[i] ).then( ( result ) => {
                let name = files[ i ].name;
                base64List.push( {
                    name: name,
                    base64: result
                } );

                if( i + 1 === files.length  ){


                    send_request_to_server({
                        route: 'admin/add-audio-files-to-word',
                        data: {
                            keyName: languageKeyName,
                            lessonId: currentLessonId,
                            foreignWordId: wordId,

                            files: base64List,

                        },
                        successCallback: ( resp ) => {
                            console.dir( 'resp' );
                            console.dir( resp );

                            if( resp.ok ){
                                set_word_list_to_store( resp.wordList, [ 'audio' ] );
                            };
                        },
                    });

                }
            })

        }


    }



    return (
        <div 
            className = 'OFW_AudioList_add'
            onClick = { clickAdd }
        >
            <span className = 'icon-plus'></span>

            <input 
                type =          'file' 
                ref =           { inpRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { true }
            />
        </div>
    )

};


export function AudioButtonAdd( props ){

    // const words = useSelector( wordsSlice );
    const language = useSelector( languageSlice );
    const lessons = useSelector( lessonsSlice );


    // const dispatch = useDispatch();

    return (
        <AudioButtonAddComponent
            { ...props }
            // wordListById = { words.wordListById }
            languageKeyName = { language.languageKeyName }
            currentLessonId = { lessons.currentLessonId }


            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
