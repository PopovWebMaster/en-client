
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OnePhraseItem.scss';

import { selectorData as lessonsSlice, setCurrentLessonPhrasesList } from './../../../../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../../../../redux/languageSlice.js';



import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { OC_ButtonSend } from './../../../../../../../../components/OpeningContainer/OC_ButtonSend/OC_ButtonSend.js';
import { LANGUAGES } from './../../../../../../../../config/languages.js';




const OnePhraseItemComponent = ( props ) => {

    let {
       

        languageKeyName,
        setCurrentLessonPhrasesList,

    } = props;

    let [ valueForeign, setValueForeign ] = useState( '' );
    let [ valueRu, setValueRu ] = useState( '' );


    const blureForeign = () => {

    };

    const blureRu = () => {
        
    };




    return (

        <div className = 'OLE_OnePhraseItem'>

            <div className = 'OLE_OnePhraseItem_left'>
                <OC_Input
                    title =         { LANGUAGES[ languageKeyName ].name }
                    value =         { valueForeign }
                    setValue =      { setValueForeign }
                    max =           { 255 }
                    blure =         { blureForeign }
                
                />
                <OC_Input
                    title =         { LANGUAGES.RU.name }
                    value =         { valueRu }
                    setValue =      { setValueRu }
                    max =           { 255 }
                    blure =         { blureRu }
                
                />
            </div>

            <div className = 'OLE_OnePhraseItem_right'>
                <span>удалить</span>
                {/* <OC_ButtonSend
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
                /> */}
            </div>

        </div>

    )

};


export function OnePhraseItem( props ){

    // const lessons = useSelector( lessonsSlice );
    const language = useSelector( languageSlice );

    const dispatch = useDispatch();

    return (
        <OnePhraseItemComponent
            { ...props }
            // currentPageTitle = { lessons.currentPageTitle }
            languageKeyName = { language.languageKeyName }

            setCurrentLessonPhrasesList = { ( val ) => { dispatch( setCurrentLessonPhrasesList( val ) ) } }

        />
    );


}
