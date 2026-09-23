
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AWGComponent.scss';

import { selectorData as wordEditSlice } from './../../../../../../redux/admin/wordEditSlice.js';
import { selectorData as wordsSelectedListSlice, setList, clearAll } from './../../../../../../redux/admin/wordsSelectedListSlice.js';


import { AWGBtnFromFile } from './../AWGBtnFromFile/AWGBtnFromFile.js';

import { get_valid_list } from './../../vendors/get_valid_list.js';

import { TabsButtons } from './../TabsButtons/TabsButtons.js';

import { AWGLoadingFromText } from './../AWGLoadingFromText/AWGLoadingFromText.js';
import { AWGLoadingFromFile } from './../AWGLoadingFromFile/AWGLoadingFromFile.js';

import { chack_list_for_uniq } from './../../vendors/chack_list_for_uniq.js';

import { AWGWordsSelectedList } from './../../../../../../components/AlertWindowContainer/AWGWordsSelectedList/AWGWordsSelectedList.js';



const AWGComponentComponent = ( props ) => {

    let {
        isOpen,
        setList,
        clearAll,

    } = props;
    
    // let [ list, setList ] = useState( [] );

    let [ activeTabName, setActiveTabName ] = useState( 'from_file' );

    useEffect( () => {
        clearAll();
    }, [ isOpen, activeTabName ] );


    const setListHandler = ( newList ) => {

        chack_list_for_uniq( newList, ( listWithUniqMessage ) => {
            let list = get_valid_list( listWithUniqMessage );
            setList( list );
        } );
    }

    const switchLoadingMethod = ( tab ) => {
        let result = '';

        switch( tab ){
            case 'from_file':
                result = (
                    <AWGLoadingFromFile
                        setListHandler = { setListHandler }
                    />);
                    break;

            case 'from_text':
                result = (
                    <AWGLoadingFromText
                        setListHandler = { setListHandler }
                    />);
                    break;
        };


        return result;

    }



    return (
        <div className = 'AWGComponent'>

            <div className = 'AWGC_topButtons'>

                <TabsButtons 
                    activeTabName = { activeTabName }
                    setActiveTabName = { setActiveTabName }
                />
            </div>

            <div className = 'AWGC_loadingMethod'>
                { switchLoadingMethod( activeTabName ) }
            </div>

            <AWGWordsSelectedList
                isOpen = { isOpen }
            />

            <div className = 'AWGC_btnSend'>
                
            </div>

           
        </div>
    )

};


export function AWGComponent( props ){

    // const wordsSelectedList = useSelector( wordsSelectedListSlice );
    const dispatch = useDispatch();

    return (
        <AWGComponentComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            setList = { ( val ) => { dispatch( setList( val ) ) } }
            clearAll = { ( val ) => { dispatch( clearAll( val ) ) } }

        />
    );


}
