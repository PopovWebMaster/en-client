
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGLoadingFromText.scss';

// import { selectorData as wordEditSlice } from './../../../../../../redux/admin/wordEditSlice.js';

// import { get_valid_list } from './../../vendors/get_valid_list.js';


const AWGLoadingFromTextComponent = ( props ) => {

    let {

    } = props;



    return (
        <div className = 'AWGLoadingFromText'>
AWGLoadingFromText
           
           
        </div>
    )

};


export function AWGLoadingFromText( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <AWGLoadingFromTextComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
