

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordForeign.scss';
import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';


import { WordInput } from './../WordInput/WordInput.js';
import { LANGUAGES } from './../../../../../../config/languages.js';

import { word_foreign_is_valid } from './../../../../../../helpers/word_foreign_is_valid.js';



const WordForeignComponent = ( props ) => {

    let {
        wordId,

        languageKeyName,
        wordListById,

    } = props;
    let [ value, setValue ] = useState( '' );
    let [ errorText, setErrorText ] = useState( '' );
    let [ chackStatuse, setChackStatuse ] = useState( null );

    useEffect( () => {
        if( wordListById[ wordId ] ){
            let { foreign } = wordListById[ wordId ];
            setValue( foreign );

        }else{
            setValue( '' );
        };


    }, [ wordId, wordListById ] );




    useEffect( () => {

        if( value.trim() === '' ){
            setErrorText( '' );
        }else{
            let isValid = word_foreign_is_valid( value );
            if( isValid ){
                setErrorText( '' );
            }else{
                setErrorText( 'Есть запрещённые символы' );
            };
        };

    }, [ value ] );

    const blur = () => {

    }



    return (
        <div className = 'OFW_WordForeign'>

            <WordInput
                value =         { value }
                keyName =       { languageKeyName }
                max =           { LANGUAGES[ languageKeyName ].max }
                setValue =      { setValue }
                errorText =     { errorText }
                setErrorText =  { setErrorText }
                blur =          { blur }
                chackStatuse = { chackStatuse }
            />
            

        </div>
    )

};


export function WordForeign( props ){

    const language = useSelector( languageSlice );
    const words = useSelector( wordsSlice );


    // const dispatch = useDispatch();

    return (
        <WordForeignComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            wordListById = { words.wordListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
