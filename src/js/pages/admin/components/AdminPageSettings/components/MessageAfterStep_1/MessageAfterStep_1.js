// MessageAfterStep_1


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MessageAfterStep_1.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setMessageAfterStep_1 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const MessageAfterStep_1Component = ( props ) => {

    let {
        messageAfterStep_1,
        setSettingsIsChanged,
        setMessageAfterStep_1,


    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( messageAfterStep_1 );
    }, [ messageAfterStep_1 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== messageAfterStep_1 ){
            setMessageAfterStep_1( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_MessageAfterStep_1'>
            <OC_Input
                title =         'Шаг 1. Сообщение после прохождения'
                value =         { value }
                setValue =      { setValue }
                max =           { 200 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function MessageAfterStep_1( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <MessageAfterStep_1Component
            { ...props }
            messageAfterStep_1 =    { settings.messageAfterStep_1 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setMessageAfterStep_1 = { ( val ) => { dispatch( setMessageAfterStep_1( val ) ) } }



            // setWordListIsChanged

        />
    );


}
