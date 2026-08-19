
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import './ListColumnRu.scss';
import { ColumnContainer } from './../ColumnContainer/ColumnContainer.js';

const ListColumnRuComponent = ( props ) => {

    let {
        list,
        
    } = props;


    return (
        <ColumnContainer className = 'WLAT_ListColumnRu'>
            ru колонка
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
