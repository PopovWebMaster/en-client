
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LLAL_Title.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLessonsListPageTitle } from './../../../../../../../../redux/admin/mainPageSlise.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const LLAL_TitleComponent = ( props ) => {

    let {
        lessonsListPageTitle,


        setMainPageDataIsChanged,
        setLessonsListPageTitle,

    } = props;
    let [ value, setValue ] = useState( lessonsListPageTitle );

    useEffect( () => {
        setValue( lessonsListPageTitle );
    }, [ lessonsListPageTitle ] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== lessonsListPageTitle ){
            setLessonsListPageTitle( val );
            setMainPageDataIsChanged( true );
        };

    }


    return (
        <div className = 'LLAL_Title'>
            <OC_Input
                title =         'Заголовок вкладки <title></title>'
                value =         { value }
                setValue =      { setValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function LLAL_Title( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <LLAL_TitleComponent
            { ...props }
            lessonsListPageTitle = { mainPage.lessonsListPageTitle }

            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLessonsListPageTitle = { ( val ) => { dispatch( setLessonsListPageTitle( val ) ) } }


            

        />
    );


}
