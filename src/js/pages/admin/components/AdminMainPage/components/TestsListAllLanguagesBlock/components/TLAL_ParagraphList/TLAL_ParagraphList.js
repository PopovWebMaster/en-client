

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TLAL_ParagraphList.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setTestsListPageParagraphList } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';

import { convert_array_to_string } from './../../../../../../../../helpers/convert_array_to_string.js';
import { convert_string_to_array } from './../../../../../../../../helpers/convert_string_to_array.js';




const TLAL_ParagraphListComponent = ( props ) => {

    let {
        testsListPageParagraphList,


        setMainPageDataIsChanged,
        setTestsListPageParagraphList,

    } = props;
    let [ value, setValue ] = useState( convert_array_to_string( testsListPageParagraphList ) );

    useEffect( () => {
        setValue( convert_array_to_string( testsListPageParagraphList ) );
    }, [ testsListPageParagraphList ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        setTestsListPageParagraphList( convert_string_to_array( val ) );
        setMainPageDataIsChanged( true );

    }


    return (
        <div className = 'TLAL_ParagraphList'>
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


export function TLAL_ParagraphList( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <TLAL_ParagraphListComponent
            { ...props }
            testsListPageParagraphList = { mainPage.testsListPageParagraphList }



            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setTestsListPageParagraphList = { ( val ) => { dispatch( setTestsListPageParagraphList( val ) ) } }


            

        />
    );


}
