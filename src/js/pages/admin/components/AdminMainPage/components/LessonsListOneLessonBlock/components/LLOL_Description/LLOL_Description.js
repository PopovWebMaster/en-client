
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLOL_Description.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageDescription } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLOL_DescriptionComponent = ( props ) => {

    let {
        languagePageDescription,


        setMainPageDataIsChanged,
        setLanguagePageDescription,

    } = props;
    let [ value, setValue ] = useState( languagePageDescription );

    useEffect( () => {
        setValue( languagePageDescription );
    }, [ languagePageDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== languagePageDescription ){
            setLanguagePageDescription( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLOL_Description'>
            <OC_Input
                title =         'Описание <meta name="description" content>'
                value =         { value }
                setValue =      { setValue }
                max =           { 2000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLOL_Description( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLOL_DescriptionComponent
            { ...props }
            languagePageDescription = { mainPage.languagePageDescription }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageDescription = { ( val ) => { dispatch( setLanguagePageDescription( val ) ) } }


            

        />
    );


}
