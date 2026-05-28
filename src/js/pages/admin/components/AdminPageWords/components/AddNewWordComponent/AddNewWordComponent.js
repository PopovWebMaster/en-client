
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewWordComponent.scss';

import { selectorData as wordEditSlice, clearWordEdit } from './../../../../../../redux/admin/wordEditSlice.js';

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

        wordEdit,
        clearWordEdit,

    } = props;

    // let [ files, setFiles ] = useState( [] );
    

    useEffect( () => {
        if( isOpen ){
            clearWordEdit();
            // setFiles( [] );


        }

    }, [ isOpen ] );

    

    return (
        <div className = 'addWord'>

            <OpeningContainer
                title =         'Новое слово'
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
            >

                <AWC_ForeignWord
                    isOpen =        { isOpen }
                />
                <AWC_WordRu
                    isOpen =        { isOpen }
                />
                <AWC_Transcription 
                    isOpen =        { isOpen }
                />

                <AWC_AddFile
                    isOpen =        { isOpen }
                    // setFiles =      { setFiles }
                />

                <AWC_ButtonSend
                    isOpen =        { isOpen }
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
            clearWordEdit = { ( val ) => { dispatch( clearWordEdit( val ) ) } }

        />
    );


}
