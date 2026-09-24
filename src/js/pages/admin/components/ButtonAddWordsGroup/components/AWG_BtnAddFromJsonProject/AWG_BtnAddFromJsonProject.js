
import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './AWG_BtnAddFromJsonProject.scss';

import { selectorData as languageSlice } from './../../../../../../redux/languageSlice.js';
import { clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';


// import { get_valid_list } from './../../vendors/get_valid_list.js';

// import { get_list_from_text } from './../../vendors/get_list_from_text.js';

import { AWG_BtnAddFile } from './../AWG_BtnAddFile/AWG_BtnAddFile.js';


const AWG_BtnAddFromJsonProjectComponent = ( props ) => {

    let {
        clickHandler,
        setFileName,
        setListHandler,

        // setListHandler,
        languageKeyName,
        // clearAll,
    } = props;


    // const click = () => {
    //     clearAll();
    //     setFileName( '' );
    // };


    const chack_for_fileName = ( file, callback ) => {
        let { name } = file;
        if( name === 'words.json' || name === 'words_without_audio.json' ){
            setFileName( name );
            callback();
        }else{
            alert( 'Загрузить слова можно только из файлов "words.json" или "words_without_audio.json"(без аудио)' );
        };
    }

    const chack_for_keyName = ( obj, callback ) => {
        if( obj.keyName ){
            if( obj.keyName === languageKeyName ){
                callback();
            }else{
                alert( 'В файле указан язык ' + obj.keyName + ' а нужен ' + languageKeyName );
            };
        }else{
            alert( 'В файле отсутсвуют данные о языке' );
        };

    }
    
    const inputHandler = (e) => {
    
        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;

        chack_for_fileName( files[0], () => {
            async function read( jsonFile) {
                return new Promise((resolve, reject) => {
                    let reader = new FileReader();
                    reader.onerror = reject;
                    reader.onload = (e) => resolve(e.target.result);
                    reader.readAsText( jsonFile );


                });
            };

            read( files[0] ).then( ( result ) => {
                let obj = JSON.parse( result );
                chack_for_keyName( obj, () => {
                    if( obj.list ){
                        setListHandler( obj.list );
                    }else{
                        alert( 'в файле остутствует список со словами' );
                    };
                } );
            });
        });

    }




    return (
        <AWG_BtnAddFile
            title =         'words.json / words_without_audio.json'
            accept =        { [ '.json' ] }
            inputHandler =  { inputHandler }
            clickHandler =   { clickHandler }
            multiple =  { false }
        />
    )

};


export function AWG_BtnAddFromJsonProject( props ){

    const language = useSelector( languageSlice );
    const dispatch = useDispatch();

    return (
        <AWG_BtnAddFromJsonProjectComponent
            { ...props }
            languageKeyName = { language.languageKeyName }
            clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
