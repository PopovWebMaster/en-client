
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PageTitleEdit.scss';
import { selectorData as testsSlice, setCurrentTestPageTitle, setCurrentTestIsChanged } from './../../../../../../../../redux/admin/testsSlice.js';
import { OC_Input } from './../../../../../../../../components/OpeningContainer/OC_Input/OC_Input.js';


const PageTitleEditComponent = ( props ) => {

    let {
        currentTestPageTitle,
        setCurrentTestPageTitle,
        setCurrentTestIsChanged,

    } = props;
    let [ pageTitleValue, setPageTitleValue ] = useState( currentTestPageTitle );

    useEffect( () => {

        setPageTitleValue( currentTestPageTitle );

    }, [ currentTestPageTitle] );

    const blurHandler = ( e ) => {
        let val = e.target.value.trim();
        if( val !== currentTestPageTitle ){
            setCurrentTestPageTitle( val );
            setCurrentTestIsChanged( true );
        };

    }


    return (
        <div className = 'APTE_PageTitleEdit'>
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

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <PageTitleEditComponent
            { ...props }
            currentTestPageTitle = { tests.currentTestPageTitle }


            setCurrentTestPageTitle = { ( val ) => { dispatch( setCurrentTestPageTitle( val ) ) } }
            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }

            


            

        />
    );


}
