
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MessageAfterStep_2.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setMessageAfterStep_2 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const MessageAfterStep_2Component = ( props ) => {

    let {
        messageAfterStep_2,
        setSettingsIsChanged,
        setMessageAfterStep_2,


    } = props;

    let [ value, setValue ] = useState( '' );


    useEffect( () => {
        setValue( messageAfterStep_2 );
    }, [ messageAfterStep_2 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== messageAfterStep_2 ){
            setMessageAfterStep_2( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_MessageAfterStep_2'>
            <OC_Input
                title =         'Шаг 2. Сообщение после прохождения'
                value =         { value }
                setValue =      { setValue }
                max =           { 200 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function MessageAfterStep_2( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <MessageAfterStep_2Component
            { ...props }
            messageAfterStep_2 =    { settings.messageAfterStep_2 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setMessageAfterStep_2 = { ( val ) => { dispatch( setMessageAfterStep_2( val ) ) } }



            // setWordListIsChanged

        />
    );


}
