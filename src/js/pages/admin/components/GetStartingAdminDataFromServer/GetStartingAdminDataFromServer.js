
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './GetStartingAdminDataFromServer.scss';

import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';

import { send_request_to_server } from './../../../../helpers/send_request_to_server.js';



const GetStartingAdminDataFromServerComponent = ( props ) => {

    let {
        what_to_take = [],
        children,
        languageKeyName,
    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        send_request_to_server({
            route: 'admin/get-starting-data',
            data: {
                what_to_take,
                kayName: languageKeyName,
                lessonId: null,
            },
            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );

                setIsReady( true );


            },
        });

    }, [] );





    return (
        <>{ isReady? children: 'Ждёмс..' }</>
    )

};


export function GetStartingAdminDataFromServer( props ){

    const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <GetStartingAdminDataFromServerComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
