
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './ActiveLanguageListEdit.scss';

import { selectorData as mainPageSlise, setMainPageDataIsChanged, setLanguageActiveList } from './../../../../../../redux/admin/mainPageSlise.js';
import { LANGUAGE_LIST } from './../../../../../../config/languages.js';


const ActiveLanguageListEditComponent = ( props ) => {

    let {
        languageActiveList,
        setMainPageDataIsChanged,
        setLanguageActiveList,

    } = props;
    let [ list, setList ] = useState( languageActiveList );

    useEffect( () => {
        setList( languageActiveList );
    }, [ languageActiveList ] );


    const click = ( keyName ) => {

        if( list.indexOf( keyName ) === -1 ){
            let arr = [ ...list ];
            arr.push( keyName );
            setList( arr );
            setLanguageActiveList( arr );
        }else{
            let arr = [];
            for( let i = 0; i < list.length; i++ ){
                if( list[ i ] !== keyName ){
                    arr.push( list[ i ] );
                };
            };
            setList( arr );
            setLanguageActiveList( arr );
        };

        setMainPageDataIsChanged( true );

    };

    const create = ( arr ) => {

        let div = LANGUAGE_LIST.map( ( item, index ) => {

            let {
                alias,
                icon,
                keyName,
                max,
                name,
            } = item;

            let isActive = false;
            if( arr.indexOf( keyName ) != -1 ){
                isActive = true;
            };


            return <div
                className = 'AMP_ALL_itemWrap'
                key = { index }
                onClick = { () => { click( keyName ) } }
            >
                <div className = 'AMP_ALL_item_chack'>

                    <div className = 'AMP_ALL_item_chack_box'>
                        <span className = { `${isActive? 'icon-ok': ''}` }></span>
                    </div>


                </div>

                <div className = 'AMP_ALL_item_icon'>

                    <img src = { icon }/>
                    

                </div>

                <div className = 'AMP_ALL_item_name'>
                    <span>{ name }</span>
                </div>

            </div>

        } );

        return div;

    };





    return (
        <div className = 'AMP_ActiveLanguageListEdit'>
            { create( list ) }
           

        </div>
    )

};


export function ActiveLanguageListEdit( props ){

    const mainPage = useSelector( mainPageSlise );
    const dispatch = useDispatch();

    return (
        <ActiveLanguageListEditComponent
            { ...props }
            languageActiveList = { mainPage.languageActiveList }


            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }
            setLanguageActiveList = { ( val ) => { dispatch( setLanguageActiveList( val ) ) } }


            

        />
    );


}
