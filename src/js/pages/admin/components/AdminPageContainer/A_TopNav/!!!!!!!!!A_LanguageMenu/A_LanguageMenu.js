
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './A_LanguageMenu.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { LANGUAGES, LANGUAGE_LIST } from './../../../../../../config/languages.js';

const A_LanguageMenuComponent = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isActive, setIsActive] = useState( true );


    const click = () => {
        if( isActive ){
            setIsOpen( !isOpen );


        };
    };

    const btnClick = () => {

    };

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { name, alias, icon } = item;
            
            return (
                <div 
                    className = 'A_LM_btn_wrap'
                    key = { index }
                    onClick = { () => { btnClick( alias ) } }
                >
                    <img src = { icon }/>
                    <span>{ name }</span>
                </div>
            );

        } );

        return div;

    }


    return (

        <div className = { `A_LanguageMenu ${ isActive? 'isActive': '' }` }>

            <div
                className = 'A_LM_current_wrap'
                onClick = { click }
            >
                <img src = { LANGUAGES.EN.icon }/>
                <span>{ LANGUAGES.EN.name }</span>
            </div>

            { isOpen? (
                <div className = 'A_LM_menu_wrap'>

                    { create( LANGUAGE_LIST ) }


                </div>
            ): '' }

            
            
        </div>


    )

};


export function A_LanguageMenu( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <A_LanguageMenuComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
