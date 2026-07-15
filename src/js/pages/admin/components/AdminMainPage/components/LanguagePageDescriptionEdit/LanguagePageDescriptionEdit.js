
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LanguagePageDescriptionEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageDescription } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LanguagePageDescriptionEditComponent = ( props ) => {

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
        <div className = 'AMP_LanguagePageDescriptionEdit'>
            <OC_Input
                title =         'Описание <meta name="description" content>'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LanguagePageDescriptionEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LanguagePageDescriptionEditComponent
            { ...props }
            languagePageDescription = { mainPage.languagePageDescription }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageDescription = { ( val ) => { dispatch( setLanguagePageDescription( val ) ) } }


            

        />
    );


}
