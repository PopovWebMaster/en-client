
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageTitleEdit.scss';
import { selectorData as lessonsSlice, setCurrentPageTitle, setCurrentLessonIsChanged } from './../../../../../../../redux/admin/lessonsSlice.js';
import { OC_Input } from './../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageTitleEditComponent = ( props ) => {

    let {
        currentPageTitle,
        setCurrentPageTitle,
        setCurrentLessonIsChanged,

    } = props;
    let [ pageTitleValue, setPageTitleValue ] = useState( currentPageTitle );

    useEffect( () => {

        setPageTitleValue( currentPageTitle );

    }, [ currentPageTitle] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentPageTitle ){
            setCurrentPageTitle( val );
            setCurrentLessonIsChanged( true );
        };

    }


    return (
        <div className = 'APLE_PageTitleEdit'>
            <OC_Input
                title =         'Заголовок страницы'
                value =         { pageTitleValue }
                setValue =      { setPageTitleValue }
                max =           { 255 }
                blure =         { blurHandler }
            />

        </div>
    )

};


export function PageTitleEdit( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <PageTitleEditComponent
            { ...props }
            currentPageTitle = { lessons.currentPageTitle }


            setCurrentPageTitle = { ( val ) => { dispatch( setCurrentPageTitle( val ) ) } }
            setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }


            

        />
    );


}
