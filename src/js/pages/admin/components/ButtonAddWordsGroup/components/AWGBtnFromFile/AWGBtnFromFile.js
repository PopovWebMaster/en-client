// AWGBtnFromFile


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGBtnFromFile.scss';

import { selectorData as wordEditSlice } from './../../../../../../redux/admin/wordEditSlice.js';




const AWGBtnFromFileComponent = ( props ) => {

    let {

    } = props;



    return (
        <div className = 'AWGBtnFromFile'>
AWGBtnFromFile
        </div>
    )

};


export function AWGBtnFromFile( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <AWGBtnFromFileComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
