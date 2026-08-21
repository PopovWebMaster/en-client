
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonNameStep_3.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setButtonNameStep_3 } from './../../../../../../redux/settingsSlice.js';

import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const ButtonNameStep_3Component = ( props ) => {

    let {
        buttonNameStep_3,
        setSettingsIsChanged,
        setButtonNameStep_3,

    } = props;

    let [ value, setValue ] = useState( '' );

    useEffect( () => {
        setValue( buttonNameStep_3 );
    }, [ buttonNameStep_3 ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== buttonNameStep_3 ){
            setButtonNameStep_3( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_ButtonNameStep_3'>
            <OC_Input
                title =         'Шаг 3. Название кнопки'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function ButtonNameStep_3( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <ButtonNameStep_3Component
            { ...props }
            buttonNameStep_3 =    { settings.buttonNameStep_3 }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setButtonNameStep_3 = { ( val ) => { dispatch( setButtonNameStep_3( val ) ) } }



            // setWordListIsChanged

        />
    );


}
