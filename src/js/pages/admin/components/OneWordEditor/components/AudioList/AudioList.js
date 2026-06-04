
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AudioList.scss';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';



const AudioListComponent = ( props ) => {

    let {
        wordId,

        wordListById,

    } = props;

    let [ list, setList ] = useState( [] );

    useEffect( () => {

        if( wordListById[ wordId ] ){
            console.dir( 'wordListById[ wordId ]' );
            console.dir( wordListById[ wordId ] );
            let arr = [];
            let { audio } = wordListById[ wordId ];
            for( let i = 0; i < audio.length; i++ ){
                let { base64, name } = audio[ i ];
                arr.push( { base64, name } );

            };

            setList( arr );

        };

    }, [ wordListById, wordId ] );

    const click = ( base64 ) => {
        if( base64 ){
            const audio = new Audio();
            audio.src = base64;
            audio.play();
        };






    }


    const create = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            let { base64, name } = item;
            return (
                <span
                    key = { index }
                    onClick = { () => { click( base64 ) } }
                >{ name }</span>
            );

        } );

        return span;

    };



    return (
        <div className = 'OFW_AudioList'>

            { create( list ) }

        </div>
    )

};


export function AudioList( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <AudioListComponent
            { ...props }
            wordListById = { words.wordListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
