
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordTranscription.scss';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';

import { WordInput } from './../WordInput/WordInput.js';
import { LANGUAGES } from './../../../../../../config/languages.js';

import { word_transcription_is_valid } from './../../../../../../helpers/word_transcription_is_valid.js';

import { set_word_list_value_into_store } from './../../../../../../helpers/set_word_list_value_into_store.js';

const WordTranscriptionComponent = ( props ) => {

    let {
        wordId,

        wordListById,

    } = props;

    let [ value, setValue ] = useState( '' );
    let [ valueOld, setValueOld ] = useState( '' );
    let [ errorText, setErrorText ] = useState( '' );

    useEffect( () => {
        if( wordListById[ wordId ] ){
            let { transcription } = wordListById[ wordId ];
            setValue( transcription );
            setValueOld( transcription );


        }else{
            setValue( '' );
            setValueOld( '' );

        };

    }, [ wordId, wordListById ] );

    useEffect( () => {
        if( value.trim() === '' ){
            setErrorText( '' );
        }else{
            let isValid = word_transcription_is_valid( value );
            if( isValid ){
                setErrorText( '' );
            }else{
                setErrorText( 'Есть запрещённые символы' );
            };
        };
    }, [ value ] );

    const blur = () => {
        if( valueOld !== value.trim() ){
            set_word_list_value_into_store( wordId, { transcription: value } );
        };
    }



    return (
        <div className = 'OFW_WordTranscription'>
            
            <WordInput
                value =         { value }
                keyName =       { 'TRANSCRIPTION' }
                max =           { LANGUAGES[ 'TRANSCRIPTION' ].max }
                setValue =      { setValue }
                errorText =     { errorText }
                setErrorText =  { setErrorText }
                blur =          { blur }
                placeholder =   { `[${ LANGUAGES[ 'TRANSCRIPTION' ].name }]` }
            />
        </div>
    )

};


export function WordTranscription( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordTranscriptionComponent
            { ...props }
            wordListById = { words.wordListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
