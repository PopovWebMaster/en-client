
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OnePhraseItem.scss';

import { selectorData as lessonsSlice, setCurrentLessonPhrasesList, setCurrentLessonIsChanged } from './../../../../../../../../redux/admin/lessonsSlice.js';
import { selectorData as languageSlice } from './../../../../../../../../redux/languageSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';
import { LANGUAGES } from './../../../../../../../../config/languages.js';

import { send_request_to_server } from './../../../../../../../../helpers/send_request_to_server.js'




const OnePhraseItemComponent = ( props ) => {

    let {

        id, 
        foreign, 
        ru,
       
        currentLessonPhrasesList,
        languageKeyName,
        setCurrentLessonPhrasesList,

        setCurrentLessonIsChanged,
        

    } = props;

    let [ valueForeign, setValueForeign ] = useState( foreign );
    let [ valueRu, setValueRu ] = useState( ru );

    useEffect( () => {
        setValueForeign( foreign );
        setValueRu( ru );


    }, [ foreign, ru, id ] );


    const blureForeign = () => {
        if( valueForeign.trim() !== foreign ){
            let arr = [];
            for( let i = 0; i < currentLessonPhrasesList.length; i++ ){
                let item = { ...currentLessonPhrasesList[ i ] };
                if( item.id === id ){
                    item.foreign = valueForeign.trim();
                };
                arr.push( item );
            };
            setCurrentLessonPhrasesList( arr );
            setCurrentLessonIsChanged( true );

        };

    };

    const blureRu = () => {
        if( valueRu.trim() !== ru ){
            let arr = [];
            for( let i = 0; i < currentLessonPhrasesList.length; i++ ){
                let item = { ...currentLessonPhrasesList[ i ] };
                if( item.id === id ){
                    item.ru = valueRu.trim();
                };
                arr.push( item );
            };
            setCurrentLessonPhrasesList( arr );
            setCurrentLessonIsChanged( true );
        };
    };

    const remove = () => {

        send_request_to_server({
            route: 'admin/remove-one-lesson-phrase',
            data: {
                lessonPhraseId: id,
            },
            addKeyName: true,
            addLessonId: true,

            successCallback: ( resp ) => {
                console.dir( 'resp' );
                console.dir( resp );
   
                if( resp.ok ){
                    if( resp.oneLessonData ){
                        setCurrentLessonPhrasesList( resp.oneLessonData.lessonPhrasesList );
                    };
                };

            },
        });

    }




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
                <span 
                    className = 'OLE_OnePhraseItem_remove'
                    onClick = { remove }
                >удалить</span>

            </div>

        </div>

    )

};


export function OnePhraseItem( props ){

    const lessons = useSelector( lessonsSlice );
    const language = useSelector( languageSlice );

    const dispatch = useDispatch();

    return (
        <OnePhraseItemComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            currentLessonPhrasesList = { lessons.currentLessonPhrasesList }



            setCurrentLessonPhrasesList = { ( val ) => { dispatch( setCurrentLessonPhrasesList( val ) ) } }
            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }


            

        />
    );


}
