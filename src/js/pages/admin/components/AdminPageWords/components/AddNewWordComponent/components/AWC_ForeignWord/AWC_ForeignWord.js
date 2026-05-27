
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_ForeignWord.scss';

import { selectorData as wordEditSlice, setWordForeign } from './../../../../../../../../redux/admin/wordEditSlice.js';
import { selectorData as languageSlice } from './../../../../../../../../redux/languageSlice.js';


// import { OpeningContainer } from './../../../../../../components/OpeningContainer/OpeningContainer.js'

import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
// import { MAX_LENGTH } from './../../../../../../../../config/words.js';
import { LANGUAGES } from './../../../../../../../../config/languages.js';


import { trim_spaces_str } from './../../../../../../../../helpers/trim_spaces_str.js';

// import { word_en_is_valid } from './../../../../../../../../helpers/word_en_is_valid.js';
import { word_foreign_is_valid } from './../../../../../../../../helpers/word_foreign_is_valid.js';
// import { make_fit_format_word_en } from './../../../../../../../../helpers/make_fit_format_word_en.js';
import { make_fit_format_word_foreign } from './../../../../../../../../helpers/make_fit_format_word_foreign.js';
import { check_word_en_for_uniq_on_serer } from './../../../../../../../../helpers/check_word_en_for_uniq_on_serer.js';
import { check_word_foreign_for_uniq_on_serer } from './../../../../../../../../helpers/check_word_foreign_for_uniq_on_serer.js';


const AWC_ForeignWordComponent = ( props ) => {

    let {
        word_foreign,
        setWordForeign,
        isOpen,

        languageKeyName,

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
            setWordForeign( val );
        }else{
            if( word_foreign_is_valid( val ) ){
                setWordForeign( val );
            };
        };

        setErrorText( '' );
    };

    const blure = () => {

        setChackStatuse( false );

        let trim_word_foreign = make_fit_format_word_foreign( word_foreign );

        setWordForeign( trim_word_foreign );

        check_word_foreign_for_uniq_on_serer({
            word_foreign: trim_word_foreign,
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
                    setErrorText( resp.message );
                    setChackStatuse( null );
                }
            }
        });


    }


    

    return (
        <div className = 'AWC_ForeignWord'>


            <OC_Input 
                title =         { LANGUAGES[ languageKeyName ].name }
                value =         { word_foreign }
                setValue =      { setValue }
                isRequired =    { true }
                max =           { LANGUAGES[ languageKeyName ].max }
                errorText =     { errorText }
                setErrorText =  { setErrorText }
                chackStatuse =  { chackStatuse }
                blure =         { blure }
            />
            

        </div>
    )

};


export function AWC_ForeignWord ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const language = useSelector( languageSlice );


    
    const dispatch = useDispatch();

    return (
        <AWC_ForeignWordComponent
            { ...props }
            word_foreign = { wordEdit.word_foreign }

            languageKeyName = { language.languageKeyName }



            setWordForeign = { ( val ) => { dispatch( setWordForeign( val ) ) } }

        />
    );


}
