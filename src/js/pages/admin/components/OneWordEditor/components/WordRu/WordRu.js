
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordRu.scss';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';

import { WordInput } from './../WordInput/WordInput.js';
import { LANGUAGES } from './../../../../../../config/languages.js';

import { word_ru_is_valid } from './../../../../../../helpers/word_ru_is_valid.js';


const WordRuComponent = ( props ) => {

    let {
        wordId,

        wordListById,

    } = props;

    let [ value, setValue ] = useState( '' );
    let [ errorText, setErrorText ] = useState( '' );
    let [ chackStatuse, setChackStatuse ] = useState( null );

     useEffect( () => {
        if( wordListById[ wordId ] ){
            let { ru } = wordListById[ wordId ];
            setValue( ru );

        }else{
            setValue( '' );
        };


    }, [ wordId, wordListById ] );


    useEffect( () => {
        if( value.trim() === '' ){
            setErrorText( '' );
        }else{
            let isValid = word_ru_is_valid( value );
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
        <div className = 'OFW_WordRu'>
            <WordInput
                value =         { value }
                keyName =       { 'RU' }
                max =           { LANGUAGES[ 'RU' ].max }
                setValue =      { setValue }
                errorText =     { errorText }
                setErrorText =  { setErrorText }
                blur =          { blur }
                chackStatuse = { chackStatuse }
            />

        </div>
    )

};


export function WordRu( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordRuComponent
            { ...props }
            
            wordListById = { words.wordListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
