// ButtonDownloadWordsGroupe


import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonDownloadWordsGroupe.scss';

import { selectorData as wordEditSlice } from './../../../../redux/admin/wordEditSlice.js';


import { ButtonAdd } from './../../../../components/ButtonAdd/ButtonAdd.js';

import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { BDWGComponent } from './BDWGComponent/BDWGComponent.js';



const ButtonDownloadWordsGroupeComponent = ( props ) => {

    let {
        // newWordContainerIsOpen,
        // setNewWordContainerIsOpen,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    
    const click = () => {
        setIsOpen( true )
    }

    return (
        <div className = 'buttonDownloadWordsGroupe'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Добавить группу слов'
                width = '80vw'
                height = '92vh'
            >
                <BDWGComponent isOpen = { isOpen }/>

            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em'
                }}
                icon = { 'icon-doc' }
                click = { click }
                title = 'Скачать .json'
            />
        </div>
    )

};


export function ButtonDownloadWordsGroupe( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonDownloadWordsGroupeComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
