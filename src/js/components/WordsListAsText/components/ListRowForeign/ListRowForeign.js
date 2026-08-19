
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './ListRowForeign.scss';
import { RowContainer } from './../RowContainer/RowContainer.js';
import { OneRowItem } from './../OneRowItem/OneRowItem.js';

const ListRowForeignComponent = ( props ) => {

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
                    visibleLang =   { 'foreign' }
                />

            )

        } );

        return div;

    }


    return (

        <RowContainer className = 'WLAT_ListRowForeign'>
            { create( list ) }

        </RowContainer>
            
    )

};


export function ListRowForeign( props ){

    // const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <ListRowForeignComponent
            { ...props }
            // appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
