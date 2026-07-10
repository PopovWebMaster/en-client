

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OFL_OneLesson.scss';



const OFL_OneLessonComponent = ( props ) => {

    let {
        description,
        id,
        isSelected,
        is_active,
        level_name,
        order,
        title,
        wordsCount,
        
        toggleSelect,

    } = props;

    const click = ( e ) => {
        toggleSelect( id );
    };


    return (
        <div 
            className = { `OFW_OFL_OneLesson ${isSelected? 'isSelected': ''}` }
            onClick = { click }
        >

            <div className = 'OFW_OFL_chack'>
                { isSelected? <span className = 'icon-ok'></span>: '' }
            </div>

            <div className = 'OFW_OFL_center'>
                <h4>{title}</h4>
                <p>{description}</p>

                
            </div>

            <div className = 'OFW_OFL_info'>
                <div>
                    <span className = 'OFW_OFL_info_value'>{ level_name }</span>
                </div>
                <div>
                    <span className = 'OFW_OFL_info_name'>слов:</span>
                    <span className = 'OFW_OFL_info_value'>{ wordsCount }</span>
                </div>
                
            </div>
            

            

        </div>
    )

};


export function OFL_OneLesson( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OFL_OneLessonComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
