
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './NewPhraseInput.scss';

import { selectorData as lessonsSlice, setCurrentLessonPhrasesList } from './../../../../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../../../../redux/languageSlice.js';


import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { OC_ButtonSend } from './../../../../../../../../components/OpeningContainer/OC_ButtonSend/OC_ButtonSend.js';
import { LANGUAGES } from './../../../../../../../../config/languages.js';


const NewPhraseInputComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,

        languageKeyName,
        setCurrentLessonPhrasesList,

    } = props;

    let [ valueForeign, setValueForeign ] = useState( '' );
    let [ valueRu, setValueRu ] = useState( '' );
    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {
        if( valueForeign.trim() === '' ){
            setIsReady( false );
        }else{
            setIsReady( true );
        };

    }, [ valueForeign ] );


    useEffect( () => {
        setValueForeign( '' );
        setValueRu( '' );

    }, [] );

    const success = ( resp ) => {

        console.dir( 'resp' );
        console.dir( resp );
        if( resp.ok ){
            if( resp.oneLessonData ){
                setCurrentLessonPhrasesList( resp.oneLessonData.lessonPhrasesList );
                setValueForeign( '' );
                setValueRu( '' );

            };
        };


    }



    return (

        <div className = 'OLE_NewPhraseInput'>

            <div className = 'OLE_NewPhraseInput_left'>
                <OC_Input
                    title =         { LANGUAGES[ languageKeyName ].name }
                    value =         { valueForeign }
                    setValue =      { setValueForeign }
                    max =           { 255 }
                    blure =         { () => {} }
                
                />
                <OC_Input
                    title =         { LANGUAGES.RU.name }
                    value =         { valueRu }
                    setValue =      { setValueRu }
                    max =           { 255 }
                    blure =         { () => {} }
                
                />
            </div>

            <div className = 'OLE_NewPhraseInput_right'>
                <OC_ButtonSend
                    title =             'Добавить'
                    isReady =           { isReady }
                    route =             { 'admin/add-new-lesson-phrase' }
                    addKeyName =        { true }
                    addLessonId =       { true }
                    data =              { {
                        foreign: valueForeign,
                        ru: valueRu,

                    } }
                    successCallback =   { success }
                />
            </div>

        </div>

    )

};


export function NewPhraseInput( props ){

    // const lessons = useSelector( lessonsSlice );
    const language = useSelector( languageSlice );

    const dispatch = useDispatch();

    return (
        <NewPhraseInputComponent
            { ...props }
            // currentPageTitle = { lessons.currentPageTitle }
            languageKeyName = { language.languageKeyName }

            setCurrentLessonPhrasesList = { ( val ) => { dispatch( setCurrentLessonPhrasesList( val ) ) } }

        />
    );


}
