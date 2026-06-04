
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './FreeWordsList.scss';

import { OneFreeWordItem } from './OneFreeWordItem/OneFreeWordItem.js';
import { OneWordEditor } from './../../../OneWordEditor/OneWordEditor.js';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';



const FreeWordsListComponent = ( props ) => {

    let {
        wordList,
    } = props;

    const create = ( arr ) => {
        let div = arr.map( ( data, index ) => {

            return (
                <OneWordEditor
                    key = { index }
                    wordId = { data.id }

                />
            )

        } );

        return div;

    }


    return (
        <div className = 'freeWordsList'>
            { create( wordList ) }
        </div>
    )

};


export function FreeWordsList( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <FreeWordsListComponent
            { ...props }
            wordList = { words.wordList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
