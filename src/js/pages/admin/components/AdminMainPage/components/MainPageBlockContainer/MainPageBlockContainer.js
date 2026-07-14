
import React, { useRef, useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './MainPageBlockContainer.scss';
// import { selectorData as lessonsSlice, setCurrentLessonIsChanged } from './../../../../../../../redux/admin/lessonsSlice.js';

import { OpeningContainer } from './../../../../../../components/OpeningContainer/OpeningContainer';

const MainPageBlockContainerComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,
        blockTitle = '',
        blockSecondTitle = '',
        openingContainerTitle = '',
        attention = false,

        children,

    } = props;

    const click = () => {
        setIsOpen( !isOpen );

    };

    return (
        <div className = { `MP_blockWrap ${ attention? 'MP_blockWrap_attention': ''}` }>
            <h2
                className = 'MP_block_head'
                onClick = { click }
            >
                <span className = 'MP_block_head_text'>{ blockTitle }</span>
                <span className = { `MP_block_head_icon ${ isOpen? 'icon-up-open': 'icon-down-open'}` }></span>
                { blockSecondTitle === ''? '': (
                    <span className = 'MP_block_head_text_second'>{ blockSecondTitle }</span>
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


export function MainPageBlockContainer( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <MainPageBlockContainerComponent
            { ...props }
            // currentLessonIsChanged = { lessons.currentLessonIsChanged }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
