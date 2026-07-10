
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LessonBlockForWords.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';
import { selectorData as wordsSlice } from './../../../../../../../redux/admin/wordsSlice.js';



import { LessonBlockContainer } from './../LessonBlockContainer/LessonBlockContainer.js';

// import { AddNewWord } from './components/AddNewWord/AddNewWord.js';
import { AddNewWord } from './../../../../AdminPageWords/components/AddNewWord/AddNewWord.js';
import { AddNewWordComponent } from './../../../../AdminPageWords/components/AddNewWordComponent/AddNewWordComponent.js';
import { FreeWordsList } from './../../../../AdminPageWords/components/FreeWordsList/FreeWordsList.js';
import { AddWordsFromBufferButton } from './AddWordsFromBufferButton/AddWordsFromBufferButton.js';
 

const LessonBlockForWordsComponent = ( props ) => {

    let {
        // currentPageTitle,
        wordList,

    } = props;

    let [ wordsIsOpen, setWordsIsOpen ] = useState( true );

   




    return (

        <LessonBlockContainer
            isOpen =                { wordsIsOpen }
            setIsOpen =             { setWordsIsOpen }
            blockTitle =            'Слова'
            blockSecondTitle =      { `Всего слов: ${wordList.length}` }
            openingContainerTitle = 'Слова'
        >
            <div className = 'OLE_topButtonsWrap'>
                <AddNewWord />
                <AddWordsFromBufferButton />
            </div>

            

            <AddNewWordComponent />

            <FreeWordsList />
            

        </LessonBlockContainer>

    )

};


export function LessonBlockForWords( props ){

    const lessons = useSelector( lessonsSlice );
    const words = useSelector( wordsSlice );


    // const dispatch = useDispatch();

    return (
        <LessonBlockForWordsComponent
            { ...props }
            wordList = { words.wordList }
            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
