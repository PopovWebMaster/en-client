
import React, { useState, useEffect }   from "react";

// import { selectorData as wordsSlice } from './../../redux/appWordsSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SetAppWordsListToStore.scss';
import { set_app_words_list_to_store } from './../../helpers/set_app_words_list_to_store.js';

import { send_request_to_server } from './../../helpers/send_request_to_server.js';


const SetAppWordsListToStoreComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
        children,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        if( typeof app_words_from_DOM !== 'undefined'){
            
            set_app_words_list_to_store( app_words_from_DOM );
            setIsReady( true );
        }else{
            console.error('Тревога! пременная "app_words_from_DOM" отсутствует');

            send_request_to_server( {
                route: 'lessons/get-lesson-app-words-list',
                data: {},
                addKeyName: true,
                addLessonId: true,
                breakdownSending: true,
                
                successCallback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );

                    if( resp.ok === true ){
                        if( resp.app_words ){
                            set_app_words_list_to_store( resp.app_words );
                            setIsReady( true );
                        };
                    }else{
                        document.location.href = resp.routeToLessons;
                    };
                },
            } );
            
        };


    }, [] );

    
    return (
       <>{ isReady? children: '' }</>
    )

};


export function SetAppWordsListToStore( props ){

    // const appControl = useSelector( appControlSlise );
    // const dispatch = useDispatch();

    return (
        <SetAppWordsListToStoreComponent
            { ...props }
            // showStatus = { appControl.showStatus }
            // setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
