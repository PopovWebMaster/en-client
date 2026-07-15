
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SiteParagraphListEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setSiteParagraphList } from './../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const SiteParagraphListEditComponent = ( props ) => {

    let {
        siteParagraphList,


        setMainPageDataIsChanged,
        setSiteParagraphList,

    } = props;
    let [ value, setValue ] = useState( siteParagraphList );

    useEffect( () => {
        setValue( siteParagraphList );
    }, [ siteParagraphList ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== siteParagraphList ){
            setSiteParagraphList( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'AMP_SiteParagraphListEdit'>
            <OC_Input
                title =         'Текст на главной странице (Shift+Enter для нового параграфа)'
                value =         { value }
                setValue =      { setValue }
                max =           { 5000 }
                asTextArea =    { true }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function SiteParagraphListEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <SiteParagraphListEditComponent
            { ...props }
            siteParagraphList = { mainPage.siteParagraphList }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setSiteParagraphList = { ( val ) => { dispatch( setSiteParagraphList( val ) ) } }


            

        />
    );


}
