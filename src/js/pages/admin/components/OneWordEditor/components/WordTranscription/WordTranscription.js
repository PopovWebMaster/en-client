
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordTranscription.scss';

import { WordInput } from './../WordInput/WordInput.js';
import { LANGUAGES } from './../../../../../../config/languages.js';



const WordTranscriptionComponent = ( props ) => {

    let {
        wordId,

    } = props;

    let [ value, setValue ] = useState( '' );
    let [ errorText, setErrorText ] = useState( '' );

    useEffect( () => {
            if( value.length === 10 ){
                setErrorText( 'Здесь какой то длинный текст с сообщением об ошибке' );
            }else{
                    setErrorText( '' );
            };
    
        }, [ value ] );
    
        const blur = () => {
    
        }



    return (
        <div className = 'OFW_WordTranscription'>
            
            <WordInput
                value =         { value }
                max =           { 10 }
                setValue =      { setValue }
                errorText =     { errorText }
                setErrorText =  { setErrorText }
                blur =          { blur }
                placeholder =   { '[транскрипция]' }
            />
        </div>
    )

};


export function WordTranscription( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordTranscriptionComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
