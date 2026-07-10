
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SelectedLessons.scss';

import { get_lessons_list_from_server } from './../vendors/get_lessons_list_from_server.js';

import { send_request_to_server } from './../../../../../../../helpers/send_request_to_server.js';

import { OFL_Wait } from './../OFL_Wait/OFL_Wait.js';
import { OFL_ShowHideContainer } from './../OFL_ShowHideContainer/OFL_ShowHideContainer.js';

import { ScrollContainer } from './../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { AWButtonAdd } from './../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';
import { OFL_OneLesson } from './../OFL_OneLesson/OFL_OneLesson.js';

import { set_word_list_to_store } from './../../../../../../../helpers/set_word_list_to_store.js';




const SelectedLessonsComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        wordId,

    } = props;

    let [ isWait, setIsWait ] = useState( false );
    let [ list, setList ] = useState( [] );
    let [ isReady, setIsReady ] = useState( true );

    useEffect( () => {
        let res = false;
        for( let i = 0; i < list.length; i++ ){
            let { isSelected } = list[ i ];
            if( isSelected === true ){
                res = true;
                break;
            };
        };
        if( res !== isReady ){
            setIsReady( res );
        };

    }, [ list ] );

    useEffect( () => {
        if( isOpen ){

            setIsWait( true );

            get_lessons_list_from_server( ( respList ) => {

                console.dir( 'respList' );
                console.dir( respList );

                setList( respList );
                setIsWait( false );

            } );

        }else{
            setIsWait( null );
            setList( [] );
        };

    }, [ isOpen ] );

    const addWords = () => {
        if( isReady ){
            
            let nextLessonId = null;
            for( let i = 0; i < list.length; i++ ){
                let { isSelected, id } = list[ i ];
                if( isSelected === true ){
                    nextLessonId = id;
                    break;
                };
            };

            send_request_to_server( {
                route: 'admin/move-one-word-to-lesson',
                data: {
                    nextLessonId,
                    wordId,
                },
                addKeyName: true,
                addLessonId: true,
                successCallback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );

                    if( resp.ok ){
                        if( resp.wordList ){
                            set_word_list_to_store( resp.wordList );
                            setIsOpen( false );

                        };
                    }


                },
            }, true );
        };

    };

    const toggleSelect = ( wordId ) => {

        let arr = [];
        for( let i = 0; i < list.length; i++ ){
            let item = structuredClone( list[ i ] );
            if( item.id === wordId ){
                item.isSelected = !item.isSelected;
            }else{
                item.isSelected = false;
            };
            arr.push( item );
        };
        setList( arr );

    }

    const create = ( arr ) => {
    
        let div = arr.map( ( item, index ) => {
            let {
                description,
                id,
                isSelected,
                is_active,
                level_name,
                order,
                title,
                wordsCount,
            } = item;


            return (
                <OFL_OneLesson
                    key = { index }

                    description =   { description }
                    id =            { id }
                    isSelected =    { isSelected }
                    is_active =     { is_active }
                    level_name =    { level_name }
                    order =         { order }
                    title =         { title }
                    wordsCount =    { wordsCount }

                    toggleSelect = { toggleSelect }
                />
            );

        } );

        return div;

    }
    




    return (
        <div className = 'OFW_SelectedLessons'>

            <OFL_ShowHideContainer isWait = { isWait }>

                <div className = 'OFL_SL_listWrap'>
                    <ScrollContainer height = '65vh'>

                        { create( list ) }
                        

                    </ScrollContainer>
                </div>

                <AWButtonAdd
                    title =         'Отправить'
                    isReady =       { isReady }
                    clickHandler =  { addWords }
                />

            </OFL_ShowHideContainer>


            <OFL_Wait isWait = { isWait }/>

        </div>
    )

};


export function SelectedLessons( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <SelectedLessonsComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
