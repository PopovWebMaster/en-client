
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AddNewWord.scss';

import { ButtonAdd } from './../../../../../../components/ButtonAdd/ButtonAdd.js';
// import { AddWordComponent } from './../AddWordComponent/AddWordComponent.js';

// import { AddNewWordContainer } from './../AddNewWordContainer/AddNewWordContainer.js';
import { AddNewWordComponent } from './../AddNewWordComponent/AddNewWordComponent.js';





const AddNewWordComponent_ = ( props ) => {

    let {

    } = props;

    let [ isOpen, setIsOpen ] = useState( true );
    
    const click = () => {
        setIsOpen( true );
    }

    return (
        <div className = 'addNewWord'>
            <div className = 'ANW_addBtnWrap'>
                <ButtonAdd
                    style = {{
                        fontSize: '0.75em'
                    }}
                    click = { click }
                    title = 'Добавить слова'
                />
            </div>

            <AddNewWordComponent
                isOpen =    { isOpen }
                setIsOpen = { setIsOpen }
            />

        </div>
    )

};


export function AddNewWord( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <AddNewWordComponent_
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
