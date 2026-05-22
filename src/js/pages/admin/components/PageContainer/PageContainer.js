

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageContainer.scss';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";



const PageContainerComponent = ( props ) => {

    let {

        children

    } = props;


    return (

        <div className = 'A_PageContainer'>

            { children }
            
        </div>


    )

};


export function PageContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <PageContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
