
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGComponent.scss';

import { selectorData as wordEditSlice } from './../../../../../../redux/admin/wordEditSlice.js';

import { AWGBtnFromFile } from './../AWGBtnFromFile/AWGBtnFromFile.js';

import { get_valid_list } from './../../vendors/get_valid_list.js';




const AWGComponentComponent = ( props ) => {

    let {
        isOpen,

    } = props;
    let [ list, setList ] = useState( [] );

    useEffect( () => {
        setList( [] );
    }, [ isOpen ] );

    const setListHandler = ( arr ) => {
        setList( get_valid_list( arr ) );
    }



    return (
        <div className = 'AWGComponent'>

            <div className = 'AWGC_topButtons'>
                <AWGBtnFromFile
                    setListHandler = { setListHandler }
                />
            </div>

            <div className = 'AWGC_list'>
                
            </div>

            <div className = 'AWGC_btnSend'>
                
            </div>

           
        </div>
    )

};


export function AWGComponent( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <AWGComponentComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
