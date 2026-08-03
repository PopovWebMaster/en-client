
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewLessonButton.scss';
// import { selectorData as wordEditSlice, setNewWordContainerIsOpen } from './../../../../../../redux/admin/wordEditSlice.js';

import { ButtonAdd } from './../../../../../../../../components/ButtonAdd/ButtonAdd.js';
import { AlertWindowContainer } from './../../../../../../../../components/AlertWindowContainer/AlertWindowContainer.js';

import { LessonsListSelected } from './../LessonsListSelected/LessonsListSelected.js';


const AddNewLessonButtonComponent_ = ( props ) => {

    let {
        // newWordContainerIsOpen,
        // setNewWordContainerIsOpen,
    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    




    return (
        <div className = 'addNewLessonButton'>

            <AlertWindowContainer
                isOpen =        { isOpen }
                setIsOpen =     { setIsOpen }
                title = 'Добавить уроки в тест'
                width = '80vw'
                height = '80vh'
            >
                <LessonsListSelected
                    isOpen = { isOpen }
                    setIsOpen = { setIsOpen }
                />

            </AlertWindowContainer>


            <ButtonAdd
                style = {{
                    fontSize: '0.75em'
                }}
                click = { () => { setIsOpen( true ) } }
                title = 'Добавить уроки'
            />

        </div>
    )

};


export function AddNewLessonButton( props ){

    // const wordEdit = useSelector( wordEditSlice );
    const dispatch = useDispatch();

    return (
        <AddNewLessonButtonComponent_
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
