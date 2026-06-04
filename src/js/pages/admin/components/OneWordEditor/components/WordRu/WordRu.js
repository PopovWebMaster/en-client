
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordRu.scss';

import { WordInput } from './../WordInput/WordInput.js';
import { LANGUAGES } from './../../../../../../config/languages.js';



const WordRuComponent = ( props ) => {

    let {
        wordId,

    } = props;

    let [ value, setValue ] = useState( '' );
    let [ errorText, setErrorText ] = useState( '' );
    let [ chackStatuse, setChackStatuse ] = useState( null );



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
        <div className = 'OFW_WordRu'>
            <WordInput
                value =         { value }
                keyName =       { 'RU' }
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


export function WordRu( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordRuComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
