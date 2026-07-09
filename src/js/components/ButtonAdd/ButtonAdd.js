
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonAdd.scss';

const ButtonAddComponent = ( props ) => {

    let {
        style = {},
        click,
        icon = 'icon-plus-1',
        title = 'Добавить',
        colorStyle = 'green', // blue
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    return (
        <div 
            className = { `ButtonAdd CS_${colorStyle}` }
            style = { style }
            onClick = { click }
        >
            <span className = { `ButtonAdd_icon ${icon}` }></span>
            <span className = 'ButtonAdd_title'>{ title }</span>
        </div>

    )

};


export function ButtonAdd( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonAddComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
