
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveWordsChanges.scss';
import { selectorData as wordsSlice, setWordListIsChanged, setCommandToSaveShanges } from './../../../../../../redux/admin/wordsSlice.js';
import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_word_list_changes_on_server } from './../../../../../../helpers/save_word_list_changes_on_server.js';
import { set_word_list_to_store } from './../../../../../../helpers/set_word_list_to_store.js';

const SaveWordsChangesComponent = ( props ) => {

    let {
        wordListIsChanged,
        setWordListIsChanged,

        commandToSaveShanges,
        // setCommandToSaveShanges,

    } = props;
    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( wordListIsChanged ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                    // return 
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            save_word_list_changes_on_server();
        }
    }, [ ]);


    useEffect( () => {
        if( commandToSaveShanges === true ){
            save_word_list_changes_on_server();
        };
    }, [ commandToSaveShanges ]);
  
    const click = () => {
        if( wordListIsChanged ){
            setIsWaiting( true );

            save_word_list_changes_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.wordList ){
                        set_word_list_to_store( resp.wordList );
                    };
                };
            });

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
            commandToSaveShanges = { words.commandToSaveShanges }

            setWordListIsChanged = { ( val ) => { dispatch( setWordListIsChanged( val ) ) } }
            setCommandToSaveShanges = { ( val ) => { dispatch( setCommandToSaveShanges( val ) ) } }


            

        />
    );


}
