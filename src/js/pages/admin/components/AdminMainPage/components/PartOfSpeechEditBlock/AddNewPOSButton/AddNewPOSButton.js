
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AddNewPOSButton.scss';

// import { selectorData as lessonsSlice } from './../../../../../../redux/admin/lessonsSlice.js';

import { ButtonAdd }            from './../../../../../../../components/ButtonAdd/ButtonAdd.js';
import { AlertWindowContainer } from './../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText }          from './../../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd }          from './../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { send_request_to_server }           from './../../../../../../../helpers/send_request_to_server.js';
import { set_part_of_speech_list_to_store } from './../../../../../../../helpers/set_part_of_speech_list_to_store.js';

const AddNewPOSButtonComponent = ( props ) => {

    let {
        // lessonList,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ newName, setNewName ] = useState( '' );


    useEffect( () => {
        setNewName( '' );
    }, [ isOpen ] );


    const click = () => {
        setIsOpen( true );
    }

    const send = () => {
        let val = newName.trim();
        if( val !== '' ){
            send_request_to_server({
                route: 'admin/add-new-part-of-speech',
                data: {
                    partOfSpeechName: newName,
                },
                successCallback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );
                    if( resp.ok ){
                        if( resp.partOfSpeechList ){
                            set_part_of_speech_list_to_store( resp.partOfSpeechList );
                        };
                        setIsOpen( false );
                    };
                },
            }, true);
        };

    }

    const change = ( e ) => {
        let val = e.target.value;
        setNewName( val );

    };
   
    return (
        <div className = 'MP_AddNewPOSButton'>
            <AlertWindowContainer
                isOpen  = { isOpen }
                setIsOpen  = { setIsOpen }
                title = 'Добавить часть речи'
                width = '40vw'
                height = '40vh'
            >

                <AWInputText
                    title =     { 'Название' }
                    value =     { newName }
                    onChange =  { change }
                    max =       { 40 }
                />

                <AWButtonAdd
                    title = 'Добавить'
                    isReady = { true }
                    clickHandler = { send }
                />


            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em',
                }}
                click = { click }
                title = 'Добавить часть речи'
            />
        </div>

    )

};


export function AddNewPOSButton( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <AddNewPOSButtonComponent
            { ...props }
            // lessonList = { lessons.lessonList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
