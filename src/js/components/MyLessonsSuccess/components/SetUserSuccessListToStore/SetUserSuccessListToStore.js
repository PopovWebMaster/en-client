// SetUserSuccessListToStore


import React, { useState, useEffect }   from "react";

// import { selectorData as wordsSlice } from './../../redux/appWordsSlice.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import './SetUserSuccessListToStore.scss';

import { set_user_success_list_to_store } from './../../../../helpers/set_user_success_list_to_store.js';
import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';




const SetUserSuccessListToStoreComponent = ( props ) => {

    let {
        // showStatus,
        // setShowStatus,
        children,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        if( typeof user_successList_json_from_DOM !== 'undefined'){
            set_user_success_list_to_store( user_successList_json_from_DOM );
            setIsReady( true );
        }else{
            console.error('Тревога! пременная "user_successList_json_from_DOM" отсутствует');

            send_request_to_server( {
                route: 'lessons/get-user-success-list',
                data: {},
                // addKeyName: true,
                // addLessonId: true,
                breakdownSending: true,
                
                successCallback: ( resp ) => {
                    console.dir( 'resp' );
                    console.dir( resp );

                    if( resp.ok === true ){
                        if( resp.userSuccessList ){
                            set_user_success_list_to_store( resp.userSuccessList );
                            setIsReady( true );
                        };
                    };
                },
            } );
            
        };

        


    }, [] );

    
    return (
       <>{ isReady? children: '' }</>
    )

};


export function SetUserSuccessListToStore( props ){

    // const appControl = useSelector( appControlSlise );
    // const dispatch = useDispatch();

    return (
        <SetUserSuccessListToStoreComponent
            { ...props }
            // showStatus = { appControl.showStatus }
            // setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
