
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './ListRowRu.scss';
import { RowContainer } from './../RowContainer/RowContainer.js';
import { OneRowItem } from './../OneRowItem/OneRowItem.js';

const ListRowRuComponent = ( props ) => {

    let {
        list,
        
    } = props;

    const create = ( arr ) => {
        let div = arr.map( ( item, index ) => {
            let {
                foreign,
                id,
                ru,
            } = item;

            return (
                <OneRowItem
                    key =           { index }
                    foreign =       { foreign }
                    id =            { id }
                    ru =            { ru }
                    visibleLang =   { 'ru' }
                />

            )

        } );

        return div;

    }


    return (
        <RowContainer className = 'WLAT_ListRowRu'>
            { create( list ) }
        </RowContainer>
            
    )

};


export function ListRowRu( props ){

    // const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <ListRowRuComponent
            { ...props }
            // appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
