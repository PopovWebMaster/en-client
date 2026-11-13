
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';

import './WordsListAsText.scss';

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

        
        <div id = 'wordsListAsText'>
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
