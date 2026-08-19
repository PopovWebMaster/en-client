
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './ListColumnForeign.scss';

import { ColumnContainer } from './../ColumnContainer/ColumnContainer.js';

const ListColumnForeignComponent = ( props ) => {

    let {
        list,
        
    } = props;


    return (
        <ColumnContainer className = 'WLAT_ListColumnForeign' >
            en колонка
        </ColumnContainer>
  
    )

};


export function ListColumnForeign( props ){

    // const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <ListColumnForeignComponent
            { ...props }
            // appWordsList = { appWords.appWordsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
