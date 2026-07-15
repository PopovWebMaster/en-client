
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SiteTitleEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setSiteTitle } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const SiteTitleEditComponent = ( props ) => {

    let {
        siteTitle,


        setMainPageDataIsChanged,
        setSiteTitle,

    } = props;
    let [ value, setValue ] = useState( siteTitle );

    useEffect( () => {
        setValue( siteTitle );
    }, [ siteTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== siteTitle ){
            setSiteTitle( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'AMP_SiteTitleEdit'>
            <OC_Input
                title =         'Название сайта'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function SiteTitleEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <SiteTitleEditComponent
            { ...props }
            siteTitle = { mainPage.siteTitle }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setSiteTitle = { ( val ) => { dispatch( setSiteTitle( val ) ) } }


            

        />
    );


}
