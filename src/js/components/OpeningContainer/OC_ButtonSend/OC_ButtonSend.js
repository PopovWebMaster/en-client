
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_ButtonSend.scss';

import { send_request_to_server } from './../../../helpers/send_request_to_server.js';



const OC_ButtonSendComponent = ( props ) => {

    let {
        title = 'Отправить',
        isReady = true,
        route,
        data,
        addKeyName = false,
        addLessonId = false,

        successCallback = () => {},
        errorCallback = () => {},

    } = props;

    let [  inProcess, setInProcess ] = useState( false );


    const click = () => {

        if( isReady === true ){

            console.dir( 'data' );
            console.dir( data );

            setInProcess( true );

            send_request_to_server({
                route,
                data,
                addKeyName,
                addLessonId,
                successCallback: ( response ) => {
                    successCallback( response );
                    setInProcess( false );

                },
                errorCallback: ( response ) => {
                    errorCallback( response );
                    setInProcess( false );
                },
            });
        };

        

    };


    return (
        <div className = 'OC_ButtonSend'>

            <div 
                className = { `OC_ButtonSend_btn ${ isReady? 'isReady': '' }` }
                onClick = { click }
            >
                { inProcess? <span className = 'icon-spin4 animate-spin'></span>: <span className = ''>{ title }</span> }

            </div>

         

        </div>

    )

};


export function OC_ButtonSend( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_ButtonSendComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
