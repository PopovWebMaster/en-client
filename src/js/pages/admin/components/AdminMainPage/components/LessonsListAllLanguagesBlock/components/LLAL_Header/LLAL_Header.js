
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLAL_Header.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLessonsListPageHeader } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLAL_HeaderComponent = ( props ) => {

    let {
        lessonsListPageHeader,


        setMainPageDataIsChanged,
        setLessonsListPageHeader,

    } = props;
    let [ value, setValue ] = useState( lessonsListPageHeader );

    useEffect( () => {
        setValue( lessonsListPageHeader );
    }, [ lessonsListPageHeader ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== lessonsListPageHeader ){
            setLessonsListPageHeader( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLAL_Header'>
            <OC_Input
                title =         'Заголовок страницы'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLAL_Header( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLAL_HeaderComponent
            { ...props }
            // languagePageHeader = { mainPage.languagePageHeader }
            lessonsListPageHeader = { mainPage.lessonsListPageHeader }



            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLessonsListPageHeader = { ( val ) => { dispatch( setLessonsListPageHeader( val ) ) } }


            

        />
    );


}
