
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_WordRu.scss';

import { selectorData as wordEditSlice, setWordRu } from './../../../../../../../redux/admin/wordEditSlice.js';

import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { MAX_LENGTH } from './../../../../../../../config/words.js';


const AWC_WordRuComponent = ( props ) => {

    let {
        word_ru,
        setWordRu,
        isOpen,

    } = props;

    let [ errorText, setErrorText ] = useState( '' );

    const setValue = ( val ) => {

        if( val.length > 5 ){

            setErrorText( 'Здесь какой то очень очень длинный текст, который блядь обязательно надо написать именно такоим пиздец каким длинным Здесь какой то очень очень длинный текст, который блядь обязательно надо написать именно такоим пиздец каким длинным' );

        }else{
            setErrorText( '' );
        }
            setWordRu( val );
        

    };




    return (
        <div className = 'AWC_WordRu'>

            <OC_Input 
                title =         'Русское'
                value =         { word_ru }
                setValue =      { setValue }

                isRequired =    { true }
                max = { MAX_LENGTH.RU }

                errorText = { errorText }
                setErrorText = { setErrorText }
            />
            

        </div>
    )

};


export function AWC_WordRu ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AWC_WordRuComponent
            { ...props }
            word_ru = { wordEdit.word_ru }
            setWordRu = { ( val ) => { dispatch( setWordRu( val ) ) } }

        />
    );


}
