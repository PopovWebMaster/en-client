
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_ForeignWord.scss';

import { selectorData as wordEditSlice, setWordEn } from './../../../../../../../redux/admin/wordEditSlice.js';

// import { OpeningContainer } from './../../../../../../components/OpeningContainer/OpeningContainer.js'

import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { MAX_LENGTH } from './../../../../../../../config/words.js';

import { trim_spaces_str } from './../../../../../../../helpers/trim_spaces_str.js';

import { word_en_is_valid } from './../../../../../../../helpers/word_en_is_valid.js';
import { make_fit_format_word_en } from './../../../../../../../helpers/make_fit_format_word_en.js';
import { check_word_en_for_uniq_on_serer } from './../../../../../../../helpers/check_word_en_for_uniq_on_serer.js';


const AWC_ForeignWordComponent = ( props ) => {

    let {
        word_en,
        setWordEn,
        isOpen,

    } = props;

    let [ errorText, setErrorText ] = useState( '' );
    let [ chackStatuse, setChackStatuse ] = useState( null );

    useEffect( () => {
        if( isOpen ){
            
        }else{
            setErrorText( '' );
            setChackStatuse( null );
        };

    }, [ isOpen ] );

    const setValue = ( val ) => {
        if( val.trim() === '' ){
            setWordEn( val );
        }else{
            if( word_en_is_valid( val ) ){
                setWordEn( val );
            };
        };

        setErrorText( '' );
    };

    const blure = () => {

        setChackStatuse( false );

        let trim_word_en = make_fit_format_word_en( word_en );

        setWordEn( trim_word_en );

        check_word_en_for_uniq_on_serer({
            word_en: trim_word_en,
            callback: ( resp ) => {

                let {
                    isUniq
                } = resp;

                if( resp.ok ){
                    if( isUniq ){
                        setChackStatuse( true );
                    }else{
                        setChackStatuse( null );
                        setErrorText( 'Это слово уже существует!' );
                    };
                }else{
                    setChackStatuse( null );
                }
            }
        });


    }



    

    return (
        <div className = 'AWC_WordEn'>
{/* 
            <OC_Input 
                title =         'Английское'
                value =         { word_en }
                setValue =      { setValue }
                isRequired =    { true }
                max =           { MAX_LENGTH.EN }
                errorText =     { errorText }
                setErrorText =  { setErrorText }
                chackStatuse =  { chackStatuse }
                blure =         { blure }
            /> */}
            

        </div>
    )

};


export function AWC_ForeignWord ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AWC_ForeignWordComponent
            { ...props }
            word_en = { wordEdit.word_en }
            setWordEn = { ( val ) => { dispatch( setWordEn( val ) ) } }

        />
    );


}
