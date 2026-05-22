
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonAdd.scss';

const ButtonAddComponent = ( props ) => {

    let {
        style = {},
        click,
        title = 'Добавить'
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    return (
        <div 
            className = 'ButtonAdd'
            style = { style }
            onClick = { click }
        >
            <span className = 'ButtonAdd_icon icon-plus-1'></span>
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
