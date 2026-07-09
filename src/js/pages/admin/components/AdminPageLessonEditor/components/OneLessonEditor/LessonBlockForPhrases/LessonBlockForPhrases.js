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
        currentLessonPhrasesList,

    } = props;

    let [ phrasesIsOpen, setPhrasesIsOpen ] = useState( false );

    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { id, foreign, ru } = item;

            return (
                <OnePhraseItem 
                    key =       { index }
                    id =        { id }
                    foreign =   { foreign }
                    ru =        { ru }
                />
            )

        } );

        return div;

    };

   




    return (

        <LessonBlockContainer
            isOpen =                { phrasesIsOpen }
            setIsOpen =             { setPhrasesIsOpen }
            blockTitle =            'Фразы'
            blockSecondTitle =      { `Всего фраз: ${currentLessonPhrasesList.length}` }
            openingContainerTitle = 'Фразы'
        >
            <NewPhraseInput />

            { create( currentLessonPhrasesList ) }

        </LessonBlockContainer>

    )

};


export function LessonBlockForPhrases( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockForPhrasesComponent
            { ...props }
            currentLessonPhrasesList = { lessons.currentLessonPhrasesList }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
