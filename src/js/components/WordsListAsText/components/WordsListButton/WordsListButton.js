
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as languageSlice } from './../../../../redux/languageSlice.js';

import './WordsListButton.scss';

const WordsListButtonComponent = ( props ) => {

    let {
        
        isActive,
        clickHandler,

        firstText = false,
        icon = false,
        secondText = false,

        firstTextIsShortenable = false,
        iconIsShortenable = false,
        secondTextIsShortenable = false,


        isFirst = false,
        iconStyle = {},

        // languageKeyName,

    } = props;


    return (

        <div 
            className = { `WLAT_btn ${isActive? 'isActive': ''} ${isFirst? 'isFirst': ''}` }
            onClick = { clickHandler }
        >
            { firstText !== false?  <span className = { `lang_name ${firstTextIsShortenable? 'isShortenable': ''}` }>{ firstText }</span>: '' }
            { icon !== false?       <span className = { `icon ${icon} ${iconIsShortenable? 'isShortenable': ''}` } style = { iconStyle }></span>: '' }
            { secondText !== false? <span className = { `lang_name ${secondTextIsShortenable? 'isShortenable': ''}` }>{ secondText }</span>: '' }
            
        </div>
                
    )

};


export function WordsListButton( props ){

    // const language = useSelector( languageSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListButtonComponent
            { ...props }
            // languageKeyName = { language.languageKeyName }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
