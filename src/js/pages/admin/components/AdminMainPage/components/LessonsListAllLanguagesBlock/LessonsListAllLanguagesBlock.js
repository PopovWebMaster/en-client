
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsListAllLanguagesBlock.scss';

import { selectorData as mainPageSlise } from './../../../../../../redux/admin/mainPageSlise.js';


import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';


// import { ActiveLanguageListEdit } from './../ActiveLanguageListEdit/ActiveLanguageListEdit.js';
import { LANGUAGES } from './../../../../../../config/languages.js';

import { LLAL_Title } from './components/LLAL_Title/LLAL_Title.js';
import { LLAL_Header } from './components/LLAL_Header/LLAL_Header.js';
import { LLAL_ParagraphList } from './components/LLAL_ParagraphList/LLAL_ParagraphList.js';
import { LLAL_Description } from './components/LLAL_Description/LLAL_Description.js';
import { LLAL_Keywords } from './components/LLAL_Keywords/LLAL_Keywords.js';




const LessonsListAllLanguagesBlockComponent = ( props ) => {

    let {
        languageActiveList

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );



    return (

        <MainPageBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Страница "Список уроков" (все языки)'
            blockSecondTitle =      { `${HOST_TO_API_SERVER}/lessons` }
            openingContainerTitle = 'Страница "Список уроков"'
            attention = { false }

        >

            <LLAL_Title />
            <LLAL_Header />
            <LLAL_ParagraphList />
            <LLAL_Description />
            <LLAL_Keywords />

            

        </MainPageBlockContainer>

    )

};


export function LessonsListAllLanguagesBlock( props ){

    const mainPage = useSelector( mainPageSlise );
    // const dispatch = useDispatch();

    return (
        <LessonsListAllLanguagesBlockComponent
            { ...props }
            languageActiveList =          { mainPage.languageActiveList }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
