

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LanguagePageParagraphListEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageParagraphList } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LanguagePageParagraphListEditComponent = ( props ) => {

    let {
        languagePageParagraphList,


        setMainPageDataIsChanged,
        setLanguagePageParagraphList,

    } = props;
    let [ value, setValue ] = useState( languagePageParagraphList );

    useEffect( () => {
        setValue( languagePageParagraphList );
    }, [ languagePageParagraphList ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== languagePageParagraphList ){
            setLanguagePageParagraphList( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'AMP_LanguagePageParagraphListEdit'>
            <OC_Input
                title =         'Текст на странице (Shift+Enter для нового параграфа)'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LanguagePageParagraphListEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LanguagePageParagraphListEditComponent
            { ...props }
            languagePageParagraphList = { mainPage.languagePageParagraphList }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageParagraphList = { ( val ) => { dispatch( setLanguagePageParagraphList( val ) ) } }


            

        />
    );


}
