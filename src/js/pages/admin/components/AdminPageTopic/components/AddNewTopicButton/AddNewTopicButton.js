

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewTopicButton.scss';

import { selectorData as appWordsSlice } from './../../../../../../redux/appWordsSlice.js';


import { ButtonAdd } from './../../../../../../components/ButtonAdd/ButtonAdd.js';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { AWShowErrors } from './../../../../../../components/AlertWindowContainer/AWShowErrors/AWShowErrors.js';


import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_topics_list_to_store } from './../../../../../../helpers/set_topics_list_to_store.js';



const AddNewTopicButtonComponent = ( props ) => {

    let {
        topicsList,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ newTopic, setNewTopic ] = useState( '' );
    let [ errors, setErrors ] = useState( [] );



    useEffect( () => {
        setNewTopic( '' );
    }, [ isOpen ] );


    const click = () => {
        setIsOpen( true );
    }

    const chackName = ( name ) => {
        let result = false;
        let val = name.trim();
        if( val !== '' ){
            let unic = true;
            for( let i = 0; i < topicsList.length; i++ ){
                if( topicsList[ i ].name === val ){
                    unic = false;
                    break;
                };
            };
            result = unic;
        };

        return result;

    }

    const send = () => {

        let valid = chackName( newTopic );
        if( valid ){
            send_request_to_server({
                route: 'admin/add-new-topic',
                data: {
                    topicName: newTopic.trim(),
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
        }else{
            if( newTopic.trim() === '' ){
                setErrors( [ 'Строка нельзя пустая!' ] );
            }else{
                setErrors( [ 'Такая тема уже есть, нельзя так!' ] );
            };

        };



        
        

    }


    const change = ( e ) => {
        let val = e.target.value;
        setNewTopic( val );
        setErrors( [] );

    };
   

    return (
        <div className = 'APT_AddNewTopicButton'>
            <AlertWindowContainer
                isOpen  = { isOpen }
                setIsOpen  = { setIsOpen }
                title = 'Добавить тему'
                width = '40vw'
                height = '40vh'
            >

                <div className = 'APT_AddNewTopic_wrap'>
                    <AWInputText
                        title =     { 'Название темы' }
                        value =     { newTopic }
                        onChange =  { change }
                        max =       { 250 }
                    />

                    <AWShowErrors
                        errors = { errors }
                    />

                    <AWButtonAdd
                        title = 'Добавить'
                        isReady = { true }
                        clickHandler = { send }
                    />
                </div>

                


            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em',
                }}
                click = { click }
                title = 'Добавить тему'
            />
        </div>

    )

};


export function AddNewTopicButton( props ){

    const appWords = useSelector( appWordsSlice );

    // const dispatch = useDispatch();

    return (
        <AddNewTopicButtonComponent
            { ...props }
            topicsList = { appWords.topicsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
