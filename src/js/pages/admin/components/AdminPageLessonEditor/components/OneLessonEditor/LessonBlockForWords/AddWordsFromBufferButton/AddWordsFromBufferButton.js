
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddWordsFromBufferButton.scss';

import { selectorData as lessonsSlice } from './../../../../../../../../redux/admin/lessonsSlice.js';

import { ButtonAdd } from './../../../../../../../../components/ButtonAdd/ButtonAdd.js';

import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js'



const AddWordsFromBufferButtonComponent = ( props ) => {

    let {
        // currentPageTitle,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

   
    const click = () => {
        setIsOpen( true );
    }



    return (
        <div className = 'OLE_AddWordsFromBufferButton'>

            <AlertWindowContainer
                isOpen = { isOpen }
                setIsOpen = { setIsOpen }
                title = 'Из буфера'
                width = '70vw'
                height = '80vh'
            >

                <>sdafdsf</>


            </AlertWindowContainer>

            <ButtonAdd
                style = {{
                    fontSize: '0.75em',
                }}
                icon = { 'icon-shuffle' }
                click = { click }
                colorStyle = { 'blue' }
                title = 'Пемеместить из буфера'
            />




        </div>

       
    )

};


export function AddWordsFromBufferButton( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <AddWordsFromBufferButtonComponent
            { ...props }
            // currentPageTitle = { lessons.currentPageTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
