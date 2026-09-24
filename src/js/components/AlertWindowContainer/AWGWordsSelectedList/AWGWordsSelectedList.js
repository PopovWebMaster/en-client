
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectorData as wordsSelectedListSlice, clearAll } from './../../../redux/admin/wordsSelectedListSlice.js';

import './AWGWordsSelectedList.scss';
import { AWGWSL_SelectAll } from './components/AWGWSL_SelectAll/AWGWSL_SelectAll.js';

import { ScrollContainer } from './../../../components/ScrollContainer/ScrollContainer.js';
import { AWGWSL_OneWord } from './components/AWGWSL_OneWord/AWGWSL_OneWord.js';



const AWGWordsSelectedListComponent = ( props ) => {

    let {
        isOpen,

        height = '60vh',

        list,
        clearAll,

        // isOpen,
        // setIsOpen,

    } = props;

    useEffect( () => {
        if( isOpen === false ){
            clearAll();
        };
    }, [ isOpen ] );


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
                topic_id,
                topic_name,
                message,
            } = item;

            // console.dir( item );


            return (
                <AWGWSL_OneWord
                    key =               { index }
                    isSelected =        { isSelected }
                    audioLength =       { audioLength }
                    foreign =           { foreign }
                    id =                { id }
                    part_of_speech_id = { part_of_speech_id }
                    ru =                { ru }
                    transcription =     { transcription }
                    message = { message }
                    topic_id = { topic_id }
                    topic_name = { topic_name }

                    // list =     { list }
                    // setList =     { setList }


                    
                />
            )

        });

        return div;

    }


    return (
        <div className = 'AW_item AWGWordsSelectedList'>

            <AWGWSL_SelectAll />

            <ScrollContainer height = { height }>
                <div className = 'AWGWSL_list'>
                    { create( list ) }
                </div>
            </ScrollContainer>

        </div>
    )

};

export function AWGWordsSelectedList( props ){

    const wordsSelectedList = useSelector( wordsSelectedListSlice );
    const dispatch = useDispatch();

    return (
        <AWGWordsSelectedListComponent
            { ...props }

            list = { wordsSelectedList.list }
            clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
