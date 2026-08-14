
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ButtonAddWordsGroup.scss';

import { selectorData as wordEditSlice, setNewWordContainerIsOpen } from './../../../../redux/admin/wordEditSlice.js';


import { ButtonAdd } from './../../../../components/ButtonAdd/ButtonAdd.js';

import { AlertWindowContainer } from './../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { AWGComponent } from './components/AWGComponent/AWGComponent.js';




const ButtonAddWordsGroupComponent = ( props ) => {

    let {
        // newWordContainerIsOpen,
        // setNewWordContainerIsOpen,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );


    
    const click = () => {
        setIsOpen( true )
    }

    return (
        <div className = 'buttonAddWordsGroup'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Добавить группу слов'
                width = '80vw'
                height = '92vh'
            >
                <AWGComponent isOpen = { isOpen }/>

            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em'
                }}
                click = { click }
                title = 'Добавить группу слов'
            />
        </div>
    )

};


export function ButtonAddWordsGroup( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <ButtonAddWordsGroupComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
