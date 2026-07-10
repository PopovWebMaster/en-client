// SendToLesson


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SendToLesson.scss';

import { AlertWindowContainer } from './../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';
import { SelectedLessons } from './SelectedLessons/SelectedLessons.js';



const SendToLessonComponent = ( props ) => {

    let {
        wordId,

    } = props;
    let [ isOpen, setIsOpen ] = useState( false );




    return (<>
        <AlertWindowContainer
            isOpen = { isOpen }
            setIsOpen = { setIsOpen }
            title = 'Отправить слово в урок'
            width = '70vw'
            height = '80vh'
        >

            <SelectedLessons 
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                wordId = { wordId }
            />

        </AlertWindowContainer>

        <div
            className = 'OFW_SendToLesson'
            onClick = { () => { setIsOpen( true ) } }
        >

            <span className = 'icon-reply icon'></span>
            <span className = 'text'>Отправить</span>

        </div>
    </>
        
    )

};


export function SendToLesson( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <SendToLessonComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
