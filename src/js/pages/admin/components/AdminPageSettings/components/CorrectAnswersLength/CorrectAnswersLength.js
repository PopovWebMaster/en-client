
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './CorrectAnswersLength.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setCorrectAnswersLength } from './../../../../../../redux/settingsSlice.js';

import { OC_InputNumber } from './../../../../../../components/OpeningContainer/OC_InputNumber/OC_InputNumber.js';


const CorrectAnswersLengthComponent = ( props ) => {

    let {
        correctAnswersLength,
        setSettingsIsChanged,
        setCorrectAnswersLength,

    } = props;

    let [ value, setValue ] = useState( 3 );

    useEffect( () => {
        setValue( correctAnswersLength );
    }, [ correctAnswersLength ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== correctAnswersLength ){
            setCorrectAnswersLength( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_CorrectAnswersLength'>
            <OC_InputNumber
                title =         'Сколько должно быть правильных ответов подряд нужно для прохождения круга (шт)'
                value =         { value }
                setValue =      { setValue }
                min =           { 1 }
                max =           { 10 }
                blure =         { blurHandler }

            />

        </div>
    )

};


export function CorrectAnswersLength( props ){

    const settings = useSelector( settingsSlice );
    const dispatch = useDispatch();

    return (
        <CorrectAnswersLengthComponent
            { ...props }
            correctAnswersLength =    { settings.correctAnswersLength }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setCorrectAnswersLength = { ( val ) => { dispatch( setCorrectAnswersLength( val ) ) } }



            // setWordListIsChanged

        />
    );


}
