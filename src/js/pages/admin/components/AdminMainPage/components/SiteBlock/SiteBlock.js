
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SiteBlock.scss';

// import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';


import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';

import { SiteTitleEdit } from './../SiteTitleEdit/SiteTitleEdit.js';
import { SiteHeaderEdit } from './../SiteHeaderEdit/SiteHeaderEdit.js';
import { SiteParagraphListEdit } from './../SiteParagraphListEdit/SiteParagraphListEdit.js';
import { SiteDescriptionEdit } from './../SiteDescriptionEdit/SiteDescriptionEdit.js';
import { SiteKeywordsEdit } from './../SiteKeywordsEdit/SiteKeywordsEdit.js';




const SiteBlockComponent = ( props ) => {

    let {


    } = props;

    let [ siteIsOpen, setSiteIsOpen ] = useState( false );
    let [ attention, setAttention ] = useState( false );






    return (

        <MainPageBlockContainer
            isOpen =                { siteIsOpen }
            setIsOpen =             { setSiteIsOpen }
            blockTitle =            'Главная страница (все языки)'
            blockSecondTitle =      { `${HOST_TO_API_SERVER}/` }
            openingContainerTitle = 'Данные главной страницы'
            attention = { false }
        >

            <SiteTitleEdit />
            <SiteHeaderEdit />
            <SiteParagraphListEdit />
            <SiteDescriptionEdit />
            <SiteKeywordsEdit />


        </MainPageBlockContainer>

    )

};


export function SiteBlock( props ){

    // const lessons = useSelector( lessonsSlice );
    // const dispatch = useDispatch();

    return (
        <SiteBlockComponent
            { ...props }
            // currentPageTitle =          { lessons.currentPageTitle }
            // currentPageDescription =    { lessons.currentPageDescription }
            // currentPageKeyWords =       { lessons.currentPageKeyWords }
            // currentPageText =           { lessons.currentPageText }


            

            // setCurrentLessonIsChanged = { ( val ) => { dispatch( setCurrentLessonIsChanged( val ) ) } }

        />
    );


}
