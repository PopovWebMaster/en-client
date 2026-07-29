
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsListOneLessonBlock.scss';

import { selectorData as mainPageSlise } from './../../../../../../redux/admin/mainPageSlise.js';
import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';





import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';


// import { ActiveLanguageListEdit } from './../ActiveLanguageListEdit/ActiveLanguageListEdit.js';
import { LANGUAGES } from './../../../../../../config/languages.js';

import { LLOL_Title } from './components/LLOL_Title/LLOL_Title.js';
import { LLOL_Header } from './components/LLOL_Header/LLOL_Header.js';
import { LLOL_ParagraphList } from './components/LLOL_ParagraphList/LLOL_ParagraphList.js';
import { LLOL_Description } from './components/LLOL_Description/LLOL_Description.js';
import { LLOL_Keywords } from './components/LLOL_Keywords/LLOL_Keywords.js';




const LessonsListOneLessonBlockComponent = ( props ) => {

    let {
        languageActiveList,
        languageAlias,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );



    return (

        <MainPageBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Главная страница одного языка'
            blockSecondTitle =      { `${HOST_TO_API_SERVER}/lessons/${languageAlias}/` }
            openingContainerTitle = 'Страница "Список уроков"'
            attention = { false }

        >

            <LLOL_Title />
            <LLOL_Header />
            <LLOL_ParagraphList />
            <LLOL_Description />
            <LLOL_Keywords />

            

        </MainPageBlockContainer>

    )

};


export function LessonsListOneLessonBlock( props ){

    const mainPage = useSelector( mainPageSlise );
    const language = useSelector( languageSlice );


    // const dispatch = useDispatch();

    return (
        <LessonsListOneLessonBlockComponent
            { ...props }
            languageActiveList =          { mainPage.languageActiveList }
            languageAlias =          { language.languageAlias }


            

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
