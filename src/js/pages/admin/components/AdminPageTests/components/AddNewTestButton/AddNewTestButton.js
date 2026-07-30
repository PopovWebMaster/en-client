

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewTestButton.scss';

import { selectorData as testsSlice } from './../../../../../../redux/admin/testsSlice.js';

import { ButtonAdd } from './../../../../../../components/ButtonAdd/ButtonAdd.js';
import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { AWInputText } from './../../../../../../components/AlertWindowContainer/AWInputText/AWInputText.js';
import { AWButtonAdd } from './../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

// import { LESSON_LITLE } from './../../../../../../config/lessons.js';
import { TEST_TITLE } from './../../../../../../config/tests.js';

import { send_request_to_server } from './../../../../../../helpers/send_request_to_server.js';

// import { set_lesson_list_to_store } from './../../../../../../helpers/set_lesson_list_to_store.js';
import { set_tests_list_to_store } from './../../../../../../helpers/set_tests_list_to_store.js';


const AddNewTestButtonComponent = ( props ) => {

    let {
        testsList,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    let [ newTitle, setNewTitle ] = useState( '' );

    console.dir( 'testsList<<<<<<<<<<' );
    console.dir( testsList );


    useEffect( () => {
        if( isOpen ){
            setNewTitle( `Тест ${testsList.length + 1}` );
        }else{
            setNewTitle( '' );
        };

    }, [ isOpen ] );


    const click = () => {
        setIsOpen( true );

    }

    const send = () => {

        send_request_to_server({
            route: 'admin/add-new-test',
            data: {
                testTitle: newTitle,
            },
            addKeyName: true,
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );
                if( resp.ok ){
                    if( resp.testsList ){
                        set_tests_list_to_store( resp.testsList );
                    };
                    setIsOpen( false );
                };


            },
        }, true);
        

    }
   

    return (
        <div className = 'APT_AddNewTestButton'>
            <AlertWindowContainer
                isOpen  = { isOpen }
                setIsOpen  = { setIsOpen }
                title = 'Добавить тест'
                width = '40vw'
                height = '40vh'
            >

                <AWInputText
                    title =     { 'Название теста' }
                    value =     { newTitle }
                    onChange =  { setNewTitle }
                    max =       { TEST_TITLE.MAX }
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
                title = 'Добавить тест'
            />
        </div>

    )

};


export function AddNewTestButton( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <AddNewTestButtonComponent
            { ...props }
            testsList = { tests.testsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
