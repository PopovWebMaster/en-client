
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TitleInput.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

// import { ToggleSwitchButton } from './../../../../../../../../components/ToggleSwitchButton/ToggleSwitchButton.js';
// import { set_lesson_list_value_into_store } from './../../../../../../../../helpers/set_lesson_list_value_into_store.js';
// import { LESSON_TITLE } from './../../../../../../../../config/lessons.js';


const TitleInputComponent = ( props ) => {

    let {
        lessonId,
        value,

    } = props;

    let [ titleValue, setTitleValue ] = useState( value );

    // let inpRef = useRef();

    useEffect( () => {

        setTitleValue( value );

    }, [ value ] );

    // const change = ( e ) => {
    //     let val = e.target.value;
    //     setTitleValue( val );

    // };


    // const blur = () => {
    //     if( value !== titleValue.trim() ){
    //         set_lesson_list_value_into_store( lessonId, { title: titleValue.trim() } );
    //     };
        
    // }

    // const enter = ( e ) => {
    //     if( e.which === 13 ){
    //         inpRef.current.blur();
    //     };
    // };


    return (
        <div className = 'APL_TitleInput'>

            <span>{ titleValue }</span>

            {/* <input
                type = 'text'
                className = 'APL_TitleInput_inp'
                ref = { inpRef }
                value = { titleValue }
                onChange = { change }
                onBlur = { blur }
                onKeyDown = { enter }
                maxLength = { LESSON_TITLE.MAX }
            /> */}

            

        </div>

    )

};


export function TitleInput( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <TitleInputComponent
            { ...props }
            // lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
