
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TestLevelNameEdit.scss';
import { selectorData as testsSlice, setCurrentTestIsChanged, setCurrentTestLevelName } from './../../../../../../../../redux/admin/testsSlice.js';

import { LEVEL_NAME_LIST } from './../../../../../../../../config/levelName.js';

const TestLevelNameEditComponent = ( props ) => {

    let {
        currentTestLevelName,
        setCurrentTestIsChanged,
        setCurrentTestLevelName,

    } = props;

    let [ lessonValue, setLessonValue ] = useState( currentTestLevelName );

    useEffect( () => {
        setLessonValue( currentTestLevelName );
    }, [ currentTestLevelName ] );

    const click = ( val ) => { 
        setCurrentTestLevelName( val );
        setCurrentTestIsChanged( true );
    }


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let isSelected = false;
            if( item.value === currentTestLevelName ){
                isSelected = true;
            };

            return (
                <div
                    className = 'APTE_LevelName_item'
                    key = { index }
                    onClick = { () => { click( item.value ) } }
                >
                    <div className = 'APTE_LN_chack'>
                        <div className = 'APTE_LN_chack_box'>
                            <span className = { `${isSelected? 'icon-ok': ''}` }></span>
                        </div>
                    </div>

                    <div className = { `APTE_LN_name ${isSelected? 'isSelected': ''}` }>
                        <span>{ item.value }</span>
                    </div>

                </div>
            );

        } );

        return div;

    };

    return (
        <div className = 'APTE_LevelName'>
            { create( LEVEL_NAME_LIST ) }
        </div>
    )

};


export function TestLevelNameEdit( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <TestLevelNameEditComponent
            { ...props }
            currentTestLevelName = { tests.currentTestLevelName }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }
            setCurrentTestLevelName = { ( val ) => { dispatch( setCurrentTestLevelName( val ) ) } }


        />
    );


}
