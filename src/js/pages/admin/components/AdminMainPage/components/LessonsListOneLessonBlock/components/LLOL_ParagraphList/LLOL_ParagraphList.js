

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLOL_ParagraphList.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguagePageParagraphList } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';

import { convert_array_to_string } from './../../../../../../../../helpers/convert_array_to_string.js';
import { convert_string_to_array } from './../../../../../../../../helpers/convert_string_to_array.js';




const LLOL_ParagraphListComponent = ( props ) => {

    let {
        languagePageParagraphList,


        setMainPageDataIsChanged,
        setLanguagePageParagraphList,

    } = props;
    let [ value, setValue ] = useState( convert_array_to_string( languagePageParagraphList ) );

    useEffect( () => {
        setValue( convert_array_to_string( languagePageParagraphList ) );
    }, [ languagePageParagraphList ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        setLanguagePageParagraphList( convert_string_to_array( val ) );
        setMainPageDataIsChanged( true );

    }


    return (
        <div className = 'LLOL_ParagraphList'>
            <OC_Input
                title =         'Текст на странице (Shift+Enter для нового параграфа)'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
                asTextArea = { true }
            />

        </div>
    )

};


export function LLOL_ParagraphList( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLOL_ParagraphListComponent
            { ...props }
            languagePageParagraphList = { mainPage.languagePageParagraphList }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguagePageParagraphList = { ( val ) => { dispatch( setLanguagePageParagraphList( val ) ) } }


            

        />
    );


}
