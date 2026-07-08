
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonBlockForWords.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';


import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';


const LessonBlockForWordsComponent = ( props ) => {

    let {
        // currentPageTitle,

    } = props;

    let [ wordsIsOpen, setWordsIsOpen ] = useState( false );

   




    return (

        <LessonBlockContainer
            isOpen =                { wordsIsOpen }
            setIsOpen =             { setWordsIsOpen }
            blockTitle =            'Слова'
            blockSecondTitle =      { `Всего слов: ${0}` }
            openingContainerTitle = 'Слова'
        >
            <>LessonBlockForWords</>

        </LessonBlockContainer>

    )

};


export function LessonBlockForWords( props ){

    const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LessonBlockForWordsComponent
            { ...props }
            // currentPageTitle = { lessons.currentPageTitle }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
