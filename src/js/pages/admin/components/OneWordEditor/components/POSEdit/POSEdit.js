

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './POSEdit.scss';

import { selectorData as wordsSlice } from './../../../../../../redux/admin/wordsSlice.js';

import { POSButtonsAsRow } from './../../../../../../components/POSButtonsAsRow/POSButtonsAsRow.js';


import { set_word_list_value_into_store } from './../../../../../../helpers/set_word_list_value_into_store.js';

const POSEditComponent = ( props ) => {

    let {
        wordId,

        wordListById,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        if( wordListById[ wordId ] ){
            let { part_of_speech_id } = wordListById[ wordId ];
            setValue( part_of_speech_id );
        }else{
            setValue( null );
        };

    }, [ wordId, wordListById ] );


    const click = ( val ) => {
        // if( val !== valueOld ){
            set_word_list_value_into_store( wordId, { part_of_speech_id: val } );
        // };
    };


    return (
        <div className = 'OFW_POSEdit'>

            <POSButtonsAsRow
                POSId = { value }
                setPOSId = { click }
                withTitle = { false }
            />

        </div>
    )

};


export function POSEdit( props ){

    const words = useSelector( wordsSlice );
    // const dispatch = useDispatch();

    return (
        <POSEditComponent
            { ...props }
            wordListById = { words.wordListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
