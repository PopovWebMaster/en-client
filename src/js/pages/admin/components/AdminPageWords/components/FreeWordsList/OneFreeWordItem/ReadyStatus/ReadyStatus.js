
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ReadyStatus.scss';

import { selectorData as wordsSlice, setWordListIsChanged } from './../../../../../../../../redux/admin/wordsSlice.js'



const ReadyStatusComponent = ( props ) => {

    let {
        wordId,

        wordListIsChanged,

        setWordListIsChanged,

    } = props;

    let [ readyStatus, setReadyStatus ] = useState( false );




    return (
        <div 
            className = { `OFW_ReadyStatus ${readyStatus? 'readyStatus': ''}` } 
            onClick = { () => { setReadyStatus( !readyStatus ); setWordListIsChanged( !wordListIsChanged ) } }>

            { readyStatus? (<span className = 'icon-ok'></span>): '' }

        </div>
    )

};


export function ReadyStatus( props ){

    const words = useSelector( wordsSlice );
    const dispatch = useDispatch();

    return (
        <ReadyStatusComponent
            { ...props }
            wordListIsChanged = { words.wordListIsChanged }
            setWordListIsChanged = { ( val ) => { dispatch( setWordListIsChanged( val ) ) } }

        />
    );


}
