
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LanguageMenu.scss';

import {
    selectorData as languageSlice,
    setLanguageAlias,
    setLanguageName,
    setLanguageIconPuth,
    setLanguageKeyName,
} from './../../redux/languageSlice.js';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { LANGUAGES, LANGUAGE_LIST } from './../../config/languages.js';

import { set_language_info_into_localStorage } from './../../helpers/set_language_info_into_localStorage.js';


const LanguageMenuComponent = ( props ) => {

    let {
        languageAlias,
        languageName,
        languageIconPuth,
        languageKeyName,
        
        setLanguageAlias,
        setLanguageName,
        setLanguageIconPuth,
        setLanguageKeyName,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isActive, setIsActive] = useState( true );


    const click = () => {
        if( isActive ){
            setIsOpen( !isOpen );


        };
    };

    const btnClick = ( params ) => {
        let {
            name,
            alias,
            icon,
            keyName,
        } = params;

        setLanguageAlias( alias );
        setLanguageName( name );
        setLanguageIconPuth( icon );
        setLanguageKeyName( keyName );

        set_language_info_into_localStorage( keyName );

    };

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { name, alias, icon, keyName } = item;
            
            return (
                <div 
                    className = 'LM_btn_wrap'
                    key = { index }
                    onClick = { () => { btnClick({
                        name,
                        alias,
                        icon,
                        keyName,
                    }) } }
                >
                    <img src = { icon }/>
                    <span>{ name }</span>
                </div>
            );

        } );

        return div;

    }


    return (

        <div className = { `LanguageMenu ${ isActive? 'isActive': '' }` }>

            <div
                className = 'LM_current_btn'
                onClick = { click }
            >
                <img src = { languageIconPuth }/>
                <span>{ languageName }</span>
            </div>

            { isOpen? (
                <div className = 'LM_menu_wrap'>

                    { create( LANGUAGE_LIST ) }


                </div>
            ): '' }

            
            
        </div>


    )

};


export function LanguageMenu( props ){

    const language = useSelector( languageSlice );
    const dispatch = useDispatch();

    return (
        <LanguageMenuComponent
            { ...props }
            languageAlias = { language.languageAlias }
            languageName = { language.languageName }
            languageIconPuth = { language.languageIconPuth }
            languageKeyName = { language.languageKeyName }

            setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }
            setLanguageName = { ( val ) => { dispatch( setLanguageName( val ) ) } }
            setLanguageIconPuth = { ( val ) => { dispatch( setLanguageIconPuth( val ) ) } }
            setLanguageKeyName = { ( val ) => { dispatch( setLanguageKeyName( val ) ) } }


            



        />
    );


}
