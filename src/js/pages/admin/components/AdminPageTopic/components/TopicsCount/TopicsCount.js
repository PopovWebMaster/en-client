
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TopicsCount.scss';

import { selectorData as appWordsSlice } from './../../../../../../redux/appWordsSlice.js';



const TopicsCountComponent = ( props ) => {

    let {
        topicsList,

    } = props;


    return (
        <div className = 'APL_TopicsCount'>
            <span className = 'APL_TC_title'>Всего тем:</span>
            <span className = 'APL_TC_num'>{ topicsList.length }</span>
        </div>

    )

};


export function TopicsCount( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <TopicsCountComponent
            { ...props }
            topicsList = { appWords.topicsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
