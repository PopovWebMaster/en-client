
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonsListSelected.scss';
import { selectorData as testsSlice, setCurrentTestIsChanged } from './../../../../../../../../redux/admin/testsSlice.js';
import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { ButtonAdd } from './../../../../../../../../components/ButtonAdd/ButtonAdd.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';
import { get_lessons_list_from_server } from './vendors/get_lessons_list_from_server.js';

import { OneLessonItem } from './OneLessonItem/OneLessonItem.js';
import { AllCheckedWordsCount } from './AllCheckedWordsCount/AllCheckedWordsCount.js';
import { set_one_test_data_to_store } from './../../../../../../../../helpers/set_one_test_data_to_store.js';
import { save_one_test_data_on_server } from './../../../../../../../../helpers/save_one_test_data_on_server.js';

const LessonsListSelectedComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        currentTestIsChanged,
        setCurrentTestIsChanged,

    } = props;

    let [ lessonsForTest, setLessonsForTest ] = useState( [] );
    let [ isReady, setIsReady ] = useState( false );


    useEffect( () => {
        if( isOpen ){

            setIsReady( false );

            get_lessons_list_from_server( ( list ) => {
                setLessonsForTest( list );
                setIsReady( true );
            } );

        }else{
            setIsReady( false );
            setLessonsForTest( [] );
        };

    }, [ isOpen ] );

    const lessonChackToggle = ( lessonId ) => {

        let arr = [];
        for( let i = 0; i < lessonsForTest.length; i++ ){
            let { id, isChecked } = lessonsForTest[ i ];
            let item = structuredClone( lessonsForTest[ i ] );
            if( id === lessonId ){
                item.isChecked = !isChecked;
            };
            arr.push( item );
        };
        setLessonsForTest( arr );

    }



    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            let {
                description,
                id,
                is_active,
                level_name,
                testId,
                title,
                wordsCount,
                isChecked,
            } = item;

            return (
                <OneLessonItem
                    key =           { index }
                    lessonId =      { id }
                    is_active =     { is_active }
                    level_name =    { level_name }
                    testId =        { testId }
                    title =         { title }
                    description =   { description }

                    wordsCount =    { wordsCount }
                    isChecked =     { isChecked }
                    lessonChackToggle = { lessonChackToggle }

                    
                />
            );

        } );

        return div;

    }

    const send = ( lessonsIdList, callback = () => {} ) => {
        send_request_to_server( {
            route: 'admin/add-lessons-into-test',
            data: {
                lessonsIdList,
            },
            addKeyName: true,
            addTestId: true,
            successCallback: ( resp ) => {

                console.dir( 'resp' );
                console.dir( resp );

                callback( resp );

            }
        }, true );
    };

    const addLessons = () => {

        let lessonsIdList = [];
        for( let i = 0; i < lessonsForTest.length; i++ ){
            let { id, isChecked } = lessonsForTest[ i ];
            if( isChecked === true ){
                lessonsIdList.push( id );
            };
        };
        if( lessonsIdList.length > 0 ){
            if( currentTestIsChanged ){
                save_one_test_data_on_server( ( resp ) => {
                    if( resp.ok ){
                        send( lessonsIdList, ( resp_2 ) => {
                            if( resp_2.ok ){
                                set_one_test_data_to_store( resp_2.oneTestData );
                                setIsOpen( false ); 
                                setCurrentTestIsChanged( false );
                            };
                        } );
                    };
                });

            }else{
                send( lessonsIdList, ( resp ) => {
                    if( resp.ok ){
                        set_one_test_data_to_store( resp.oneTestData );
                        setIsOpen( false ); 
                    };
                } );
            };
        };
    };

    return (
        <div className = 'lessonsListSelected'>

            <AllCheckedWordsCount lessonsForTest = { lessonsForTest }/>

            <ScrollContainer height = { '50vh' }>

                <>{ isReady? create( lessonsForTest ): <>ждёмс...</> }</>

            </ScrollContainer>

            <div className = 'LLS_btn'>
                <ButtonAdd
                    click = { addLessons }
                    title = 'Добавить'
                />
            </div>

            
        </div>
    )

};


export function LessonsListSelected( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <LessonsListSelectedComponent
            { ...props }
            currentTestIsChanged = { tests.currentTestIsChanged }
            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }

        />
    );


}
