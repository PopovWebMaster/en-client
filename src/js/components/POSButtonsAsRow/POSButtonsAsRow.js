
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './POSButtonsAsRow.scss';

import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';



const POSButtonsAsRowComponent = ( props ) => {

    let {
        POSId,
        setPOSId,

        withTitle = true,

        partOfSpeechList,

    } = props;

    const create = ( arr, currentId ) => {

        let span = arr.map( ( item, index ) => {
            let { name, id } = item

            return (
                <span
                    key = { index }
                    className = { `POS_btn ${ currentId === id? 'isActive': ''}` }
                    onClick = { () => { setPOSId( id ) } }
                >{ name }</span>
            )

        } );

        return span;

    };






    


    return (
        <div className = 'POSButtonsAsRow'>

            { withTitle? <h2>Часть речи</h2>: '' }

            

            <span
                className = { `POS_btn ${ POSId === null? 'isActive': ''}` }
                onClick = { () => { setPOSId( null ) } }
            >Не указана!</span>

            { create( partOfSpeechList, POSId ) }


        </div>
    )

};


export function POSButtonsAsRow ( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <POSButtonsAsRowComponent
            { ...props }
            partOfSpeechList = { appWords.partOfSpeechList }
            // setFiles = { ( val ) => { dispatch( setFiles( val ) ) } }

        />
    );


}
