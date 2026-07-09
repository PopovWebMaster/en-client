
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewWord.scss';
import { selectorData as wordEditSlice, setNewWordContainerIsOpen } from './../../../../../../redux/admin/wordEditSlice.js';

import { ButtonAdd } from './../../../../../../components/ButtonAdd/ButtonAdd.js';

import { AddNewWordComponent } from './../AddNewWordComponent/AddNewWordComponent.js';





const AddNewWordComponent_ = ( props ) => {

    let {
        newWordContainerIsOpen,
        setNewWordContainerIsOpen,
    } = props;

    useEffect( () => {
        setNewWordContainerIsOpen( false );
    }, [] );

    
    const click = () => {
        setNewWordContainerIsOpen( !newWordContainerIsOpen );
    }

    return (
        <div className = 'addNewWord'>
            <div className = 'ANW_addBtnWrap'>
                <ButtonAdd
                    style = {{
                        fontSize: '0.75em'
                    }}
                    click = { click }
                    title = 'Добавить слова'
                />
            </div>

        </div>
    )

};


export function AddNewWord( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AddNewWordComponent_
            { ...props }
            newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
