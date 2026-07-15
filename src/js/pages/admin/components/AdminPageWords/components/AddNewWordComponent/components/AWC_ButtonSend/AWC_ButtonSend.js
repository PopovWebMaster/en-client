
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_ButtonSend.scss';

import { selectorData as wordEditSlice, clearWordEdit } from './../../../../../../../../redux/admin/wordEditSlice.js';


import { OC_ButtonSend } from './../../../../../../../../components/OpeningContainer/OC_ButtonSend/OC_ButtonSend.js';

import { MAX_LENGTH } from './../../../../../../../../config/words.js';

import { get_is_ready_status } from './vendors/get_is_ready_status.js';
import { get_prepared_data } from './vendors/get_prepared_data.js';

import { set_word_list_to_store } from './../../../../../../../../helpers/set_word_list_to_store.js';

const AWC_ButtonSendComponent = ( props ) => {

    let {
        isOpen,
        files,
        word_foreign,

        // word_en,
        word_ru,
        transcription,
        clearWordEdit,

    } = props;

    let [ isReady, setIsReady ] = useState( true );
    let [ data, setData ] = useState({});

    useEffect( () => {

        if( isOpen ){

            let isReadyStatus = get_is_ready_status( {
                files,
                word_foreign,
                word_ru,
                transcription,
            } );

            setIsReady( isReadyStatus );

            let prepared_data = get_prepared_data({
                files,
                word_foreign,
                word_ru,
                transcription,
            });

            setData( prepared_data );

        }else{
            setData( {} );
            setIsReady( false );
        };

    }, [ 
        isOpen,
        files,
        word_foreign,
        word_ru,
        transcription,
    ] );


    

    const successCallback = ( resp ) => {
        console.dir( 'resp' );
        console.dir( resp );

        if( resp.ok ){
            set_word_list_to_store( resp.wordList );
            clearWordEdit();
        };


    };

    const errorCallback = ( resp ) => {

        console.dir( 'resp' );
        console.dir( resp );

    };

  


    return (
        <div className = 'AWC_ButtonSend'>

          
            <OC_ButtonSend
                isReady =           { isReady }
                route =             { 'admin/add-new-word' }
                data =              { data }
                successCallback =   { successCallback }
                errorCallback =     { errorCallback }
            />

        </div>
    )

};


export function AWC_ButtonSend ( props ){

    const wordEdit = useSelector( wordEditSlice );
    // const language = useSelector( languageSlice );


    
    const dispatch = useDispatch();

    return (
        <AWC_ButtonSendComponent
            { ...props }
            word_foreign = { wordEdit.word_foreign }
            word_ru = { wordEdit.word_ru }
            transcription = { wordEdit.transcription }
            files = { wordEdit.files }


            clearWordEdit = { ( val ) => { dispatch( clearWordEdit( val ) ) } }

        />
    );


}
