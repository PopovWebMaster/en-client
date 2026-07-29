
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLAL_Description.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLessonsListPageDescription } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLAL_DescriptionComponent = ( props ) => {

    let {
        lessonsListPageDescription,


        setMainPageDataIsChanged,
        setLessonsListPageDescription,

    } = props;lessonsListPageDescription
    let [ value, setValue ] = useState( lessonsListPageDescription );

    useEffect( () => {
        setValue( lessonsListPageDescription );
    }, [ lessonsListPageDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== lessonsListPageDescription ){
            setLessonsListPageDescription( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLAL_Description'>
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


export function LLAL_Description( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLAL_DescriptionComponent
            { ...props }
            lessonsListPageDescription = { mainPage.lessonsListPageDescription }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLessonsListPageDescription = { ( val ) => { dispatch( setLessonsListPageDescription( val ) ) } }


            

        />
    );


}
