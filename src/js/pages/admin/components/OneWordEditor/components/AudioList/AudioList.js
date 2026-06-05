
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
            // console.dir( 'wordListById[ wordId ]' );
            // console.dir( wordListById[ wordId ] );
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
                    set_word_list_to_store( resp.wordList );
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

                    console.dir( 'base64List' );
                    console.dir( base64List );

                    send_request_to_server({
                        route: 'admin/add-audio-files-to-word',
                        data: {
                            keyName: languageKeyName,
                            lessonId: currentLessonId,
                            foreignWordId: wordId,
                            // audioFileName: fileName,

                            files: base64List,

                        },
                        successCallback: ( resp ) => {
                            console.dir( 'resp' );
                            console.dir( resp );

                            if( resp.ok ){
                                set_word_list_to_store( resp.wordList );
                            };
                        },
                    });

                }
            })

        }


    }



    return (
        <div className = 'OFW_AudioList'>
            <h4>audio</h4>
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
