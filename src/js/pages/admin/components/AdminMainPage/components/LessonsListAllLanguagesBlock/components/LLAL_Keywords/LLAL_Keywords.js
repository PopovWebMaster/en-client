
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLAL_Keywords.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLessonsListPageKeywords } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLAL_KeywordsComponent = ( props ) => {

    let {
        lessonsListPageKeywords,


        setMainPageDataIsChanged,
        setLessonsListPageKeywords,

    } = props;
    let [ value, setValue ] = useState( lessonsListPageKeywords );

    useEffect( () => {
        setValue( lessonsListPageKeywords );
    }, [ lessonsListPageKeywords ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== lessonsListPageKeywords ){
            setLessonsListPageKeywords( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLAL_Keywords'>
            <OC_Input
                title =         'Ключевые слова <meta name="keywords" content>'
                value =         { value }
                setValue =      { setValue }
                max =           { 2000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLAL_Keywords( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLAL_KeywordsComponent
            { ...props }
            lessonsListPageKeywords = { mainPage.lessonsListPageKeywords }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLessonsListPageKeywords = { ( val ) => { dispatch( setLessonsListPageKeywords( val ) ) } }


            

        />
    );


}
