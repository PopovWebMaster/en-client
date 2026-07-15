// SiteKeywordsEdit


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SiteKeywordsEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setSiteKeywords } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const SiteKeywordsEditComponent = ( props ) => {

    let {
        siteKeywords,


        setMainPageDataIsChanged,
        setSiteKeywords,

    } = props;
    let [ value, setValue ] = useState( siteKeywords );

    useEffect( () => {
        setValue( siteKeywords );
    }, [ siteKeywords ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== siteKeywords ){
            setSiteKeywords( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'AMP_SiteKeywordsEdit'>
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


export function SiteKeywordsEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <SiteKeywordsEditComponent
            { ...props }
            siteKeywords = { mainPage.siteKeywords }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setSiteKeywords = { ( val ) => { dispatch( setSiteKeywords( val ) ) } }


            

        />
    );


}
