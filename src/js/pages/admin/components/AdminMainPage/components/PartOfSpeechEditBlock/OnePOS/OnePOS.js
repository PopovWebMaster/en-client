
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OnePOS.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged } from './../../../../../../../redux/admin/mainPageSlise.js';


import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';

// import { send_request_to_server }           from './../../../../../../../helpers/send_request_to_server.js';
import { set_POS_value_into_store }         from './../../../../../../../helpers/set_POS_value_into_store';
import { send_request_to_server }           from './../../../../../../../helpers/send_request_to_server.js';
// import { set_lesson_list_to_store }         from './../../../../../../../helpers/set_lesson_list_to_store.js';

import { save_main_page_data_on_server }    from './../../../../../../../helpers/save_main_page_data_on_server.js';
import { set_main_page_data_to_store }      from './../../../../../../../helpers/set_main_page_data_to_store.js';
import { set_part_of_speech_list_to_store } from './../../../../../../../helpers/set_part_of_speech_list_to_store.js';

import { AlertWindowContainer } from './../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';


const OnePOSComponent = ( props ) => {

    let {
        id,
        name,

        mainPageDataIsChanged,
        setMainPageDataIsChanged,

    } = props;
    let [ isOpen, setIsOpen ] = useState( false );

    let [ value, setValue ] = useState( name );
    useEffect( () => {
        setValue( name );
    }, [ id, name ] );

    const blure = () => {

        let val = value.trim();
        if( val !== name ){
            set_POS_value_into_store( id, { name: val } )
        };

    }

    const send_remove = () => {
        send_request_to_server({
            route: 'admin/remove-part-of-speech',
            data: {
                partOfSpeechId: id,
            },
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );
                if( resp.ok ){
                    if( resp.partOfSpeechList ){
                        set_part_of_speech_list_to_store( resp.partOfSpeechList );
                    };
                };

                setIsOpen( false );
            },
        }, true);
    }


    const remove = () => {
        if( mainPageDataIsChanged ){

            save_main_page_data_on_server(( resp ) => {
                if( resp.ok ){
                    if( resp.mainPage ){
                        set_main_page_data_to_store( resp.mainPage );
                        setMainPageDataIsChanged( false );

                        send_remove();
                    };
                };
            });

        }else{
            send_remove()
        };
    };


   
    return (
        <div className = 'MP_OnePOS'>
            <AlertWindowContainer
                isOpen  = { isOpen }
                setIsOpen  = { setIsOpen }
                title = 'Удаление части речи'
                width = '40vw'
                height = '25vh'
            >



                <AWConfirm
                    text = { [ `Вы действительно хотите удалить часть речи "${name}"?`, 'Если она используется в словах, то их все прийдётся перенастраивать вручную' ] }  // 'string' || [ 'string', 'string', ... , 'string', ]

                    type = 'warning'

                    continueHandler = { remove }
                    cancelHandler = { () => { setIsOpen( false ) } }
            
                    titleContinue = 'Удалить'
                    titlecancel = 'Отмена'
                />


            </AlertWindowContainer>

            <div className = 'MP_OnePOS_id'>
                <span>id: { id }</span>
            </div>

            <div className = 'MP_OnePOS_name'>
                <OC_Input
                    title = ''
                    value = { value }
                    setValue = { setValue }
                    max = { 40 }
                    blure = { blure }

                />
            </div>

            <div className = 'MP_OnePOS_remove'>
                <span
                    onClick = { () => { setIsOpen( true ) } }
                ><span className = 'icon-trash icon'></span>Удалить</span>
                
            </div>
        </div>

    )

};


export function OnePOS( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <OnePOSComponent
            { ...props }
            mainPageDataIsChanged = { mainPage.mainPageDataIsChanged }
            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }

        />
    );


}
