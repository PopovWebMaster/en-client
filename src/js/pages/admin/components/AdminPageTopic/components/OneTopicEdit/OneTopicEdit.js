
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneTopicEdit.scss';


import { selectorData as appWordsSlice, setTopicsLiscIsChanges } from './../../../../../../redux/appWordsSlice.js';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';

import { set_topics_list_to_store } from './../../../../../../helpers/set_topics_list_to_store.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';



const OneTopicEditComponent = ( props ) => {

    let {
        topicId,
        topicName,

        topicsListById,
        topicsList,

        setTopicsLiscIsChanges,

    } = props;

    let inpRef = useRef();

    let [ value, setValue ] = useState( topicName );
    let [ isOpen, setIsOpen] = useState( topicName );


    useEffect( () => {
        setValue( topicName );

    }, [ topicName, topicId ] );


    const change = ( e ) => {
        let val = e.target.value;

        setValue( val );

    };

    const enter = ( e ) => {
        if( e.which === 13 ){
            inpRef.current.blur();
            blur();
        };
    }

    const blur = () => {
        let val = value.trim();
        if( val === '' ){
            setValue( topicName );
        }else{
            let arr = [];
            for( let i = 0; i < topicsList.length; i++ ){
                let item = structuredClone( topicsList[ i ] );
                if( item.id === topicId ){
                    item.name = val;
                };
                arr.push( item );

            };

            set_topics_list_to_store( arr );
            setTopicsLiscIsChanges( true );

        };

    }


    const remove = () => {
        send_request_to_server({
            route: 'admin/remove-topic',
            data: {
                topicId,
            },
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );
                if( resp.ok ){
                    if( resp.topicsList ){
                        set_topics_list_to_store( resp.topicsList );
                    };
                    setIsOpen( false );
                };

            },
        }, true);
    }


    return (
        <div className = 'APT_OneTopicEdit_wrap'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Удалить тему'
                width = '40vw'
                height = '23vh'

            >
                <AWConfirm
                    text = { `Вы действительно хотите удалить тему: "${topicName}"?` }
                    type = 'warning'
                    continueHandler = { remove }
                    cancelHandler = { () => { setIsOpen( false ) } }
                    titleContinue = 'Удалить'

                />

            </AlertWindowContainer>

            <div className = 'APT_OneTopic'>

                <input
                    type = 'text'
                    className = 'APT_OneTopic_inp'
                    value = { value }
                    onChange = { change }
                    onKeyDown = { enter }
                    onBlur = { blur }
                    ref = { inpRef }
                />

                <div className = 'APT_OneTopic_remove'>
                    <span onClick = { () => { setIsOpen( true ) } }>Удалить</span>

                </div>



            </div>

           
        </div>
        

    )

};


export function OneTopicEdit( props ){

    const appWords = useSelector( appWordsSlice );
    const dispatch = useDispatch();

    return (
        <OneTopicEditComponent
            { ...props }
            topicsList = { appWords.topicsList }
            topicsListById = { appWords.topicsListById }



            setTopicsLiscIsChanges = { ( val ) => { dispatch( setTopicsLiscIsChanges( val ) ) } }

        />
    );


}
