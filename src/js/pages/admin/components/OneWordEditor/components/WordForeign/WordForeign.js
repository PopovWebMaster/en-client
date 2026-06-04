

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordForeign.scss';
import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';

import { WordInput } from './../WordInput/WordInput.js';
import { LANGUAGES } from './../../../../../../config/languages.js';



const WordForeignComponent = ( props ) => {

    let {
        languageKeyName,
        wordId,

    } = props;
    let [ value, setValue ] = useState( '' );
    let [ errorText, setErrorText ] = useState( '' );
    let [ chackStatuse, setChackStatuse ] = useState( null );

    useEffect( () => {
        if( value.length === 10 ){
            setErrorText( 'Здесь какой то длинный текст с сообщением об ошибке sdds Здесь какой то длинный текст с сообщением об ошибке Здесь какой то длинный текст с сообщением об ошибке' );
        }else{
             setErrorText( '' );
        };

    }, [ value ] );

    const blur = () => {

    }



    return (
        <div className = 'OFW_WordForeign'>

            <WordInput
                value =         { value }
                keyName =       { languageKeyName }
                max =           { 10 }
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
    // const dispatch = useDispatch();

    return (
        <WordForeignComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
