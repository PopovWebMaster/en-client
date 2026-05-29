
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './A_TopButtonsContainer.scss';



const A_TopButtonsContainerComponent = ( props ) => {

    let {

        children

    } = props;




    return (

        <div className = 'A_TopButtonsContainer'>
            { children }
           
        </div>


    )

};


export function A_TopButtonsContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <A_TopButtonsContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
