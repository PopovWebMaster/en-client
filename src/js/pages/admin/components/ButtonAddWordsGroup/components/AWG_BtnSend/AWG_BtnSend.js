
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWG_BtnSend.scss';

import { selectorData as wordsSelectedListSlice, clearAll, setList } from './../../../../../../redux/admin/wordsSelectedListSlice.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';


import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_word_list_to_store } from './../../../../../../helpers/set_word_list_to_store.js';
import { set_topics_list_to_store } from './../../../../../../helpers/set_topics_list_to_store.js';



const AWG_BtnSendComponent = ( props ) => {

    let {
        list,
        setList,
    } = props;

    let [ isReady, setIsReady ] = useState( false );
    let [ preparedList, setPreparedList ] = useState( [] );
    let [ remainingList, setRemainingList ] = useState( [] );



    useEffect( () => {
        if( preparedList.length > 0 ){
            setIsReady( true );
        }else{
            setIsReady( false );
        };
    }, [ preparedList ] );

    useEffect( () => {
        setPreparedList( get_prepared_list() );
    }, [ list ]);

    const click = () => {
        if( isReady ){

            send_request_to_server({
                route: 'admin/add-group-words-into-words-list',
                data: {
                    groupWordsList: preparedList,
                },
                addKeyName: true,
                addLessonId: true,
                successCallback: ( resp ) => {

                    console.dir( 'resp' );
                    console.dir( resp );

                    if( resp.ok ){
                        if( resp.wordList ){
                            set_word_list_to_store( resp.wordList );
                            setList( remainingList );

                        };
                        if( resp.topicsList ){
                            set_topics_list_to_store( resp.topicsList );
                        }
                    };
                }
            });

        };
    }

    const get_prepared_list = () => {
        let result = [];
        let remainingList = [];

        for( let i = 0; i < list.length; i++ ){
            let { isSelected } = list[ i ];
            if( isSelected ){
                result.push( structuredClone( list[ i ] ) );
            }else{
                remainingList.push( structuredClone( list[ i ] ) );
            };
        };

        setRemainingList( remainingList );

        return result;

    }

    return (
        <AWButtonAdd
            title =         'Добавить'
            isReady =       { isReady }
            clickHandler =  { click }
        />
    )

};


export function AWG_BtnSend( props ){

    const wordsSelectedList = useSelector( wordsSelectedListSlice );
    const dispatch = useDispatch();

    return (
        <AWG_BtnSendComponent
            { ...props }
            list = { wordsSelectedList.list }
            setList = { ( val ) => { dispatch( setList( val ) ) } }

            

        />
    );


}
