
import React, { useState, useEffect }   from "react";

import { selectorData as appDataSlice, setAppKeyName, setAppLessonId, setAppTestId } from './../../redux/appDataSlice.js';

// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import './SetDataFromMetaToStore.scss';


const SetDataFromMetaToStoreComponent = ( props ) => {

    let {
        children,

        setAppKeyName,
        setAppLessonId,
        setAppTestId,

    } = props;

    let [ isReady, setIsReady ] = useState( false );

    useEffect( () => {

        if( document.querySelector('meta[name="keyName"]') ){
            let keyName = document.querySelector('meta[name="keyName"]').getAttribute('content');
            let lessonId = null;
            let testId = null;

            if( document.querySelector('meta[name="lessonId"]') ){
                let lessonIdContent = document.querySelector('meta[name="lessonId"]').getAttribute('content');
                if( typeof lessonIdContent === 'string' && lessonIdContent === 'null' ){

                }else{
                    lessonId = Number( lessonIdContent );
                };
            };

            if( document.querySelector('meta[name="testId"]') ){
                let testIdContent = document.querySelector('meta[name="testId"]').getAttribute('content');
                if( typeof testIdContent === 'string' && testIdContent === 'null' ){

                }else{
                    testId = Number( testIdContent );
                };
            };

            setAppKeyName( keyName );
            setAppLessonId( lessonId );
            setAppTestId( testId );

            setIsReady( true );


        }else{
            console.error( 'Тревога! "keyName" не найден в meta, а он надо' );
        };


    }, [] );

    
    return (
       <>{ isReady? children: '' }</>
    )

};


export function SetDataFromMetaToStore( props ){

    // const appData = useSelector( appDataSlice );
    const dispatch = useDispatch();

    return (
        <SetDataFromMetaToStoreComponent
            { ...props }
            // showStatus = { appControl.showStatus }
            setAppKeyName =     { ( val ) => { dispatch( setAppKeyName( val ) ) } }
            setAppLessonId =    { ( val ) => { dispatch( setAppLessonId( val ) ) } }
            setAppTestId =      { ( val ) => { dispatch( setAppTestId( val ) ) } }



        />
    );


}
