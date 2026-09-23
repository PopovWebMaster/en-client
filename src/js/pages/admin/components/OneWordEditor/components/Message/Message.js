
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './Message.scss';

import { selectorData as wordsSlice, setCTRL_wordsIdList, setIsOpenTopicAddAlert } from './../../../../../../redux/admin/wordsSlice.js';
import { selectorData as appWordsSlice } from './../../../../../../redux/appWordsSlice.js';

const MessageComponent = ( props ) => {

    let {
        wordId,

        wordListById,
        topicsListById,


    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        if( wordListById[ wordId ] ){
            let { message } = wordListById[ wordId ];
            setValue( message );
        }else{
            setTopicId( '' );
        };

    }, [ wordId, wordListById ] );



    return (
        <div className = 'OFW_Message'>
            <span>{ value }</span>

        </div>
    )

};


export function Message( props ){

    const words = useSelector( wordsSlice );
    const appWords = useSelector( appWordsSlice );


    
    const dispatch = useDispatch();

    return (
        <MessageComponent
            { ...props }
            wordListById = { words.wordListById }
            topicsListById = { appWords.topicsListById }
            CTRL_wordsIdList = { words.CTRL_wordsIdList }


            setCTRL_wordsIdList = { ( val ) => { dispatch( setCTRL_wordsIdList( val ) ) } }
            setIsOpenTopicAddAlert = { ( val ) => { dispatch( setIsOpenTopicAddAlert( val ) ) } }

        />
    );


}
