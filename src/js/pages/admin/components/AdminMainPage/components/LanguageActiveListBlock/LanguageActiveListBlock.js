
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LanguageActiveListBlock.scss';

import { selectorData as mainPageSlise } from './../../../../../../redux/admin/mainPageSlise.js';


import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';


import { ActiveLanguageListEdit } from './../ActiveLanguageListEdit/ActiveLanguageListEdit.js';
import { LANGUAGES } from './../../../../../../config/languages.js';




const LanguageActiveListBlockComponent = ( props ) => {

    let {
        languageActiveList

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );


    const createSecondTitle = ( arr ) => {
        let div = arr.map( ( item, index ) => {

            let { icon } = LANGUAGES[ item ];

            return <img src = { icon } className = 'STIL' key = { index }/>

        } );

        return div;

    };



    return (

        <MainPageBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Языки'
            blockSecondTitle =      { <>{createSecondTitle( languageActiveList )}</> }
            openingContainerTitle = 'Список активных языков'
            attention = { false }

        >

            <ActiveLanguageListEdit />

        </MainPageBlockContainer>

    )

};


export function LanguageActiveListBlock( props ){

    const mainPage = useSelector( mainPageSlise );
    // const dispatch = useDispatch();

    return (
        <LanguageActiveListBlockComponent
            { ...props }
            languageActiveList =          { mainPage.languageActiveList }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
