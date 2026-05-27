
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_Transcription.scss';

import { selectorData as wordEditSlice, setTranscription } from './../../../../../../../../redux/admin/wordEditSlice.js';

// import { OpeningContainer } from './../../../../../../components/OpeningContainer/OpeningContainer.js'

import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { MAX_LENGTH } from './../../../../../../../../config/words.js';


const AWC_TranscriptionComponent = ( props ) => {

    let {
        transcription,
        setTranscription,
        isOpen,

    } = props;

    let [ errorText, setErrorText ] = useState( '' );

    const setValue = ( val ) => {

        if( val.length > 5 ){

            setErrorText( 'Здесь какой то очень очень длинный текст, который блядь обязательно надо написать именно такоим пиздец каким длинным Здесь какой то очень очень длинный текст, который блядь обязательно надо написать именно такоим пиздец каким длинным' );

        }else{
            setErrorText( '' );
        }
            setTranscription( val );
        

    };




    return (
        <div className = 'AWC_Transcription'>

            <OC_Input 
                title =         'Транскрипция'
                value =         { transcription }
                setValue =      { setValue }

                isRequired =    { true }
                max = { MAX_LENGTH.TRANSCRIPTION }

                errorText = { errorText }
                setErrorText = { setErrorText }
            />
            

        </div>
    )

};


export function AWC_Transcription ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AWC_TranscriptionComponent
            { ...props }
            transcription = { wordEdit.transcription }
            setTranscription = { ( val ) => { dispatch( setTranscription( val ) ) } }

        />
    );


}
