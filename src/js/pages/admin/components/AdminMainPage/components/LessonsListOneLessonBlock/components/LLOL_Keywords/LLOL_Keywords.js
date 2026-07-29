
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLOL_Keywords.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageKeywords } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLOL_KeywordsComponent = ( props ) => {

    let {
        languagePageKeywords,


        setMainPageDataIsChanged,
        setLanguagePageKeywords,

    } = props;
    let [ value, setValue ] = useState( languagePageKeywords );

    useEffect( () => {
        setValue( languagePageKeywords );
    }, [ languagePageKeywords ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== languagePageKeywords ){
            setLanguagePageKeywords( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLOL_Keywords'>
            <OC_Input
                title =         'Ключевые слова <meta name="keywords" content>'
                value =         { value }
                setValue =      { setValue }
                max =           { 2000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLOL_Keywords( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLOL_KeywordsComponent
            { ...props }
            languagePageKeywords = { mainPage.languagePageKeywords }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageKeywords = { ( val ) => { dispatch( setLanguagePageKeywords( val ) ) } }


            

        />
    );


}
