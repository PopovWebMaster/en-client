
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonNameStep_2.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setButtonNameStep_2 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const ButtonNameStep_2Component = ( props ) => {

    let {
        buttonNameStep_2,
        setSettingsIsChanged,
        setButtonNameStep_2,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( buttonNameStep_2 );
    }, [ buttonNameStep_2 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== buttonNameStep_2 ){
            setButtonNameStep_2( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_ButtonNameStep_2'>
            <OC_Input
                title =         'Шаг 2. Название кнопки'
                value =         { value }
                setValue =      { setValue }
                max =           { 40 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function ButtonNameStep_2( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <ButtonNameStep_2Component
            { ...props }
            buttonNameStep_2 =    { settings.buttonNameStep_2 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setButtonNameStep_2 = { ( val ) => { dispatch( setButtonNameStep_2( val ) ) } }



            // setWordListIsChanged

        />
    );


}
