
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLOL_Title.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageTitle } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLOL_TitleComponent = ( props ) => {

    let {
        languagePageTitle,


        setMainPageDataIsChanged,
        setLanguagePageTitle,

    } = props;
    let [ value, setValue ] = useState( languagePageTitle );

    useEffect( () => {
        setValue( languagePageTitle );
    }, [ languagePageTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== languagePageTitle ){
            setLanguagePageTitle( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLOL_Title'>
            <OC_Input
                title =         'Название страницы'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLOL_Title( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLOL_TitleComponent
            { ...props }
            languagePageTitle = { mainPage.languagePageTitle }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageTitle = { ( val ) => { dispatch( setLanguagePageTitle( val ) ) } }


            

        />
    );


}
