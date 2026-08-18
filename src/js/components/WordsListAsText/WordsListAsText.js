
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';

import './WordsListAsText.scss';
import { app_audio_play_random } from './../../helpers/app_audio_play_random.js';

const WordsListAsTextComponent = ( props ) => {

    let {
        
        appWordsList
    } = props;

    let [ ruIsActive, setRuIsActive ] = useState( false );
    let [ typeStringActive, setTypeStringActive ] = useState( false );

    let [ list, setList ] = useState( [] );

    // console.dir( 'appWordsList' );
    // console.dir( appWordsList );

    useEffect( () => {
        let arr = [];
        for( let i = 0; i < appWordsList.length; i++ ){
            let {
                foreign,
                id,
                ru,
            } = appWordsList[ i ];

            arr.push( {
                foreign,
                id,
                ru,
            } );

        };
        setList( arr );


    }, [ appWordsList ] );




    const create = ( arr, activeRuLang  ) => {

        let  span = arr.map( ( item, index ) => {
            let {
                foreign,
                id,
                ru,
            } = item;

            if( activeRuLang ){
                // return (
                //     <span 
                //         key = { index }
                //         data-title = { foreign }
                //         className = 'forTitle'
                //     >{ ru },</span>
                // );
                 return (
                    <span 
                        key = { index }
                        data-title = { foreign }
                        className = 'forTitle'
                    >{ ru },</span> 
                       
                );
            }else{
                return (
                    <span 
                        key = { index }
                        onClick = { () => { app_audio_play_random( id ) } }
                        data-title = { ru }
                        className = 'forTitle'
                    >{ foreign },</span>
                );
            };

        } );

        return span;

    };

    const shuffle = () => {
        const newArr = [...list];

        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor( Math.random() * (i + 1));
            [ newArr[i], newArr[j]] = [newArr[j], newArr[i] ];
        };

        setList( newArr );
    }






    return (
        <div className = { `wordsListAsText ${typeStringActive? '': 'WLAT_typeText' }` }>

            <div className = 'WLAT_changeBtns'>
                <div 
                    className = { `WLAT_btn ${ruIsActive? '': 'isActive'}` }
                    onClick = { () => { setRuIsActive( false ) } }
                >
                    <span className = 'lang_name'>EN</span>
                    <span className = 'icon icon-right'></span>
                    <span className = 'lang_name'>RU</span>
                </div>

                <div 
                    className = { `WLAT_btn ${ruIsActive? 'isActive': ''}` }
                    onClick = { () => { setRuIsActive( true ) } }
                >
                    <span className = 'lang_name'>RU</span>
                    <span className = 'icon icon-right'></span>
                    <span className = 'lang_name'>EN</span>
                </div>

                <div 
                    className = { `WLAT_btn WLAT_btn_first ${typeStringActive? 'isActive': ''}` }
                    onClick = { () => { setTypeStringActive( true ) } }
                >
                    <span className = 'lang_name'>Строка</span>
                </div>
                <div 
                    className = { `WLAT_btn ${typeStringActive? '': 'isActive'}` }
                    onClick = { () => { setTypeStringActive( false ) } }
                >
                    <span className = 'lang_name'>Колонка</span>
                </div>

                <div 
                    className = 'WLAT_btn WLAT_btn_first isActive isSingle'
                    onClick = { shuffle }
                >
                    <span className = 'icon icon-shuffle'></span>
                    <span className = 'lang_name'>Перемешать</span>
                </div>

            </div>
            
            { create( list, ruIsActive ) }
        </div>

    )

};


export function WordsListAsText( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListAsTextComponent
            { ...props }
            appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
