
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_ButtonSend.scss';

import { selectorData as wordEditSlice } from './../../../../../../../redux/admin/wordEditSlice.js';

import { OC_ButtonSend } from './../../../../../../../components/OpeningContainer/OC_ButtonSend/OC_ButtonSend.js';

import { MAX_LENGTH } from './../../../../../../../config/words.js';

const AWC_ButtonSendComponent = ( props ) => {

    let {
        isOpen,
        files,

        word_en,
        word_ru,
        transcription,

    } = props;

    let [ isReady, setIsReady ] = useState( true );
    let [ data, setData ] = useState({});

    useEffect( () => {

        if( isOpen ){

            setData( {
                files,
                word_en,
                word_ru,
                transcription,
            } );

        }else{
            setData( {} );
        };

    }, [ 
        isOpen,
        files,
        word_en,
        word_ru,
        transcription,
    ] );


    

    const successCallback = ( resp ) => {

        console.dir( 'resp' );
        console.dir( resp );

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
    const dispatch = useDispatch();

    return (
        <AWC_ButtonSendComponent
            { ...props }
            word_en = { wordEdit.word_en }
            word_ru = { wordEdit.word_ru }
            transcription = { wordEdit.transcription }


            // setFileList = { ( val ) => { dispatch( setFileList( val ) ) } }

        />
    );


}
