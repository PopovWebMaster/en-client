
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AlphaScrollButtons.scss';


import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js';
import { WORDS_LIST_SORT_BY } from './../../../../../config/wordsList.js';

const AlphaScrollButtonsComponent = ( props ) => {

    let {
        wordList,
        wordsListSortingValue,
    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {
        if( wordsListSortingValue === WORDS_LIST_SORT_BY.FOREIGN_ALPHABET ){
            setList( getList() );
        }else{
            setList( [] );
        };

    }, [
        wordList,
        wordsListSortingValue,
    ]);

    const click = ( symb ) => {
        console.dir( 'symb' );
        console.dir( symb );
        let oneWordEditor = document.querySelectorAll( '.oneWordEditor' );
        if( oneWordEditor ){
            for( let i = 0; i < oneWordEditor.length; i++ ){
                let OFW_WordForeign = oneWordEditor[ i ].querySelector( '.OFW_WordForeign' );
                if( OFW_WordForeign ){
                    let OWE_WordInput_inp = OFW_WordForeign.querySelector( '.OWE_WordInput_inp' );
                    let val = OWE_WordInput_inp.value.trim();
                    if( val[ 0 ] ){
                        if( val[ 0 ] !== '' ){
                            let first = val[ 0 ].toLowerCase();
                            if( symb === first ){
    
                                oneWordEditor[ i ].scrollIntoView( {behavior: "smooth", block: "start", inline: "start"});
                                break;
                              
        
                            }
                        }
                    }
                }
            }

        }else{
            console.error( 'не могу найти класс .oneWordEditor' )
        }
        

        // OWE_WordInput_inp


    }

    const create = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            return (
                <span
                    key = { index }
                    onClick = { () => {
                        click( item )
                    } }
                >{item.toUpperCase()}</span>
            );
        } );

        return span;

    };

    const getList = () => {
        let result = [];

        let obj = {};
        for( let i = 0; i < wordList.length; i++ ){
            let { foreign } = wordList[ i ];
            if( foreign[ 0 ] ){
                let first = foreign[ 0 ].trim();
                if( first !== '' ){
                    obj[ first.toLowerCase() ] = true;
                };
            };
        };

        result = Object.keys( obj );
        return result;
    }






    return (
            <div className = 'FWL_AlphaScrollButtons'>
                <div className = 'FWL_AlphaScrollButtons_btns'>
                   { create( list ) }

                </div>
            </div> 



                        
        
    )

};


export function AlphaScrollButtons( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <AlphaScrollButtonsComponent
            { ...props }
            wordList = { words.wordList }
            wordsListSortingValue = { words.wordsListSortingValue }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
