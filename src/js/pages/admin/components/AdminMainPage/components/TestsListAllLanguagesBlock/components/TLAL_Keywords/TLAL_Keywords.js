
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './TLAL_Keywords.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setTestsListPageKeywords } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const TLAL_KeywordsComponent = ( props ) => {

    let {
        testsListPageKeywords,


        setMainPageDataIsChanged,
        setTestsListPageKeywords,

    } = props;
    let [ value, setValue ] = useState( testsListPageKeywords );

    useEffect( () => {
        setValue( testsListPageKeywords );
    }, [ testsListPageKeywords ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== testsListPageKeywords ){
            setTestsListPageKeywords( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'TLAL_Keywords'>
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


export function TLAL_Keywords( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <TLAL_KeywordsComponent
            { ...props }
            
            testsListPageKeywords = { mainPage.testsListPageKeywords }



            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setTestsListPageKeywords = { ( val ) => { dispatch( setTestsListPageKeywords( val ) ) } }


            

        />
    );


}
