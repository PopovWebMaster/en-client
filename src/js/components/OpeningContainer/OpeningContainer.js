
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OpeningContainer.scss';

const OpeningContainerComponent = ( props ) => {

    let {
        title = 'Хм, что это?',
        style = {},
        isOpen,
        setIsOpen,
        children,
    } = props;

    let wrapRef = useRef();

    let [ height_px, setHeight_px ] = useState( 0 );

    let [ classNameValue, setClassNameValue ] = useState( 'OpeningContainer' );

    useEffect( () => {
        if( isOpen ){
            setHeight_px( getHeightPx() );

            setTimeout( () => {
                setHeight_px( 'auto' );
            }, 200 );
            
        }else{

            setHeight_px( getHeightPx() );


            setTimeout( () => {
                setHeight_px( 0 );
            }, 10 );
        };

        setClassName( isOpen );

    }, [ isOpen ] );

    const getHeightPx = () => {

        let result = 0;

        let elem = wrapRef.current;
        if( elem ){
            let elemStyle = window.getComputedStyle( elem );
            result = Number( parseFloat( elemStyle.height ) );
        };

        return result;
        

    }

    const clickCancel = () => {
        setIsOpen( false );
    }

    const setClassName = ( val ) => {

        if( val ){
            let timerId = setTimeout( () => {
                setClassNameValue( 'OpeningContainer isOpen' );
            }, 100 );

        }else{
            setClassNameValue( 'OpeningContainer' )
        }

    }

    const getHaightVal = ( px ) => {
        let result = '0px';

        if( px !== 0 ){
            if( px === 'auto' ){
                result = `auto`;
            }else{
                result = `calc( ${px}px + 1em)`;
            }
            
        };

        return result;

    }



    return (
        <div 
            className = { classNameValue }
            style = { {...style, height: getHaightVal( height_px ) } }
        >
            <div
                className = 'OC_wrap'
                ref = { wrapRef }
            >
                <div className = 'OC_header'>
                    <h3>{ title }</h3>
                    <span 
                        className = 'OC_cancel icon-cancel-3'
                        onClick = { clickCancel }
                    ></span>
                </div>

                <div className = 'OC_body'>
                    { children }

                </div>
            </div>
        
        </div>

    )

};


export function OpeningContainer( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OpeningContainerComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
