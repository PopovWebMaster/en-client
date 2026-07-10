

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SecectedFreeWords.scss';

import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';
import { SFW_Wait } from './SFW_Wait/SFW_Wait.js';
import { SWF_ShowHideContainer } from './SWF_ShowHideContainer/SWF_ShowHideContainer.js';
import { ScrollContainer } from './../../../../../../../../components/ScrollContainer/ScrollContainer.js';
import { AWButtonAdd } from './../../../../../../../../components/AlertWindowContainer/AWButtonAdd/AWButtonAdd.js';

import { get_free_words_list_from_server } from './vendors/get_free_words_list_from_server.js';

import { SFW_OneFreeWord } from './SFW_OneFreeWord/SFW_OneFreeWord.js';
import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js';
import { set_word_list_to_store } from './../../../../../../../../helpers/set_word_list_to_store.js';



const SecectedFreeWordsComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

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

            get_free_words_list_from_server( ( respList ) => {

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
            let wordsIdList = [];
            for( let i = 0; i < list.length; i++ ){
                let { isSelected, id } = list[ i ];
                if( isSelected === true ){
                    wordsIdList.push( id );
                };
            };

            send_request_to_server( {
                route: 'admin/move-free-words-to-lesson',
                data: {
                    wordsIdList,
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
                item.isSelected = !item.isSelected
            };
            arr.push( item );
        };
        setList( arr );


    }

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let {
                foreign,
                id,
                isSelected,
                ru,
                transcription,
                audio,
            } = item;

            return (
                <SFW_OneFreeWord
                    key = { index }

                    id =            { id }
                    foreign =       { foreign }
                    ru =            { ru }
                    transcription = { transcription }
                    audio =         { audio }
                    isSelected =    { isSelected }

                    toggleSelect = { toggleSelect }
                />
            );

        } );

        return div;

    }






    return (
        <div className = 'OLE_SecectedFreeWords'>

            <SWF_ShowHideContainer isWait = { isWait }>
                <div className = 'OLE_SFW_listWrap'>
                    <ScrollContainer height = '65vh'>

                        { create( list ) }
                        

                    </ScrollContainer>
                </div>

                <AWButtonAdd
                    title =         'Переместить'
                    isReady =       { isReady }
                    clickHandler =  { addWords }
                />


            </SWF_ShowHideContainer>

           <SFW_Wait isWait = { isWait }/>

        </div>

       
    )

};


export function SecectedFreeWords( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <SecectedFreeWordsComponent
            { ...props }
            // currentPageTitle = { lessons.currentPageTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
