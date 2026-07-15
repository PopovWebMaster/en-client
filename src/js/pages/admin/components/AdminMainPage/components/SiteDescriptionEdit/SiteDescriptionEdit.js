
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SiteDescriptionEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setSiteDescription } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const SiteDescriptionEditComponent = ( props ) => {

    let {
        siteDescription,


        setMainPageDataIsChanged,
        setSiteDescription,

    } = props;
    let [ value, setValue ] = useState( siteDescription );

    useEffect( () => {
        setValue( siteDescription );
    }, [ siteDescription ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== siteDescription ){
            setSiteDescription( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'AMP_SiteDescriptionEdit'>
            <OC_Input
                title =         'Описание сайта <meta name="description" content>'
                value =         { value }
                setValue =      { setValue }
                max =           { 2000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function SiteDescriptionEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <SiteDescriptionEditComponent
            { ...props }
            siteDescription = { mainPage.siteDescription }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setSiteDescription = { ( val ) => { dispatch( setSiteDescription( val ) ) } }


            

        />
    );


}
