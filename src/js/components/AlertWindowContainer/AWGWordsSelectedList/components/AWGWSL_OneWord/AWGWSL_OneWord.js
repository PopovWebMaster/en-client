
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGWSL_OneWord.scss';

// import { selectorData as appWordsSlice } from './../../../../../redux//appWordsSlice.js';
import { selectorData as appWordsSlice } from './../../../../../redux/appWordsSlice.js';
import { selectorData as wordsSelectedListSlice, setList } from './../../../../../redux/admin/wordsSelectedListSlice.js';






const AWGWSL_OneWordComponent = ( props ) => {

    let {
        isSelected,
        audioLength,
        foreign,
        id,
        part_of_speech_id,
        topic_id,
        topic_name,
        ru,
        transcription,
        message = '',

        list,
        setList,

        partOfSpeechListById,

        topicsListById,

    } = props;

    let [ POSName, setPOSName ] = useState( '' );
    let [ topicName, setTopicName ] = useState( '' );

    useEffect( () => {
        let name = '(Пусто)'
        if( topic_id === null ){
            if( topic_name !== '' ){
                name = topic_name;
            };
        }else{
            if( topicsListById[ topic_id ] ){
                name = topicsListById[ topic_id ].name;
            };
        };
        setTopicName( name );

    }, [ topic_id  ] ); 

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
            className = { `AWGWSL_OneWord ${isSelected? 'isSelected': ''}` }
            onClick = { click }
        >
            <div className = 'AWGWSL_OneWord_line_1'>
                <div className = 'AWGWSL_OneWord_selected'>
                    <span className = { `icon ${isSelected? 'icon-ok': '' }` }></span>
                </div>

                <div className = 'AWGWSL_OneWord_POS'>
                    { part_of_speech_id === null? '': ( <span>{ POSName }</span> ) }
                </div>


                <div className = 'AWGWSL_OneWord_word'>
                    <span>{ `${foreign} - ${ru}` }</span>
                </div>

                <div className = 'AWGWSL_OneWord_transcription'>
                    <span>{ transcription === ''? '': `/${transcription}/` }</span>
                </div>
                <div className = { `AWGWSL_OneWord_audio ${audioLength === 0? 'audioRed': ''}` }>
                    <span>audio:</span>
                    <span>{ audioLength }</span>
                </div>

            </div>

            <div className = 'AWGWSL_OneWord_line_2'>
                <div className = 'AWGWSL_OneWord_line_2_left'>
                    { message === ''? '': <span className = 'AWGWSL_OneWord_message'>{ message }</span> }
                    
                </div>

                <div className = 'AWGWSL_OneWord_line_2_right'>
                    <div className = 'AWGWSL_OneWord_topic'>
                        <span className = 'AWGWSL_OneWord_title'>Тема:</span>
                        <span className = 'AWGWSL_OneWord_name'>{ topicName }</span>
                    </div>
                </div>
            </div>

            
        </div>
    )

};


export function AWGWSL_OneWord( props ){

    const appWords = useSelector( appWordsSlice );
    const wordsSelectedList = useSelector( wordsSelectedListSlice );


    
    const dispatch = useDispatch();

    return (
        <AWGWSL_OneWordComponent
            { ...props }
            partOfSpeechListById = { appWords.partOfSpeechListById }
            topicsListById = { appWords.topicsListById }
            list = { wordsSelectedList.list }

            setList = { ( val ) => { dispatch( setList( val ) ) } }

        />
    );


}
