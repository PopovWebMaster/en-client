
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TopicSelectComponent.scss';

// import { selectorData as wordsSlice, setCTRL_wordsIdList, setIsOpenTopicAddAlert } from './../../redux/admin/wordsSlice.js';
// import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';

import { AlertWindowContainer } from './../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWTopicSelect } from './../../components/AlertWindowContainer/AWTopicSelect/AWTopicSelect.js';
import { AWButtonAdd } from './../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

const TopicSelectComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        value,
        setValue,
        clickAddHandler = () => {},


    } = props;


    const click = () => {
        clickAddHandler()
        setIsOpen( false );
    }

    return (
        <AlertWindowContainer
            isOpen =    { isOpen }
            setIsOpen = { setIsOpen }
            title =     { 'Тема' }
            width =     { '60vw' }
            height =    { '64vh' }
        >
            <AWTopicSelect
                value =         { value }
                changeHandler = { setValue }
                alwaysIsOpen =  { true }
            />

            <AWButtonAdd 
                title =         { 'Готово' }
                isReady =       { true }
                clickHandler =  { click }
            />

        </AlertWindowContainer>

    )

};


export function TopicSelectComponent( props ){

    // const words = useSelector( wordsSlice );
    // const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <TopicSelectComponentComponent
            { ...props }
            // wordListById = { words.wordListById }
            // topicsListById = { appWords.topicsListById }
            // CTRL_wordsIdList = { words.CTRL_wordsIdList }
            // setCTRL_wordsIdList = { ( val ) => { dispatch( setCTRL_wordsIdList( val ) ) } }
            // setIsOpenTopicAddAlert = { ( val ) => { dispatch( setIsOpenTopicAddAlert( val ) ) } }

        />
    );


}
