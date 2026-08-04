
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TLAL_Header.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setTestsListPageHeader } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TLAL_HeaderComponent = ( props ) => {

    let {
        testsListPageHeader,


        setMainPageDataIsChanged,
        setTestsListPageHeader,

    } = props;
    let [ value, setValue ] = useState( testsListPageHeader );

    useEffect( () => {
        setValue( testsListPageHeader );
    }, [ testsListPageHeader ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== testsListPageHeader ){
            setTestsListPageHeader( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'TLAL_Header'>
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


export function TLAL_Header( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <TLAL_HeaderComponent
            { ...props }
            
            testsListPageHeader = { mainPage.testsListPageHeader }

            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setTestsListPageHeader = { ( val ) => { dispatch( setTestsListPageHeader( val ) ) } }


        />
    );


}
