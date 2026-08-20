
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './ListColumnRu.scss';
import { ColumnContainer } from './../ColumnContainer/ColumnContainer.js';
import { OneColumnItem } from './../OneColumnItem/OneColumnItem.js';

const ListColumnRuComponent = ( props ) => {

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
                <OneColumnItem
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
        <ColumnContainer className = 'WLAT_ListColumnRu'>
            { create( list ) }
        </ColumnContainer>

    )

};


export function ListColumnRu( props ){

    // const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <ListColumnRuComponent
            { ...props }
            // appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
