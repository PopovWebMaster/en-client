
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './PageContainer.scss';

import { BackgroundContainer } from './BackgroundContainer/BackgroundContainer.js';
import { BodyContainer } from './BodyContainer/BodyContainer.js';


const PageContainerComponent = ( props ) => {

    let {
        children,
    } = props;


    return (
        <BackgroundContainer>
            <BodyContainer>
                <>{ children }</>
            </BodyContainer>
        </BackgroundContainer>

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
