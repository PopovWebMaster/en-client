
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './MyLessonsSuccess.scss';

import { selectorData as appDataSlice } from './../../redux/appDataSlice.js';

import { LANGUAGES, LANGUAGE_LIST } from './../../config/languages.js';
import { SetUserSuccessListToStore } from './components/SetUserSuccessListToStore/SetUserSuccessListToStore.js';

import { MLS_TextSpan } from './components/MLS_TextSpan/MLS_TextSpan.js';
import { MLS_OneCountSpan } from './components/MLS_OneCountSpan/MLS_OneCountSpan.js';
import { get_elem_width_px } from './vendors/get_elem_width_px.js';

const MyLessonsSuccessComponent = ( props ) => {

    let {
        userSuccessList,

    } = props;

    let [ textWidth, setTextWidth ] = useState( 0 );
    let [ widthList, setWidthList ] = useState( [] );
    let [ containerWidth, setContainerWidth ] = useState( 0 );

    let [ isShort, setIsShort ] = useState( true );
    let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        setTextWidth( 0 );
        setWidthList( [] );
        // setContainerWidth()

    }, [ userSuccessList ] );



    useEffect( () => {
        // const resizeObserver = new ResizeObserver((entries) => {

        //     for (const entry of entries) {
        //         const width = get_elem_width_px( entry.target );
                
        //         setContainerWidth( width );
        //     };
        // });
        // let mySuccess = document.getElementById( 'mySuccess' );
        // resizeObserver.observe( mySuccess );

        let timerId = setTimeout( () => {
            set_is_short();
            clearTimeout( timerId );
        }, 300 );
        

        window.addEventListener( 'resize', set_is_short );

        return () => {
            window.removeEventListener( 'resize', set_is_short )
        }



    }, [] );

    const set_is_short = () => {
        let mySuccess = document.getElementById( 'mySuccess' );
        let mySuccess_width = get_elem_width_px( mySuccess );

        let MLS_TextSpan = document.querySelector( '.MLS_TextSpan' );
        let MLS_TextSpan_width = get_elem_width_px( MLS_TextSpan );

        let total = 0;

        let MLS_OneCountSpan = document.querySelectorAll( '.MLS_OneCountSpan' );
        for( let i = 0; i < MLS_OneCountSpan.length; i++ ){
            total = total + get_elem_width_px( MLS_OneCountSpan[ i ] );
        };

        if( mySuccess_width > total + MLS_TextSpan_width + 10 ){
            setIsShort( false );
        }else{
            setIsShort( true );
        };
    }

    // useEffect( () => {

    //     console.dir( '<<<<<<<<<<<<<<<<<<<<' );
    //     console.dir({
    //         textWidth,
    //         containerWidth,
    //         widthList
           
    //     });

    //     let total = textWidth;
    //     for( let i = 0; i < widthList.length; i++ ){
    //         total = total + widthList[ i ];
    //     };
    //     if( total < containerWidth ){
    //         setIsShort( false );
    //     }else{
    //         setIsShort( true );
    //     };


    // }, [ containerWidth, widthList ] );




    const create = ( arr ) => {
        let span = arr.map( ( item, index ) => {
            let { 
                countNum,
                countString,
                keyName,
            } = item;

            return (
                <MLS_OneCountSpan
                    key =           { index }
                    keyName =       { keyName }
                    countString =   { countString }

                    // widthList =   { widthList }
                    // setWidthList =   { setWidthList }

                />
            )
        } );

        return span;
    };





    return (

        <SetUserSuccessListToStore>

            <div
                className = 'MySuccessBtn'
            >
                <MLS_TextSpan 
                    setTextWidth = { setTextWidth }
                />

                { isShort? (
                    <span 
                        className = 'icon-chart-bar MSL_btn'
                        onClick = { () => { setIsOpen( !isOpen ) } }
                    ></span>
                ): '' }

                <div className = { `MSL_btn_menu ${isShort? isOpen? 'MSL_btn_menu_isShort': 'MSL_btn_menu_isShort MSL_btn_menu_hidden': ''}` }>
                    { create( userSuccessList ) }
                </div>

                
            </div>
        </SetUserSuccessListToStore>



    )

};


export function MyLessonsSuccess( props ){

    const appData = useSelector( appDataSlice );
    // const dispatch = useDispatch();

    return (
        <MyLessonsSuccessComponent
            { ...props }
            userSuccessList = { appData.userSuccessList }

            // setLanguageAlias = { ( val ) => { dispatch( setLanguageAlias( val ) ) } }


            



        />
    );


}
