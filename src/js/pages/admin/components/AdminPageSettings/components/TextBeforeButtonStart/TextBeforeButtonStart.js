
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TextBeforeButtonStart.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setTextBeforeButtonStart } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TextBeforeButtonStartComponent = ( props ) => {

    let {
        textBeforeButtonStart,
        setSettingsIsChanged,
        setTextBeforeButtonStart,

    } = props;

    console.log( 'textBeforeButtonStart', textBeforeButtonStart );

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( textBeforeButtonStart );
    }, [ textBeforeButtonStart ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== textBeforeButtonStart ){
            setTextBeforeButtonStart( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_TextBeforeButtonStart'>
            <OC_Input
                title =         'Текст перед кнопкой "Тренинг памяти"'
                value =         { value }
                setValue =      { setValue }
                max =           { 2000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TextBeforeButtonStart( props ){

    const settings = useSelector( settingsSlice );

    const dispatch = useDispatch();

    return (
        <TextBeforeButtonStartComponent
            { ...props }
            textBeforeButtonStart =    { settings.textBeforeButtonStart }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setTextBeforeButtonStart = { ( val ) => { dispatch( setTextBeforeButtonStart( val ) ) } }


            // setWordListIsChanged

        />
    );


}
