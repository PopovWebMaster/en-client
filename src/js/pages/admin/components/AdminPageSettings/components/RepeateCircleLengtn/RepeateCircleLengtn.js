
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './RepeateCircleLengtn.scss';
import { selectorData as settingsSlice, setSettingsIsChanged, setRepeatCircleLength } from './../../../../../../redux/settingsSlice.js';

import { OC_InputNumber } from './../../../../../../components/OpeningContainer/OC_InputNumber/OC_InputNumber.js';

const RepeateCircleLengtnComponent = ( props ) => {

    let {
        repeatCircleLength,
        setSettingsIsChanged,
        setRepeatCircleLength,

    } = props;

    let [ value, setValue ] = useState( 3 );

    useEffect( () => {
        setValue( repeatCircleLength );
    }, [ repeatCircleLength ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== repeatCircleLength ){
            setRepeatCircleLength( val );
            setSettingsIsChanged( true );
        };

    }


    return (
        <div className = 'APS_RepeateCircleLengtn'>
            <OC_InputNumber
                title =         'Величина круга повторения слов в приложении (шт)'
                value =         { value }
                setValue =      { setValue }
                min =           { 1 }
                max =           { 20 }
                blure =         { blurHandler }

            />

        </div>
    )

};


export function RepeateCircleLengtn( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <RepeateCircleLengtnComponent
            { ...props }
            repeatCircleLength =    { settings.repeatCircleLength }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }
            setRepeatCircleLength = { ( val ) => { dispatch( setRepeatCircleLength( val ) ) } }



            // setWordListIsChanged

        />
    );


}
