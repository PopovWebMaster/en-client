// LessonBlockForPhrases


import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonBlockForPhrases.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';


import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';

import { NewPhraseInput } from './NewPhraseInput/NewPhraseInput.js';

import { OnePhraseItem } from './OnePhraseItem/OnePhraseItem.js';


const LessonBlockForPhrasesComponent = ( props ) => {

    let {
        currentPageTitle,

    } = props;

    let [ phrasesIsOpen, setPhrasesIsOpen ] = useState( true );

   




    return (

        <LessonBlockContainer
            isOpen =                { phrasesIsOpen }
            setIsOpen =             { setPhrasesIsOpen }
            blockTitle =            'Фразы'
            blockSecondTitle =      { `Всего фраз: ${0}` }
            openingContainerTitle = 'Фразы'
        >
            <NewPhraseInput />

            <OnePhraseItem />

        </LessonBlockContainer>

    )

};


export function LessonBlockForPhrases( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockForPhrasesComponent
            { ...props }
            currentPageTitle = { lessons.currentPageTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
