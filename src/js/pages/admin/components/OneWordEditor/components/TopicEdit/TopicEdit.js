
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TopicEdit.scss';

import { selectorData as wordsSlice, setCTRL_wordsIdList, setIsOpenTopicAddAlert } from './../../../../../../redux/admin/wordsSlice.js';
import { selectorData as appWordsSlice } from './../../../../../../redux/appWordsSlice.js';
import { key_up_event_for_document } from './vendors/key_up_event_for_document.js';

const TopicEditComponent = ( props ) => {

    let {
        wordId,

        wordListById,
        topicsListById,
        CTRL_wordsIdList,
        setCTRL_wordsIdList,
        setIsOpenTopicAddAlert,

    } = props;

    let [ topicId, setTopicId ] = useState( null );
    let [ topicName, setTopicName ] = useState( '' );

    useEffect( () => {
        if( wordListById[ wordId ] ){
            let { topic_id } = wordListById[ wordId ];
            setTopicId( topic_id );
        }else{
            setTopicId( null );
        };

    }, [ wordId, wordListById ] );

    useEffect( () => {
        let name = '(Пусто)'
        if( topicId !== null ){
            if( topicsListById[ topicId ] ){
                name = topicsListById[ topicId ].name;
            };
        };
        setTopicName( name );


    }, [ topicId  ] ); 

    const add_remove_id_on_list = ( id ) => {
        let arr = [];
        if( CTRL_wordsIdList.indexOf( id ) === -1 ){
            arr = [ ...CTRL_wordsIdList, id ];
        }else{
            for( let i = 0; i < CTRL_wordsIdList.length; i++ ){
                if( CTRL_wordsIdList[ i ] !== id ){
                    arr.push( CTRL_wordsIdList[ i ] );
                }
            };
        };
        setCTRL_wordsIdList( arr );
    }

    const click = ( e ) => {
        add_remove_id_on_list( wordId );
        if( e.ctrlKey ){
            document.onkeyup = key_up_event_for_document;
        }else{
            setIsOpenTopicAddAlert( true );
        };
    }

    const getCTRK_className = ( arr, id ) => {

        let result = '';
        if( arr.indexOf( id ) !== -1 ){
            result = 'OFW_TopicEdit_btn_CTRL'
        };
        return result;
    }
     
    return (
        <div className = 'OFW_TopicEdit'>
            <div
                className = { `OFW_TopicEdit_btn ${ getCTRK_className( CTRL_wordsIdList, wordId ) }` }
                onClick = { click }
                title = { '"Ctrl"+ "mouse left click" для группового присвоения темы' }
            >
                <span className = 'OFW_TE_btn_title'>Тема:</span>
                <span className = 'OFW_TE_btn_name'>{ topicName }</span>
            </div>

        </div>
    )

};


export function TopicEdit( props ){

    const words = useSelector( wordsSlice );
    const appWords = useSelector( appWordsSlice );


    
    const dispatch = useDispatch();

    return (
        <TopicEditComponent
            { ...props }
            wordListById = { words.wordListById }
            topicsListById = { appWords.topicsListById }
            CTRL_wordsIdList = { words.CTRL_wordsIdList }


            setCTRL_wordsIdList = { ( val ) => { dispatch( setCTRL_wordsIdList( val ) ) } }
            setIsOpenTopicAddAlert = { ( val ) => { dispatch( setIsOpenTopicAddAlert( val ) ) } }

        />
    );


}
