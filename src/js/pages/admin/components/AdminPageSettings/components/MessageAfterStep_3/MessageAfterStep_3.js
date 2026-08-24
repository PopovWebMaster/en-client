
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MessageAfterStep_3.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setMessageAfterStep_3 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const MessageAfterStep_3Component = ( props ) => {

    let {
        messageAfterStep_3,
        setSettingsIsChanged,
        setMessageAfterStep_3,


    } = props;

    let [ value, setValue ] = useState( '' );


    useEffect( () => {
        setValue( messageAfterStep_3 );
    }, [ messageAfterStep_3 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== messageAfterStep_3 ){
            setMessageAfterStep_3( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_MessageAfterStep_3'>
            <OC_Input
                title =         'Шаг 3. Сообщение после прохождения'
                value =         { value }
                setValue =      { setValue }
                max =           { 200 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function MessageAfterStep_3( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <MessageAfterStep_3Component
            { ...props }
            messageAfterStep_3 =    { settings.messageAfterStep_3 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setMessageAfterStep_3 = { ( val ) => { dispatch( setMessageAfterStep_3( val ) ) } }



            // setWordListIsChanged

        />
    );


}
