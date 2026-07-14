
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './LanguagePageBlock.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';


import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';



const LanguagePageBlockComponent = ( props ) => {

    let {


    } = props;

    let [ isOpen, setIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );






    return (

        <MainPageBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Гравная языковая страница'
            // blockSecondTitle =      { 'xcvxcv' }
            openingContainerTitle = 'Языковая страница'
            attention = { false }

        >
LanguagePageBlock

        </MainPageBlockContainer>

    )

};


export function LanguagePageBlock( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <LanguagePageBlockComponent
            { ...props }
            // currentPageTitle =          { lessons.currentPageTitle }
            // currentPageDescription =    { lessons.currentPageDescription }
            // currentPageKeyWords =       { lessons.currentPageKeyWords }
            // currentPageText =           { lessons.currentPageText }


            

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
