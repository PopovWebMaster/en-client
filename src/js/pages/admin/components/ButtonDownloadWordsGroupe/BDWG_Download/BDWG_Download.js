// BDWG_Download


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BDWG_Download.scss';

import { selectorData as wordsSlice } from './../../../../../redux/admin/wordsSlice.js';
import { selectorData as lessonsSlice } from './../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../redux/languageSlice.js';

import { AWButtonAdd } from './../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { download_zip } from './../vendors/download_zip.js';


const BDWG_DownloadComponent = ( props ) => {

    let {
        projectName,
        list,

        wordListById,

        currentLessonId,
        currentLessonLevelName,
        currentLessonDescription,
        currentLessonPhrasesList,
        currentLessonTitle,
        currentPageDescription,
        currentPageKeyWords,
        currentPageText,
        currentPageTitle,

        languageKeyName,

    } = props;

    let [ isReady, setIsReady ] = useState( false );


    useEffect( () => {
        let count = 0;
        let res = false;
        if( projectName.trim() !== '' ){
            for( let i = 0; i < list.length; i++ ){
                let { isSelected } = list[ i ];
                if( isSelected ){
                    count = count + 1;
                };
            };
            res = count > 0;
        };
        setIsReady( res );

    }, [ list, projectName ] );

    const click = () => {
        if( isReady ){
            download_zip({ 
                keyName: languageKeyName,
                list: list_selected_with_audio(), 
                projectName,
                project: get_project_data(),
            });
        };
    }

    const list_selected_with_audio = () => {
        let result = [];
        for( let i = 0; i < list.length; i++ ){
            let item = structuredClone( list[ i ] );
            if( item.isSelected ){
                let { audio }  = wordListById[ item.id ];
                item.audio = audio;
                result.push( item );
            };
        };
        return result;
    }

    const get_lesson_data = () => {
        let result = null;
        if( currentLessonId !== null ){
            result = {
                levelName: currentLessonLevelName,
                description: currentLessonDescription,
                phrasesList: currentLessonPhrasesList,
                title: currentLessonTitle,
            };
        };
        return result;
    }


    const get_project_data = () => {
        let result = null;
        if( currentLessonId !== null ){
            result = {
                keyName: languageKeyName,
                lesson: get_lesson_data(),
                page: get_page_data(),
            };
        };
        return result;
    };

    const get_page_data = () => {
        let result = null;
        if( currentLessonId !== null ){
            result = {
                description: currentPageDescription,
                keywords: currentPageKeyWords,
                text: currentPageText,
                title: currentPageTitle,
            };
        };
        return result;
    }


    return (

        <AWButtonAdd
            title = 'Скачать'
            isReady = { isReady }
            clickHandler = { click }
            icon = 'icon-doc'
        />
    )

};


export function BDWG_Download( props ){

    const words = useSelector( wordsSlice );
    const lessons = useSelector( lessonsSlice );
    const language = useSelector( languageSlice );



    // const dispatch = useDispatch();

    return (
        <BDWG_DownloadComponent
            { ...props }
            // wordList = { words.wordList }
            wordListById = { words.wordListById }

            currentLessonId =           { lessons.currentLessonId }
            currentLessonLevelName =    { lessons.currentLessonLevelName }
            currentLessonDescription =  { lessons.currentLessonDescription }
            currentLessonPhrasesList =  { lessons.currentLessonPhrasesList }
            currentLessonTitle =        { lessons.currentLessonTitle }
            currentPageDescription =    { lessons.currentPageDescription }
            currentPageKeyWords =       { lessons.currentPageKeyWords }
            currentPageText =           { lessons.currentPageText }
            currentPageTitle =          { lessons.currentPageTitle }

            languageKeyName = { language.languageKeyName }

            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
