
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './OneColumnItem.scss';
import { RowContainer } from './../RowContainer/RowContainer.js';
import { app_audio_play_random } from './../../../../helpers/app_audio_play_random.js';

const OneColumnItemComponent = ( props ) => {

    let {
        foreign,
        id,
        ru,
        visibleLang = 'foreign', // 'ru'

        appWordsListById,
        
    } = props;

    let [ classForHidden, setClassForHidden ] = useState( '' );  //'VL_top_left' 'VL_top_right'

    let blockRef = useRef();
    let visibleRef = useRef();

    let hiddenRef = useRef();


    const hover = ( e ) => {
        let parentWidth = blockRef.current.parentElement.offsetWidth;
        let visibleWidth = visibleRef.current.offsetWidth;
        let hiddenWidth = hiddenRef.current.offsetWidth;
        let left = blockRef.current.offsetLeft;

        if( ( left + visibleWidth + hiddenWidth + 10 ) < parentWidth ){
            setClassForHidden( 'VL_right' );
        }else{
            setClassForHidden( 'VL_top_right' );
        };

    }

    const leave = ( e ) => {
        setClassForHidden( '' );
    }

    const click = () => {
        if( visibleLang === 'foreign' ){
            app_audio_play_random( id );
        };
    };



    return (

        <div
            className = { `WLAT_OneRowItem ${classForHidden}` }
            onMouseOver = { hover }
            onMouseLeave = { leave }
            ref = { blockRef }
            onClick = { click }
        >
            <span className = { `WLAT_ORI_visibleLang ${ visibleLang === 'foreign'? 'visibleForeign': ''}` } ref = { visibleRef }>{ visibleLang === 'foreign'? foreign: ru },<span className = 'WLAT_ORI_hiddenLang_triangle'></span></span>
            <span className = 'WLAT_ORI_hiddenLang' ref = { hiddenRef }>{ visibleLang === 'foreign'? ru: foreign }</span>
        </div>
            
    )

};


export function OneColumnItem( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <OneColumnItemComponent
            { ...props }
            appWordsListById = { appWords.appWordsListById }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
