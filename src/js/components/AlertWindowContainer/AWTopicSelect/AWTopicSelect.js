
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as appWordsSlice } from './../../../redux/appWordsSlice.js';

import './AWTopicSelect.scss';

const AWTopicSelectComponent = ( props ) => {

    let {
        value,
        changeHandler,

        alwaysIsOpen = false,
        height = '40vh',

        topicsList,
        topicsListById,
        

    } = props;

    let [ topicsIsOpen, setTopicsIsOpen ] = useState( false );
    let [ topicNameValue, setTopicNameValue ] = useState( '(Пусто)' );

    useEffect( () => {
        if( value === null ){
            setTopicNameValue( '(Пусто)');
        }else{
            if( topicsListById[ value ] ){
                let { name } = topicsListById[ value ];
                setTopicNameValue( name );
            }else{
                changeHandler( null );
            };
        };
    }, [ value ] );

    useEffect(() => {
        if( alwaysIsOpen ){
            setTopicsIsOpen( true );
        };

    }, []);

    const topicClick = ( name, id ) => {
        setTopicNameValue( name );
        changeHandler( id );

        if( alwaysIsOpen === false ){
            setTopicsIsOpen( false );
        };

    }



    const createTopicsList = ( arr, tipicId ) => {

        let li = arr.map( ( item, index ) => {

            let { name, id } = item;

            if( index === 0 ){
                return (<React.Fragment
                    key = { index }
                >
                    <li 
                        onClick = { () => { topicClick( '(Пусто)', null ); } }
                        className = { `${ null === tipicId? 'isSelected': ''}` }
                    >{ '(Пусто)' }</li>
                    <li 
                        onClick = { () => { topicClick( name, id ); } }
                        className = { `${ id === tipicId? 'isSelected': ''}` }
                    >
                        <span className = 'AW_CDD_list_topic'>{ name }</span>
                    </li>
                </React.Fragment>);
            }else{
                return (
                    <li
                        key = { index }
                        onClick = { () => { topicClick( name, id ); } }
                        className = { `${ id === tipicId? 'isSelected': ''}` }
                    >
                        <span className = 'AW_CDD_list_topic'>{ item.name }</span>
                    </li>
                );
            };

        } );

        return li;

    }

    const changeIsOpen = ( val ) => {
        if( alwaysIsOpen === false ){
            setTopicsIsOpen( val );
        };
    }

    return (
        <div className = { `AW_item AWTopicSelect ${alwaysIsOpen? 'alwaysIsOpen': ''}` }>
            <h3>Темы:</h3>
            <div className = 'AW_item_topic' >

                <h4 onClick = { () => { changeIsOpen( !topicsIsOpen ) } }>
                    <span className = 'AW_item_topic_appir'>
                        { topicNameValue }
                    </span>
                </h4>

                <div 
                    className = 'AW_CDD_btn'
                    onClick = { () => { changeIsOpen( !topicsIsOpen ) }}
                >
                    <span className = { `AW_CDD_btn_icon ${topicsIsOpen? 'icon-up-open-1': 'icon-down-open-1'}` }></span>
                </div>

                { topicsIsOpen? (
                    <ul className = 'AW_CDD_list' style = { { height } }>
                        { createTopicsList( topicsList, value ) }
                    </ul>
                ): '' }
                
            </div>
        </div>
    )

};

export function AWTopicSelect( props ){

    // const layout = useSelector( layoutSlice );
    const appWords = useSelector( appWordsSlice );

    
    // const dispatch = useDispatch();

    return (
        <AWTopicSelectComponent
            { ...props }
            // categoryList = { layout.categoryList }
            // categoryListById = { layout.categoryListById }
            // eventList = { layout.eventList }
            // eventListById = { layout.eventListById }
            topicsList = { appWords.topicsList }
            topicsListById = { appWords.topicsListById }



            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
