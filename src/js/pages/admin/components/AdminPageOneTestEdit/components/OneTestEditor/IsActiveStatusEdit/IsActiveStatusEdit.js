
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './IsActiveStatusEdit.scss';
import { selectorData as testsSlice, setCurrentTestIsChanged, setCurrentTestIsActive } from './../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { ToggleSwitchButton } from './../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';

const IsActiveStatusEditComponent = ( props ) => {

    let {
        currentTestIsActive,
        setCurrentTestIsChanged,
        setCurrentTestIsActive,

    } = props;

    const click = () => {
        setCurrentTestIsActive( !currentTestIsActive );
        setCurrentTestIsChanged( true );
    }

    return (
        <div className = 'APTE_IsActiveStatusEdit'>
            
            <span className = 'APTE_IsActiveStatusEdit_text'>Статус активности
                { currentTestIsActive? (<span className = 'APTE_IAS_yes'>Да</span>): (<span className = 'APTE_IAS_no'>Нет</span>) }
            </span>

            <ToggleSwitchButton
                value = { currentTestIsActive }
                changeHandler = { click }
                style = {{ fontSize: '0.8em', margin: '0 0.5em'}}
            />
           
        </div>
    )

};


export function IsActiveStatusEdit( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <IsActiveStatusEditComponent
            { ...props }
            currentTestIsActive = { tests.currentTestIsActive }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestIsActive = { ( val ) => { dispatch( setCurrentTestIsActive( val ) ) } }


            

        />
    );


}
