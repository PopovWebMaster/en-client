
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveTopicChanges.scss';
// import { selectorData as testsSlice, setTestsListIsChanged } from './../../../../../../redux/admin/testsSlice.js';
import { selectorData as appWordsSlice, setTopicsLiscIsChanges } from './../../../../../../redux/appWordsSlice.js';


import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_topics_data_on_server } from './../../../../../../helpers/save_topics_data_on_server.js';
import { set_topics_list_to_store } from './../../../../../../helpers/set_topics_list_to_store.js';


const SaveTopicChangesComponent = ( props ) => {

    let {
        topicsLiscIsChanges,
        setTopicsLiscIsChanges,

    } = props;

  

    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( topicsLiscIsChanges ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            if( topicsLiscIsChanges){
                save_topics_data_on_server();
            };

        }
    }, [ topicsLiscIsChanges ]);
  
    const click = () => {
        if( topicsLiscIsChanges ){

            setIsWaiting( true );

            save_topics_data_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.topicsList ){
                        set_topics_list_to_store( resp.topicsList );
                        setTopicsLiscIsChanges( false );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { topicsLiscIsChanges }
            setIsChanges =  { setTopicsLiscIsChanges }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveTopicChanges( props ){

    const appWords = useSelector( appWordsSlice );


    const dispatch = useDispatch();

    return (
        <SaveTopicChangesComponent
            { ...props }
            topicsLiscIsChanges =    { appWords.topicsLiscIsChanges }

            setTopicsLiscIsChanges = { ( val ) => { dispatch( setTopicsLiscIsChanges( val ) ) } }


        />
    );


}
