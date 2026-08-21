
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonNameStep_1.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setButtonNameStep_1 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const ButtonNameStep_1Component = ( props ) => {

    let {
        buttonNameStep_1,
        setSettingsIsChanged,
        setButtonNameStep_1,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( buttonNameStep_1 );
    }, [ buttonNameStep_1 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== buttonNameStep_1 ){
            setButtonNameStep_1( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_ButtonNameStep_1'>
            <OC_Input
                title =         'Шаг 1. Название кнопки'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function ButtonNameStep_1( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <ButtonNameStep_1Component
            { ...props }
            buttonNameStep_1 =    { settings.buttonNameStep_1 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setButtonNameStep_1 = { ( val ) => { dispatch( setButtonNameStep_1( val ) ) } }



            // setWordListIsChanged

        />
    );


}
