
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RemoveWordBtn.scss';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';


import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWConfirm } from './../../../../../../components/AlertWindowContainer/AWConfirm/AWConfirm.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';
import { set_word_list_to_store } from './../../../../../../helpers/set_word_list_to_store.js';
import { save_word_list_changes_on_server } from './../../../../../../helpers/save_word_list_changes_on_server.js';



const RemoveWordBtnComponent = ( props ) => {

    let {
        wordId,

        wordListById,
        wordListIsChanged,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ isOpenConfirmSave, setIsOpenConfirmSave ] = useState( false );



    let [ word, setWord ] = useState( '' );

    useEffect( () => {

        if( wordListById[ wordId ]){
            let { foreign } = wordListById[ wordId ];
            setWord( foreign );
        }else{
            setWord( '' );
        };

    }, [ wordId ] );

    const remove = () => {

        send_request_to_server({
            route: 'admin/remove-word',
            data: {
                foreignWordId: wordId,
            },
            addKeyName: true,
            addLessonId: true,
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                if( resp.ok ){
                    set_word_list_to_store( resp.wordList );
                    setIsOpen( false );
                    setIsOpenConfirmSave( false );
                };


            },
        }, true );

    }

    const removeWithSaving = () => {

        save_word_list_changes_on_server( ( resp ) => {
            if( resp.ok ){
                set_word_list_to_store( resp.wordList );
                remove();
            };
            
        } );
    }

    const removeHandler = () => {
        if( wordListIsChanged ){
            setIsOpen( false );
            let timerId = setTimeout( () => {
                setIsOpenConfirmSave( true );
                clearTimeout( timerId );
            }, 200 );

        }else{
            remove();
        };

    }




    return (<>
        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            title = 'Удаление'
            width = '30em'
            height = '20vh'
        >

            <AWConfirm
                text = { `Подтвердите удавления слова "${word}"` }  // 'string' || [ 'string', 'string', ... , 'string', ]

                type = 'warning' // 'confirm' 'warning'

                continueHandler = { removeHandler }
                cancelHandler = { () => { setIsOpen( false ) } }
        
                titleContinue = 'Удалить'
                titlecancel = 'Отмена'
            />
        </AlertWindowContainer>

        <AlertWindowContainer
            isOpen = { isOpenConfirmSave }
            setIsOpen = { setIsOpenConfirmSave }
            title = 'Ещё кое-сто'
            width = '30em'
            height = '20vh'
        >
            <AWConfirm
                text = { `Сохранить имеющиеся изменения перед удалением?` }  // 'string' || [ 'string', 'string', ... , 'string', ]

                type = 'confirm' // 'confirm' 'warning'

                continueHandler = { removeWithSaving }
                cancelHandler = { remove }
        
                titleContinue = 'Сохранить'
                titlecancel = 'Не сохранять'
            />
        </AlertWindowContainer>

        <div
            className = 'OFW_RemoveWordBtn'
            onClick = { () => { setIsOpen( true ) } }
        >
            <span className = 'icon-trash icon'></span>
            <span className = 'text'>Удалить</span>

        </div>
    </>)

};


export function RemoveWordBtn( props ){

    const words = useSelector( wordsSlice );


    // const dispatch = useDispatch();

    return (
        <RemoveWordBtnComponent
            { ...props }
            wordListById = { words.wordListById }
            wordListIsChanged = { words.wordListIsChanged }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
