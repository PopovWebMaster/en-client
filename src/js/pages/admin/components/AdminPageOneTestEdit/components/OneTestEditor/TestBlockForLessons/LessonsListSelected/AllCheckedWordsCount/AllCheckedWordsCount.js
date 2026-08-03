
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AllCheckedWordsCount.scss';
import { selectorData as testsSlice } from './../../../../../../../../../redux/admin/testsSlice.js';

const AllCheckedWordsCountComponent = ( props ) => {

    let {
        lessonsForTest,
        currentTestWordsCount

    } = props;
    let [ value, setValue ] = useState( 0 );

    useEffect( () => {
        getAllWords();
    }, [ lessonsForTest ]);

    const getAllWords = () => {
        let count = 0;
        for( let i = 0; i < lessonsForTest.length; i++ ){
            let { isChecked, wordsCount } = lessonsForTest[ i ];
            if( isChecked === true ){
                count = count + wordsCount;
            };
        };

        setValue( currentTestWordsCount + count );

    }


    return (
        <div
            className = 'LLS_AllCheckedWordsCount' 
        >
            <span className = 'LLS_AllCheckedWordsCount_text'>Всего слов:</span>
            <span className = 'LLS_AllCheckedWordsCount_val'>{ value }</span>

           
           
        </div>
    )

};


export function AllCheckedWordsCount( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <AllCheckedWordsCountComponent
            { ...props }
            currentTestWordsCount = { tests.currentTestWordsCount }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
