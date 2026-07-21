
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonLevelNameEdit.scss';
import { selectorData as lessonsSlice, setCurrentLessonIsChanged, setCurrentLessonLevelName } from './../../../../../../../redux/admin/lessonsSlice.js';
// import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { LEVEL_NAME_LIST } from './../../../../../../../config/lessons.js';


const LessonLevelNameEditComponent = ( props ) => {

    let {
        currentLessonLevelName,
        setCurrentLessonIsChanged,
        setCurrentLessonLevelName,

    } = props;

    let [ lessonValue, setLessonValue ] = useState( currentLessonLevelName );

    useEffect( () => {
        setLessonValue( currentLessonLevelName );
    }, [ currentLessonLevelName ] );

    // const blurHandler = ( e ) => {
    //     let val = e.target.value.trim();
    //     if( val !== currentLessonLevelName ){
    //         setCurrentLessonLevelName( val );
    //         setCurrentLessonIsChanged( true );
    //     };
    // }

    const click = ( val ) => { 
        setCurrentLessonLevelName( val );
        setCurrentLessonIsChanged( true );
    }


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let isSelected = false;
            if( item === currentLessonLevelName ){
                isSelected = true;
            };

            return (
                <div
                    className = 'APLE_LevelName_item'
                    key = { index }
                    onClick = { () => { click( item ) } }
                >
                    <div className = 'APLE_LN_chack'>
                        <div className = 'APLE_LN_chack_box'>
                            <span className = { `${isSelected? 'icon-ok': ''}` }></span>
                        </div>
                    </div>

                    <div className = { `APLE_LN_name ${isSelected? 'isSelected': ''}` }>
                        <span>{ item }</span>
                    </div>

                </div>
            );

        } );

        return div;

    };

    return (
        <div className = 'APLE_LevelName'>
            {/* <OC_Input
                title =         'Уровень'
                value =         { lessonValue }
                setValue =      { setLessonValue }
                max =           { 255 }
                blure =         { blurHandler }
            /> */}

            { create( LEVEL_NAME_LIST ) }

        </div>
    )

};


export function LessonLevelNameEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <LessonLevelNameEditComponent
            { ...props }
            currentLessonLevelName = { lessons.currentLessonLevelName }

            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }
            setCurrentLessonLevelName = { ( val ) => { dispatch( setCurrentLessonLevelName( val ) ) } }


        />
    );


}
