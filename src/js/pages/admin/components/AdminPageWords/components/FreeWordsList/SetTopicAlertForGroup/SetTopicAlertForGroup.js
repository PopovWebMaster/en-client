
import React, { useState, useEffect }   from "react";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as wordsSlice, setCTRL_wordsIdList, setIsOpenTopicAddAlert } from './../../../../../../../redux/admin/wordsSlice.js';

import './SetTopicAlertForGroup.scss';

import { TopicSelectComponent } from './../../../../../../../components/TopicSelectComponent/TopicSelectComponent.js';

import { set_word_list_value_into_store } from './../../../../../../../helpers/set_word_list_value_into_store.js';

const SetTopicAlertForGroupComponent = ( props ) => {

    let {
        CTRL_wordsIdList,
        isOpenTopicAddAlert,
        setCTRL_wordsIdList,
        setIsOpenTopicAddAlert,

    } = props;

    let [ topicId, setTopicId ] = useState( null );

    useEffect( () => {
        if( isOpenTopicAddAlert === false ){
            setCTRL_wordsIdList( [] );
        };

    }, [ isOpenTopicAddAlert ] );

    const clickAddHandler = () => {

        for( let i = 0; i < CTRL_wordsIdList.length; i++ ){
            set_word_list_value_into_store( CTRL_wordsIdList[ i ], { topic_id: topicId } );
        };

        setIsOpenTopicAddAlert( false );
    }

    return (
        <div className = 'setTopicAlertForGroup'>

            <TopicSelectComponent
                isOpen =            { isOpenTopicAddAlert }
                setIsOpen =         { setIsOpenTopicAddAlert }
                value =             { topicId }
                setValue =          { setTopicId }
                clickAddHandler =   { clickAddHandler }
            />

            
        </div>
    )

};


export function SetTopicAlertForGroup( props ){

    const words = useSelector( wordsSlice );
    const dispatch = useDispatch();

    return (
        <SetTopicAlertForGroupComponent
            { ...props }
            CTRL_wordsIdList = { words.CTRL_wordsIdList }
            isOpenTopicAddAlert = { words.isOpenTopicAddAlert }

            setCTRL_wordsIdList = { ( val ) => { dispatch( setCTRL_wordsIdList( val ) ) } }
            setIsOpenTopicAddAlert = { ( val ) => { dispatch( setIsOpenTopicAddAlert( val ) ) } }

        />
    );


}
