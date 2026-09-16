
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BDWGComponent.scss';

import { selectorData as wordsSlice } from './../../../../../redux/admin/wordsSlice.js';
import { selectorData as lessonsSlice } from './../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../redux/languageSlice.js';

import { ScrollContainer } from './../../../../../components/ScrollContainer/ScrollContainer.js';

import { BDWG_SelectAll } from './../BDWG_SelectAll/BDWG_SelectAll.js';
import { BDWG_OneWord } from './../BDWG_OneWord/BDWG_OneWord.js';
import { BDWG_ProjectName } from './../BDWG_ProjectName/BDWG_ProjectName.js';
import { BDWG_Download } from './../BDWG_Download/BDWG_Download.js';

import { get_project_name } from './../vendors/get_project_name.js';
import { create_list_from_wordsList } from './../vendors/create_list_from_wordsList.js';


const BDWGComponentComponent = ( props ) => {

    let {
        isOpen,

        wordList,
        wordListById,

    } = props;

    let [ list, setList ] = useState( [] );
    let [ projectName, setProjectName ] = useState( '' );
    let [ selectedCount, setSelectedCount ] = useState( 0 );

    useEffect( () => {
        if( isOpen ){
            setList( create_list_from_wordsList() );
        }else{
            setList( [] );
        };
    }, [ isOpen, wordList ] );



    useEffect( () => {
        let count = 0;
        for( let i = 0; i < list.length; i++ ){
            let { isSelected } = list[ i ];
            if( isSelected ){
                count = count + 1;
            };
        };
        setSelectedCount( count );

    }, [ list ] );

    useEffect( () => {
        setProjectName( get_project_name( selectedCount ) );
    }, [ selectedCount ] );

    
    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                isSelected,
                audioLength,
                foreign,
                id,
                part_of_speech_id,
                ru,
                transcription,
            } = item;

            return (
                <BDWG_OneWord
                    key =               { index }
                    isSelected =        { isSelected }
                    audioLength =       { audioLength }
                    foreign =           { foreign }
                    id =                { id }
                    part_of_speech_id = { part_of_speech_id }
                    ru =                { ru }
                    transcription =     { transcription }

                    list =     { list }
                    setList =     { setList }


                    
                />
            )

        });

        return div;

    }


    return (
        <div className = 'BDWGComponent'>
            <BDWG_ProjectName
                projectName = { projectName }
                setProjectName = { setProjectName }
            />

            <BDWG_SelectAll
                list = { list }
                setList = { setList }
            />

            <ScrollContainer height = '60vh'>
                <div className = 'BDWG_List'>
                    { create( list ) }
                </div>
            </ScrollContainer>

            <div className = 'BDWG_btnWrap'>

                <BDWG_Download
                    projectName =   { projectName }
                    list =          { list }
                />

            </div>

        </div>
    )

};


export function BDWGComponent( props ){

    const words = useSelector( wordsSlice );
    const lessons = useSelector( lessonsSlice );
    const language = useSelector( languageSlice );



    // const dispatch = useDispatch();

    return (
        <BDWGComponentComponent
            { ...props }
            wordList = { words.wordList }
            wordListById = { words.wordListById }

            // lessons = { lessons }

            currentLessonId = { lessons.currentLessonId }
            currentLessonLevelName = { lessons.currentLessonLevelName }

            // currentLessonDescription = { lessons.currentLessonDescription }
            // currentLessonLevelName = { lessons.currentLessonLevelName }
            // currentLessonPhrasesList = { lessons.currentLessonPhrasesList }
            // currentLessonTitle = { lessons.currentLessonTitle }
            // currentPageDescription = { lessons.currentPageDescription }
            // currentPageKeyWords = { lessons.currentPageKeyWords }
            // currentPageText = { lessons.currentPageText }
            // currentPageTitle = { lessons.currentPageTitle }









            languageName = { language.languageName }


            

            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
