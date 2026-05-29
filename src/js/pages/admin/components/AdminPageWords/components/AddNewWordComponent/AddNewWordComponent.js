
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewWordComponent.scss';

import { selectorData as wordEditSlice, clearWordEdit, setNewWordContainerIsOpen } from './../../../../../../redux/admin/wordEditSlice.js';

import { ButtonAdd } from './../../../../../../components/ButtonAdd/ButtonAdd.js';

import { OpeningContainer } from './../../../../../../components/OpeningContainer/OpeningContainer.js';

// import { AWC_WordEn } from './AWC_WordEn/AWC_WordEn.js';
// import { AWC_WordRu } from './AWC_WordRu/AWC_WordRu.js';
// import { AWC_Transcription } from './AWC_Transcription/AWC_Transcription.js';
// import { AWC_AddFile } from './AWC_AddFile/AWC_AddFile.js';
// import { AWC_ButtonSend } from './AWC_ButtonSend/AWC_ButtonSend.js';

import { AWC_WordRu } from './components/AWC_WordRu/AWC_WordRu.js';
import { AWC_Transcription } from './components/AWC_Transcription/AWC_Transcription.js';
import { AWC_AddFile } from './components/AWC_AddFile/AWC_AddFile.js';
import { AWC_ButtonSend } from './components/AWC_ButtonSend/AWC_ButtonSend.js';
import { AWC_ForeignWord } from './components/AWC_ForeignWord/AWC_ForeignWord.js';
 


const AddNewWordComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        newWordContainerIsOpen,
        clearWordEdit,
        setNewWordContainerIsOpen,

    } = props;

    let [ top, setTop ] = useState( 0 );
    

    useEffect( () => {
        if( newWordContainerIsOpen ){
            clearWordEdit();
            let elem = document.querySelector( '.A_TopButtonsContainer' );
            let { height, paddingTop, paddingBottom, fontSize } = window.getComputedStyle( elem );
            let height_em = ( parseFloat( height ) + parseFloat( paddingTop ) + parseFloat( paddingTop ) + parseFloat( paddingBottom ) ) / parseFloat( fontSize )

            setTop( height_em - 0.5 );

        }else{
            setTop( 0 );
        }

    }, [ newWordContainerIsOpen ] );

    

    return (
        <div 
            className = 'addNewWordComponent'
            style = {{
                top: `${top}em`,
                // top: `0`,

            }}
        >

            <OpeningContainer
                title =         'Новое слово'
                isOpen =        { newWordContainerIsOpen }
                setIsOpen =     { setNewWordContainerIsOpen }
            >

                <AWC_ForeignWord
                    isOpen =        { newWordContainerIsOpen }
                />
                <AWC_WordRu
                    isOpen =        { newWordContainerIsOpen }
                />
                <AWC_Transcription 
                    isOpen =        { newWordContainerIsOpen }
                />

                <AWC_AddFile
                    isOpen =        { newWordContainerIsOpen }
                    // setFiles =      { setFiles }
                />

                <AWC_ButtonSend
                    isOpen =        { newWordContainerIsOpen }
                    // files =         { files }
                />

            </OpeningContainer>
            
            

        </div>
    )

};


export function AddNewWordComponent ( props ){

    const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AddNewWordComponentComponent
            { ...props }
            wordEdit = { wordEdit }
            newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }

            clearWordEdit = { ( val ) => { dispatch( clearWordEdit( val ) ) } }
            setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }


            

        />
    );


}
