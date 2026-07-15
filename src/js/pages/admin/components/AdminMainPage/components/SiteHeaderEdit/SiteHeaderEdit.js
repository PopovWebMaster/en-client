

import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SiteHeaderEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setSiteHeader } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const SiteHeaderEditComponent = ( props ) => {

    let {
        siteHeader,


        setMainPageDataIsChanged,
        setSiteHeader,

    } = props;
    let [ value, setValue ] = useState( siteHeader );

    useEffect( () => {
        setValue( siteHeader );
    }, [ siteHeader ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== siteHeader ){
            setSiteHeader( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'AMP_SiteHeaderEdit'>
            <OC_Input
                title =         'Заголовок главной страницы'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function SiteHeaderEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <SiteHeaderEditComponent
            { ...props }
            siteHeader = { mainPage.siteHeader }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setSiteHeader = { ( val ) => { dispatch( setSiteHeader( val ) ) } }


            

        />
    );


}
