
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BDWGComponent.scss';

import { selectorData as wordsSlice } from './../../../../../redux/admin/wordsSlice.js';
import { selectorData as lessonsSlice } from './../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../redux/languageSlice.js';


import { ScrollContainer } from './../../../../../components/ScrollContainer/ScrollContainer.js';
import { AWButtonAdd } from './../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWInputText } from './../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';

import { BDWG_SelectAll } from './../BDWG_SelectAll/BDWG_SelectAll.js';
import { BDWG_OneWord } from './../BDWG_OneWord/BDWG_OneWord.js';





const BDWGComponentComponent = ( props ) => {

    let {
        isOpen,

        wordList,

        currentLessonId,
        currentLessonLevelName,
        languageName,

    } = props;

    let [ list, setList ] = useState( [] );
    let [ fileName, setFileName ] = useState( '' );
    let [ isReady, setIsReady ] = useState( false );
    let [ selectedCount, setSelectedCount ] = useState( 0 );



    useEffect( () => {
        if( isOpen ){
            setList( getList() );
        }else{
            setList( [] );
        };
    }, [ isOpen, wordList ] );


    useEffect( () => {
        let count = 0;
        let res = false;
        if( fileName.trim() !== '' ){
            for( let i = 0; i < list.length; i++ ){
                let { isSelected } = list[ i ];
                if( isSelected ){
                    count = count + 1;
                };
            };
            res = count > 0;
        };
        setSelectedCount( count );
        setIsReady( res );

    }, [ list, fileName ] );

    const getNewFileName = () => {
        let res = `${languageName}. Cвободные слова. (${selectedCount} слов)`;
        if( currentLessonId !== null ){
            res = `${languageName}. ${currentLessonLevelName}. (${selectedCount} слов)`
        };
        return res;
    }

    useEffect( () => {
        setFileName( getNewFileName() );
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

    const getList = () => {
        let result = [];

        for( let i = 0; i < wordList.length; i++ ){
            let {
                audio,
                foreign,
                id,
                part_of_speech_id,
                ru,
                transcription,
            } = wordList[ i ];

            result.push({
                isSelected: true,
                audioLength: audio.length,
                foreign,
                id,
                part_of_speech_id,
                ru,
                transcription,
            });
        };

        return result;

    };

    const click = () => {
        if( isReady ){
            let arr = [];
            for( let i = 0; i < list.length; i++ ){
                let { isSelected, id } = list[ i ];
                if( isSelected ){
                    console.dir( list[ i ] );
                };
            };
        };
    }


    const fileNameChange = ( e ) => {
        let val = e.target.value;
        setFileName( val );

    }



    return (
        <div className = 'BDWGComponent'>

            <AWInputText
                title = { 'Имя файла' }
                value = { fileName }
                onChange = { fileNameChange }

                max = { 100 }
                placeholder = 'это поле нельзя оставлять пустым!!!!!'
                enterHandler = { () => {} }
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
                <AWButtonAdd
                    title = 'Скачать'
                    isReady = { isReady }
                    clickHandler = { click }
                    icon = 'icon-doc'
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
            lessons = { lessons }

            currentLessonId = { lessons.currentLessonId }
            currentLessonLevelName = { lessons.currentLessonLevelName }
            languageName = { language.languageName }


            

            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
