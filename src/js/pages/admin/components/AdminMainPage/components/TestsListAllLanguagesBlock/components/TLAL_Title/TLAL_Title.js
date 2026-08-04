
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TLAL_Title.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setTestsListPageTitle } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TLAL_TitleComponent = ( props ) => {

    let {
        testsListPageTitle,


        setMainPageDataIsChanged,
        setTestsListPageTitle,

    } = props;
    let [ value, setValue ] = useState( testsListPageTitle );

    useEffect( () => {
        setValue( testsListPageTitle );
    }, [ testsListPageTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== testsListPageTitle ){
            setTestsListPageTitle( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'TLAL_Title'>
            <OC_Input
                title =         'Название страницы'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TLAL_Title( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <TLAL_TitleComponent
            { ...props }
            
            testsListPageTitle = { mainPage.testsListPageTitle }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setTestsListPageTitle = { ( val ) => { dispatch( setTestsListPageTitle( val ) ) } }


            

        />
    );


}
