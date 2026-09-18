
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './LessonBlockContainer.scss';
// import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OpeningContainer } from './../../../../../../../components/OpeningContainer/OpeningContainer.js';


const LessonBlockContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        blockTitle = '',
        blockSecondTitle = '',
        openingContainerTitle = '',
        attention = false,
        makeStiking = false,

        children,

    } = props;

    let blockRef = useRef();

    const click = () => {
        setIsOpen( !isOpen );
    };

    useEffect( () => {
        if( isOpen === true && makeStiking ){
            let timerId = setTimeout( () => {
                let elem = blockRef.current;
                elem.scrollIntoView( {behavior: "smooth", block: "center", inline: "start"}); 

                let APC_body = document.querySelector( '.APC_body' );
                APC_body.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
                APC_body.classList.add('noscroll');

                clearTimeout( timerId );
            }, 500 );
        }else{
            let APC_body = document.querySelector( '.APC_body' );
                // APC_body.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
                APC_body.classList.remove('noscroll');
        }

    }, [ isOpen ] );

    return (
        <div className = { `OLE_blockWrap ${ attention? 'OLE_blockWrap_attention': ''}` } ref = { blockRef }>
            <h2
                className = 'OLE_block_head'
                onClick = { click }
            >
                <span className = 'OLE_block_head_text'>{ blockTitle }</span>
                <span className = { `OLE_block_head_icon ${ isOpen? 'icon-up-open': 'icon-down-open'}` }></span>
                { blockSecondTitle === ''? '': (
                    <span className = 'OLE_block_head_text_second'>{ blockSecondTitle }</span>
                ) }
                
            </h2>

            <OpeningContainer
                title =     { openingContainerTitle }
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            >
                { children }

            </OpeningContainer>
            
        </div>

    )

};


export function LessonBlockContainer( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockContainerComponent
            { ...props }
            // currentLessonIsChanged = { lessons.currentLessonIsChanged }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
