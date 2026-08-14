
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLOL_Header.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageHeader } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLOL_HeaderComponent = ( props ) => {

    let {
        languagePageHeader,


        setMainPageDataIsChanged,
        setLanguagePageHeader,

    } = props;
    let [ value, setValue ] = useState( languagePageHeader );

    useEffect( () => {
        setValue( languagePageHeader );
    }, [ languagePageHeader ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== languagePageHeader ){
            setLanguagePageHeader( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLOL_Header'>
            <OC_Input
                title =         'Заголовок страницы'
                value =         { value }
                setValue =      { setValue }
                max =           { 65 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLOL_Header( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLOL_HeaderComponent
            { ...props }
            languagePageHeader = { mainPage.languagePageHeader }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageHeader = { ( val ) => { dispatch( setLanguagePageHeader( val ) ) } }


            

        />
    );


}
