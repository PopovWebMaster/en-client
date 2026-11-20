
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
    let [ listSecond, setListSecond ] = useState( [] );

    let [ clickedAlpha, setClickedAlpha ] = useState( null );

    useEffect( () => {
        if( wordsListSortingValue === WORDS_LIST_SORT_BY.FOREIGN_ALPHABET ){
            setList( getList() );
        }else{
            setList( [] );
            setClickedAlpha( null );
        };
        setListSecond( [] );
    }, [
        wordList,
        wordsListSortingValue,
    ]);

    useEffect( () => {
        if( clickedAlpha === null ){
            setListSecond( [] );
        }else{
            setListSecond( getListSecond() );
        };


    }, [ clickedAlpha ] );



    const click = ( symb ) => {

        setClickedAlpha( symb );
        let oneWordEditor = document.querySelectorAll( '.oneWordEditor' );
        if( oneWordEditor ){
            for( let i = 0; i < oneWordEditor.length; i++ ){
                let OFW_WordForeign = oneWordEditor[ i ].querySelector( '.OFW_WordForeign' );
                if( OFW_WordForeign ){
                    let OWE_WordInput_inp = OFW_WordForeign.querySelector( '.OWE_WordInput_inp' );
                    let val = OWE_WordInput_inp.value.trim();
                    if( val[ 0 ] ){
                        if( val[ 0 ] !== '' ){
                            let first = val[ 0 ].toUpperCase();
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
    }

    const clickSecond = ( symb ) => {

        let oneWordEditor = document.querySelectorAll( '.oneWordEditor' );
        if( oneWordEditor ){
            for( let i = 0; i < oneWordEditor.length; i++ ){
                let OFW_WordForeign = oneWordEditor[ i ].querySelector( '.OFW_WordForeign' );
                if( OFW_WordForeign ){
                    let OWE_WordInput_inp = OFW_WordForeign.querySelector( '.OWE_WordInput_inp' );
                    let val = OWE_WordInput_inp.value.trim();

                    if( val[ 0 ] && val[ 1 ] ){
                        if( val[ 0 ] !== '' && val[ 1 ] !== '' ){
                            let val_0 = val[ 0 ].toLowerCase();
                            let val_1 = val[ 1 ].toLowerCase();

                            let alpha_0 = clickedAlpha.toLowerCase();
                            let alpha_1 = symb.toLowerCase();

                            if( val_0 === alpha_0 && val_1 === alpha_1 ){
                                oneWordEditor[ i ].scrollIntoView( {behavior: "smooth", block: "start", inline: "start"});
                                break;
                            };

                        };
                    };
                }
            }

        }else{
            console.error( 'не могу найти класс .oneWordEditor' )
        }
    }





    const create = ( arr, clicked_alpha ) => {
        let span = arr.map( ( item, index ) => {
            let alpha = item.toUpperCase();
            return (
                <span
                    key = { index }
                    onClick = { () => {
                        click( alpha )
                    } }
                    className = { `${ alpha === clicked_alpha? 'isActive': '' }` }
                >{ alpha }</span>
            );
        } );

        return span;

    };

    const createSecond = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            let alpha = item.toUpperCase();
            return (
                <span
                    key = { index }
                    onClick = { () => {
                        clickSecond( alpha )
                    } }
                >{ alpha.toLowerCase() }</span>
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
                    obj[ first.toUpperCase() ] = true;
                };
            };
        };

        result = Object.keys( obj );
        return result;
    }


    const getListSecond = () => {
        let result = [];
        let clickedAlpha_lower = clickedAlpha.toLowerCase()

        let obj = {};
        for( let i = 0; i < wordList.length; i++ ){
            let { foreign } = wordList[ i ];
            if( foreign[ 0 ] ){
                let first = foreign[ 0 ].trim();
                // let alfaFirst = first.toUpperCase()
                let alfaFirst = first.toLowerCase()
                if( alfaFirst !== '' ){
                    if( alfaFirst === clickedAlpha_lower ){
                        if( foreign[ 1 ] ){
                            let second = foreign[ 1 ].trim();
                            obj[ second.toLowerCase() ] = true;
                        };
                    };
                };
            };
        };

        result = Object.keys( obj );
        return result;
    }





    return (
            <div className = 'FWL_AlphaScrollButtons'>
                <div className = 'FWL_AlphaScrollButtons_btns'>
                   { create( list, clickedAlpha ) }
                </div>
                <div className = 'FWL_AlphaScrollButtons_btns_sec'>
                    { createSecond( listSecond ) }
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
