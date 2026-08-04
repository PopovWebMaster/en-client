
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TLAL_Description.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setTestsListPageDescription } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TLAL_DescriptionComponent = ( props ) => {

    let {
        testsListPageDescription,


        setMainPageDataIsChanged,
        setTestsListPageDescription,

    } = props;

    let [ value, setValue ] = useState( testsListPageDescription );

    useEffect( () => {
        setValue( testsListPageDescription );
    }, [ testsListPageDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== testsListPageDescription ){
            setTestsListPageDescription( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'TLAL_Description'>
            <OC_Input
                title =         'Описание <meta name="description" content>'
                value =         { value }
                setValue =      { setValue }
                max =           { 2000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function TLAL_Description( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <TLAL_DescriptionComponent
            { ...props }
            testsListPageDescription = { mainPage.testsListPageDescription }

            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setTestsListPageDescription = { ( val ) => { dispatch( setTestsListPageDescription( val ) ) } }


            

        />
    );


}
