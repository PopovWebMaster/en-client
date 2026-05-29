
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveWordsChanges.scss';
import { selectorData as wordsSlice, setWordListIsChanged } from './../../../../../../redux/admin/wordsSlice.js';
import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';




const SaveWordsChangesComponent = ( props ) => {

    let {
        wordListIsChanged,
        setWordListIsChanged,

    } = props;
    let [ isWaiting, setIsWaiting ] = useState( false );

    
    const click = () => {

        

        if( wordListIsChanged ){
            setIsWaiting( true );
            console.dir( 'save' );

        };
        
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { wordListIsChanged }
            setIsChanges =  { setWordListIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveWordsChanges( props ){

    const words = useSelector( wordsSlice );
    const dispatch = useDispatch();

    return (
        <SaveWordsChangesComponent
            { ...props }
            wordListIsChanged = { words.wordListIsChanged }
            setWordListIsChanged = { ( val ) => { dispatch( setWordListIsChanged( val ) ) } }

        />
    );


}
