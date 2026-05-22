
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './IconsDemonstration.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

import { ICONS_LIST } from './icons_list.js';



const IconsDemonstrationComponent = ( props ) => {

    let {

    } = props;

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {
            return (
                <div className = 'IconsDemonstration_item' key = { index }>
                    <span className = { `${item}` }></span>
                    <input
                        type = 'text'
                        value = { item }
                        onChange = { () => {} }
                    />

                </div>
            )

        } );

        return div;

    }


    return (
            <div className = 'IconsDemonstration'>
                { create( ICONS_LIST ) }
                
            </div>

    )

};


export function IconsDemonstration( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <IconsDemonstrationComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
