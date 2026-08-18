
import React, { useState, useEffect }   from "react";

// import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AppLesson.scss';

import { AppShowAnimationContainer } from './../AppShowAnimationContainer/AppShowAnimationContainer.js';
import { SetAppWordsListToStore } from './../SetAppWordsListToStore/SetAppWordsListToStore.js';
import { SetDataFromMetaToStore } from './../SetDataFromMetaToStore/SetDataFromMetaToStore.js';
import { add_WordsListAsText_to_DOM } from './../../helpers/add_WordsListAsText_to_DOM.js';
import { LessonTask } from './components/LessonTask/LessonTask.js';

const AppLessonComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
    } = props;

    useEffect( () => {
        add_WordsListAsText_to_DOM();
    }, [] );



    return (

        <SetDataFromMetaToStore>
            <AppShowAnimationContainer>
                <SetAppWordsListToStore>
                    <div className = 'appLesson'>

                        <LessonTask />


                    </div>
                </SetAppWordsListToStore>
            </AppShowAnimationContainer>
        </SetDataFromMetaToStore>



    )

};


export function AppLesson( props ){

    // const appControl = useSelector( appControlSlise );
    // const dispatch = useDispatch();

    return (
        <AppLessonComponent
            { ...props }
            // showStatus = { appControl.showStatus }
            // setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
