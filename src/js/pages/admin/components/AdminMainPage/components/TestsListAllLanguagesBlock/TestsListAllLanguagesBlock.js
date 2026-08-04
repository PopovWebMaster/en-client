// TestsListAllLanguagesBlock


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestsListAllLanguagesBlock.scss';

import { selectorData as mainPageSlise } from './../../../../../../redux/admin/mainPageSlise.js';


import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';


// import { ActiveLanguageListEdit } from './../ActiveLanguageListEdit/ActiveLanguageListEdit.js';
import { LANGUAGES } from './../../../../../../config/languages.js';

import { TLAL_Title } from './components/TLAL_Title/TLAL_Title.js';
import { TLAL_Header } from './components/TLAL_Header/TLAL_Header.js';
import { TLAL_ParagraphList } from './components/TLAL_ParagraphList/TLAL_ParagraphList.js';
import { TLAL_Description } from './components/TLAL_Description/TLAL_Description.js';
import { TLAL_Keywords } from './components/TLAL_Keywords/TLAL_Keywords.js';




const TestsListAllLanguagesBlockComponent = ( props ) => {

    let {
        languageActiveList

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );



    return (

        <MainPageBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Страница "Список тестов" (все языки)'
            blockSecondTitle =      { `${HOST_TO_API_SERVER}/tests` }
            openingContainerTitle = 'Страница "Список тестов"'
            attention = { false }

        >

            <TLAL_Title />
            <TLAL_Header />
            <TLAL_ParagraphList />
            <TLAL_Description />
            <TLAL_Keywords />

            

        </MainPageBlockContainer>

    )

};


export function TestsListAllLanguagesBlock( props ){

    const mainPage = useSelector( mainPageSlise );
    // const dispatch = useDispatch();

    return (
        <TestsListAllLanguagesBlockComponent
            { ...props }
            languageActiveList =          { mainPage.languageActiveList }

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
