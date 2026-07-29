

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLAL_ParagraphList.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLessonsListPageParagraphList } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';

import { convert_array_to_string } from './../../../../../../../../helpers/convert_array_to_string.js';
import { convert_string_to_array } from './../../../../../../../../helpers/convert_string_to_array.js';




const LLAL_ParagraphListComponent = ( props ) => {

    let {
        lessonsListPageParagraphList,


        setMainPageDataIsChanged,
        setLessonsListPageParagraphList,

    } = props;
    let [ value, setValue ] = useState( convert_array_to_string( lessonsListPageParagraphList ) );

    useEffect( () => {
        setValue( convert_array_to_string( lessonsListPageParagraphList ) );
    }, [ lessonsListPageParagraphList ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        setLessonsListPageParagraphList( convert_string_to_array( val ) );
        setMainPageDataIsChanged( true );

    }


    return (
        <div className = 'LLAL_ParagraphList'>
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


export function LLAL_ParagraphList( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLAL_ParagraphListComponent
            { ...props }
            lessonsListPageParagraphList = { mainPage.lessonsListPageParagraphList }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLessonsListPageParagraphList = { ( val ) => { dispatch( setLessonsListPageParagraphList( val ) ) } }


            

        />
    );


}
