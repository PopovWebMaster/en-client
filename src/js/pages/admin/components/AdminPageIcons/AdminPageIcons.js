
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AdminPageIcons.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


import { IconsDemonstration } from './../../../../components/IconsDemonstration/IconsDemonstration.js';
import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';



const AdminPageIconsComponent = ( props ) => {

    let {

    } = props;

    const create = () => {
        let arr = [
            "'Times New Roman', Times, serif",
            "Georgia, serif",
            "Arial, Helvetica, sans-serif",
            "'Arial Black', Gadget, sans-serif",
            "Verdana, Geneva, sans-serif",
            "'Trebuchet MS', Helvetica, sans-serif",
            "Impact, Charcoal, sans-serif",
            "'Comic Sans MS', cursive, sans-serif",
            "'Courier New', Courier, monospace",
        ];

        let div = arr.map( ( item, index ) => {
            return (<div key = { index }>
                <span
                    style = { {
                        fontFamily: item,
                    } }
                >{ `${item} Съешь же ещё этих мягких французских булок` }</span>
            </div>)

        } );

        return div;

    }


    return (
        <AdminPageContainer>
            <IconsDemonstration />

            { create() }
        </AdminPageContainer>
    )

};


export function AdminPageIcons( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageIconsComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
