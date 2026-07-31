
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonsListSelected.scss';
// import { selectorData as wordEditSlice, setNewWordContainerIsOpen } from './../../../../../../redux/admin/wordEditSlice.js';
import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';
import { get_lessons_list_from_server } from './vendors/get_lessons_list_from_server.js';

import { OneLessonItem } from './OneLessonItem/OneLessonItem.js';

const LessonsListSelectedComponent = ( props ) => {

    let {
        isOpen,

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

            console.dir( item );

            return (
                <OneLessonItem
                    key =           { index }
                    lessonId =      { id }
                    is_active =     { is_active }
                    level_name =    { level_name }
                    testId =        { testId }
                    title =         { title }
                    wordsCount =    { wordsCount }
                    isChecked =     { isChecked }

                    
                />
            );

        } );

        return div;

    }

    return (
        <div className = 'lessonsListSelected'>

            <ScrollContainer height = { '60vh' }>

                <>{ isReady? create( lessonsForTest ): <>ждёмс...</> }</>

            </ScrollContainer>
        </div>
    )

};


export function LessonsListSelected( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <LessonsListSelectedComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
