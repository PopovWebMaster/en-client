
import React, { useRef } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice } from './../../../../redux/admin/wordsSlice.js';
import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';
import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';



import './WordsSortingButtons.scss';

import { set_word_list_to_store } from './../../../../helpers/set_word_list_to_store.js';


const WordsSortingButtonsComponent = ( props ) => {

    let {
        wordList,
        languageKeyName,
        topicsListById,

    } = props;

    let elemRef = useRef();

    const scrollTop = () => {

        // setTimeout( () => {
            let freeWordsList = document.querySelector( '.freeWordsList' );
            freeWordsList.scrollIntoView( {behavior: "smooth", block: "start", inline: "start"});
        // }, 200 );
    }

    const click_foreign_alpha_sort = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.foreign > b.foreign ){
                return 1;
            }else{
                return -1;
            };
        } );
        set_word_list_to_store( arr_sort );

        scrollTop();
    };

    const click_ru_alpha_sort = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.ru > b.ru ){
                return 1;
            }else{
                return -1;
            };
        } );
        set_word_list_to_store( arr_sort );
        scrollTop();
    };

    const click_foreign_length_sort = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.foreign.length > b.foreign.length ){
                return 1;
            }else{
                return -1;
            };
        } );
        set_word_list_to_store( arr_sort );
        scrollTop();
    };

    const sort_by_topics = () => {
        let arr = structuredClone( wordList );
        let arr_sort = [];
        if( arr[ 0 ] ){
            if( arr[ 0 ].topic_id === null ){
                arr_sort = arr.sort( ( a, b ) => {
                    if( a.topic_id === null && b.topic_id !== null ){
                        return 1;
                    }else{
                        if( a.topic_id !== null && b.topic_id !== null){
                            if( topicsListById[ a.topic_id ].name > topicsListById[ b.topic_id ].name){
                                return 1;
                            }else{
                                return -1;
                            };
                        }else{
                            return -1;
                        };
                    };
                } );
            }else{
                arr_sort = arr.sort( ( a, b ) => {
                    if( a.topic_id === null && b.topic_id !== null ){
                        return -1;
                    }else{
                        if( a.topic_id !== null && b.topic_id !== null){
                            if( topicsListById[ a.topic_id ].name > topicsListById[ b.topic_id ].name){
                                return 1;
                            }else{
                                return -1;
                            };
                        }else{
                            return 1;
                        };
                    };
                } );
            }
        };
        set_word_list_to_store( arr_sort );
        scrollTop();
    };

    const sort_by_repeat = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.message === '' && b.message === '' ){
                return -1;
            }else{
                if( a.message.length > b.message.length ){
                    return -1;
                }else{
                    return 1;
                };
            };
        } );
        set_word_list_to_store( arr_sort );
        scrollTop();
    };

    const sort_by_POS = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.part_of_speech_id === null && b.part_of_speech_id === null ){
                return -1;
            }else{
                if( a.part_of_speech_id === null && b.part_of_speech_id !== null){
                    return -1;
                }else{
                    return 1;
                };
            };
        } );
        set_word_list_to_store( arr_sort );
        scrollTop();
    };

    const sort_by_audio = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.audio.length === 0 && b.audio.length === 0 ){
                return -1;
            }else{
                if( a.audio.length === 0 && b.audio.length !== 0 ){
                    return -1;
                }else{
                    return 1;
                };
            };
        } );

        set_word_list_to_store( arr_sort );
        scrollTop();

    };

    const sort_by_transcription = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {

            if( a.transcription.length > b.transcription.length ){
                return 1;
            }else{

                return -1;
            };
        } );

         if( arr_sort[ 0 ] ){   
            if( arr_sort[ 0 ].transcription.trim() === '' ){
                set_word_list_to_store( arr_sort );
            };
        };
        scrollTop();
    };

    const sort_by_foreign = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.foreign.length > b.foreign.length ){
                return 1;
            }else{

                return -1;
            };
        } );

         if( arr_sort[ 0 ] ){
            if( arr_sort[ 0 ].foreign.trim() === '' ){
                set_word_list_to_store( arr_sort );
            };
        }
        scrollTop();
    };

    const sort_by_ru = () => {
        let arr = structuredClone( wordList );
        let arr_sort = arr.sort( ( a, b ) => {
            if( a.ru.length > b.ru.length ){
                return 1;
            }else{

                return -1;
            };
        } );

        if( arr_sort[ 0 ] ){
            if( arr_sort[ 0 ].ru.trim() === '' ){
                set_word_list_to_store( arr_sort );
            };
        };
        scrollTop();
    };



    



    return (
        <div
            className = 'wordsSortingButtons'
            ref = { elemRef }
        >

            <div
                className = 'WSB_btn'
                onClick = { click_foreign_alpha_sort }
                title = { 'Сортировка по иностранным словам по алфавиту от A до Z' }
            >
                <span className = 'WSB_btn_name'>{ `${languageKeyName}:` }</span>
                <span className = 'WSB_btn_icon icon-sort-name-up'></span>
            </div>
            
            <div
                className = 'WSB_btn'
                onClick = { click_ru_alpha_sort }
                title = { 'Сортировка по русским словам по алфавиту от А до Я' }
            >
                <span className = 'WSB_btn_name'>{ `RU:` }</span>
                <span className = 'WSB_btn_icon icon-sort-name-up'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { click_foreign_length_sort }
                title = { 'Первые в списке слова, самые короткие по иностр.' }
            >
                <span className = 'WSB_btn_name'>{ `${languageKeyName}:` }</span>
                <span className = 'WSB_btn_icon icon-sort-number-up'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { sort_by_topics }
                title = { 'Сортировка по темам' }
            >
                <span className = 'WSB_btn_name'>Тема</span>
                <span className = 'WSB_btn_icon icon-sort-name-up'></span>
            </div>
            
            
            <div
                className = 'WSB_btn'
                onClick = { sort_by_repeat }
                title = { 'Первые в списке слова, которые посторяются' }
            >
                <span className = 'WSB_btn_icon icon-loop'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { sort_by_POS }
                title = { 'Первые в списке слова без части речи' }
            >
                <span className = 'WSB_btn_name'>Без ЧР</span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { sort_by_audio }
                title = { 'Первые в списке слова без аудио' }
            >
                <span className = 'WSB_btn_name'>аудио</span>
                <span className = 'WSB_btn_icon icon-thumbs-down-alt'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { sort_by_transcription }
                title = { 'Первые в списке слова без транскринций' }
            >
                <span className = 'WSB_btn_name'>Транскр</span>
                <span className = 'WSB_btn_icon icon-thumbs-down-alt'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { sort_by_foreign }
                title = { 'Первые в списке слова без ' + languageKeyName }
            >
                <span className = 'WSB_btn_name'>{languageKeyName}</span>
                <span className = 'WSB_btn_icon icon-thumbs-down-alt'></span>
            </div>

            <div
                className = 'WSB_btn'
                onClick = { sort_by_ru }
                title = { 'Первые в списке слова без русского перевода' }
            >
                <span className = 'WSB_btn_name'>RU</span>
                <span className = 'WSB_btn_icon icon-thumbs-down-alt'></span>
            </div>




            

        </div>
        
    )

};


export function WordsSortingButtons( props ){

    const words = useSelector( wordsSlice );
    const language = useSelector( languageSlice );
    const appWords = useSelector( appWordsSlice );


    // const dispatch = useDispatch();

    return (
        <WordsSortingButtonsComponent
            { ...props }
            wordList = { words.wordList }
            languageKeyName = { language.languageKeyName }

            topicsListById = { appWords.topicsListById }


            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
