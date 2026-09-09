
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './PartOfSpeechEditBlock.scss';

import { selectorData as appWordsSlice } from './../../../../../../redux/appWordsSlice.js';
import { selectorData as mainPageSlise, setMainPageDataIsChanged } from './../../../../../../redux/admin/mainPageSlise.js';


import { MainPageBlockContainer } from './../MainPageBlockContainer/MainPageBlockContainer.js';
import { AddNewPOSButton } from './AddNewPOSButton/AddNewPOSButton.js';
import { OnePOS } from './OnePOS/OnePOS.js';



const PartOfSpeechEditBlockComponent = ( props ) => {

    let {
        partOfSpeechList,
        partOfSpeechListById,
        setMainPageDataIsChanged,

    } = props;

    let [ isOpen, setIsOpen ] = useState( false );

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            let { id, name } = item;

            return (
                <OnePOS
                    key = { index }
                    id = { id }
                    name = { name }
                />
            );



        } );

        return div;

    };






    return (

        <MainPageBlockContainer
            isOpen =                { isOpen }
            setIsOpen =             { setIsOpen }
            blockTitle =            'Части речи (все языки)'
            blockSecondTitle =      ''
            openingContainerTitle = ''
            attention = { false }

        >
            <div className = 'ME_POS_topButtonsWrap'>

                <div className = 'ME_POS_topButtons_left'>
                    <span className = 'ME_POS_topButtons_left_warning'>Лучше здесь ничего не удалять!</span>


                </div>
                <AddNewPOSButton />
            </div>

            <div className = 'ME_POS_List'>
                { create( partOfSpeechList ) }
            </div>

            

        </MainPageBlockContainer>

    )

};


export function PartOfSpeechEditBlock( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <PartOfSpeechEditBlockComponent
            { ...props }
            partOfSpeechList =      { appWords.partOfSpeechList }
            partOfSpeechListById =  { appWords.partOfSpeechListById }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }

        />
    );


}
