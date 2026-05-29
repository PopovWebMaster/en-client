
import React, { useRef, useEffect, useState } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SaveChangesButton.scss';



const SaveChangesButtonComponent = ( props ) => {

    let {
        fontSize = '1em',
        isChenges,
        setIsChanges,
        isWaiting = false,
        clickHandler,

    } = props;


    return (
        <div 
            className = { `saveChangesButton_wrap ${isChenges? 'isChenges': ''}` }
        >
            <div 
                className = { `saveChangesButton ${isWaiting? 'isWaiting': ''}` }
                style = {{  
                    fontSize
                }}
                onClick = { clickHandler }
            >
                { isWaiting? (
                    <span className = 'SCB_icon icon-spin4 animate-spin'></span>
                ): (
                    <span className = 'SCB_icon icon-floppy'></span>
                ) }
                
                <span className = 'SCB_title'>Сохранить</span>

            </div>
        </div>
        
    )

};


export function SaveChangesButton( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <SaveChangesButtonComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
