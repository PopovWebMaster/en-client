
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';

import './WordsListAsText.scss';
// import { app_audio_play_random } from './../../helpers/app_audio_play_random.js';

import { ButtonsPanel } from './components/ButtonsPanel/ButtonsPanel.js';

import { ListRowForeign }       from './components/ListRowForeign/ListRowForeign.js';
import { ListColumnForeign }    from './components/ListColumnForeign/ListColumnForeign.js';
import { ListRowRu }            from './components/ListRowRu/ListRowRu.js';
import { ListColumnRu }         from './components/ListColumnRu/ListColumnRu.js';







const WordsListAsTextComponent = ( props ) => {

    let {
        
        appWordsList
    } = props;

    let [ isRow, setIsRow ] = useState( true );
    let [ isForeign, setIsForeign ] = useState( true );


    let [ list, setList ] = useState( [] );

    // console.dir( 'appWordsList' );
    // console.dir( appWordsList );

    useEffect( () => {
        let arr = [];
        for( let i = 0; i < appWordsList.length; i++ ){
            let {
                foreign,
                id,
                ru,
            } = appWordsList[ i ];

            arr.push( {
                foreign,
                id,
                ru,
            } );

        };
        setList( arr );


    }, [ appWordsList ] );




    // const create = ( arr, activeRuLang  ) => {

    //     let  span = arr.map( ( item, index ) => {
    //         let {
    //             foreign,
    //             id,
    //             ru,
    //         } = item;

    //         if( activeRuLang ){
    //             // return (
    //             //     <span 
    //             //         key = { index }
    //             //         data-title = { foreign }
    //             //         className = 'forTitle'
    //             //     >{ ru },</span>
    //             // );
    //              return (
    //                 <span 
    //                     key = { index }
    //                     data-title = { foreign }
    //                     className = 'forTitle'
    //                 >{ ru },</span> 
                       
    //             );
    //         }else{
    //             return (
    //                 <span 
    //                     key = { index }
    //                     onClick = { () => { app_audio_play_random( id ) } }
    //                     data-title = { ru }
    //                     className = 'forTitle'
    //                 >{ foreign },</span>
    //             );
    //         };

    //     } );

    //     return span;

    // };

    // const shuffle = () => {
    //     const newArr = [...list];

    //     for (let i = newArr.length - 1; i > 0; i--) {
    //         const j = Math.floor( Math.random() * (i + 1));
    //         [ newArr[i], newArr[j]] = [newArr[j], newArr[i] ];
    //     };

    //     setList( newArr );
    // }


    const createList = ( arr, isRow, isForeign ) => {
        let result = '';

        if( isRow ){
            if( isForeign ){
                result = <ListRowForeign list = { arr }/>
            }else{
                result = <ListRowRu list = { arr }/>
            };
        }else{
            if( isForeign ){
                result = <ListColumnForeign list = { arr }/>
            }else{
                result = <ListColumnRu list = { arr }/>
            };
        };

        return result;

    }






    return (
        <div className = 'wordsListAsText'>

            <ButtonsPanel
                isRow =         { isRow }
                setIsRow =      { setIsRow }
                isForeign =     { isForeign }
                setIsForeign =  { setIsForeign }
                list =          { list }
                setList =       { setList }
            />

            { createList( list, isRow, isForeign ) }
        </div>

    )

};


export function WordsListAsText( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListAsTextComponent
            { ...props }
            appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
