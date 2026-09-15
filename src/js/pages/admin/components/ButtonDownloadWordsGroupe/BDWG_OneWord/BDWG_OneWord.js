
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BDWG_OneWord.scss';

import { selectorData as appWordsSlice } from './../../../../../redux//appWordsSlice.js';




const BDWG_OneWordComponent = ( props ) => {

    let {
        isSelected,
        audioLength,
        foreign,
        id,
        part_of_speech_id,
        ru,
        // transcription,

        list,
        setList,

        partOfSpeechListById,

    } = props;

    let [ POSName, setPOSName ] = useState( '' );

    useEffect( () => {
        if( partOfSpeechListById[ part_of_speech_id ] ){
            let { name } = partOfSpeechListById[ part_of_speech_id ];
            setPOSName( name );
        };

    }, [ part_of_speech_id ] );

    const click = () => {
        let arr = [];
        for( let i = 0; i < list.length; i++ ){
            let item = structuredClone( list[ i ] );
            if( item.id === id ){
                item.isSelected = !item.isSelected;
            };
            arr.push( item );
        };
        setList( arr );
    }



    return (
        <div
            className = { `BDWG_OneWord ${isSelected? 'isSelected': ''}` }
            onClick = { click }
        >

            <div className = 'BDWG_OneWord_selected'>
                <span className = { `icon ${isSelected? 'icon-ok': '' }` }></span>
            </div>

            <div className = 'BDWG_OneWord_POS'>
                { part_of_speech_id === null? '': ( <span>{ POSName }</span> ) }
            </div>

            <div className = 'BDWG_OneWord_word'>
                <span>{ `${foreign} - ${ru}` }</span>
            </div>
            <div className = { `BDWG_OneWord_audio ${audioLength === 0? 'audioRed': ''}` }>
                <span>audio:</span>
                <span>{ audioLength }</span>
            </div>

            
        </div>
    )

};


export function BDWG_OneWord( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <BDWG_OneWordComponent
            { ...props }
            partOfSpeechListById = { appWords.partOfSpeechListById }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
