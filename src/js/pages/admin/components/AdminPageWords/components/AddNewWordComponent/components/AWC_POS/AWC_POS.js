

import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWC_POS.scss';

import { selectorData as wordEditSlice, setPosId } from './../../../../../../../../redux/admin/wordEditSlice.js';

import { POSButtonsAsRow } from './../../../../../../../../components/POSButtonsAsRow/POSButtonsAsRow.js';


const AWC_POSComponent = ( props ) => {

    let {
        pos_id,
        setPosId,
        isOpen,

    } = props;


    useEffect( () => {
        setPosId( null );
    }, [ isOpen ] );




    


    return (
        <div className = 'AWC_POS'>


            <POSButtonsAsRow
                POSId = { pos_id }
                setPOSId = { setPosId }
            />
          

        </div>
    )

};


export function AWC_POS ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AWC_POSComponent
            { ...props }
            pos_id = { wordEdit.pos_id }
            setPosId = { ( val ) => { dispatch( setPosId( val ) ) } }

        />
    );


}
