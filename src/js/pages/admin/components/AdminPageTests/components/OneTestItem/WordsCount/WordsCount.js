
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './WordsCount.scss';

import { selectorData as testsSlice } from './../../../../../../../redux/admin/testsSlice.js';

const WordsCountComponent = ( props ) => {

    let {
        // value,
        testId,
        testsListById,

    } = props;

    let [ isActiveValue, setIsActiveValue ] = useState( 0 );
    let [ isAllValue, setIsAllValue ] = useState( 0 );

    useEffect( () => {
        // if( testsListById[ testId ] ){
        //     console.dir( testsListById[ testId ] );
        //     let { lessons } = testsListById[ testId ];
        //     let all = 0;
        //     for( let i = 0; i < lessons.length; i++ ){
        //         let { isActive } = lessons[ i ];
        //         if( isActive === true ){
        //             all++;
        //         };
        //     };

        //     setIsActiveValue( all );
        //     setIsAllValue( lessons.length );

        // }



         if( testsListById[ testId ] ){
            // console.dir( testsListById[ testId ] );
            let { lessons } = testsListById[ testId ];
            let all = 0;
            let active = 0;
            for( let i = 0; i < lessons.length; i++ ){
                let { isActive, wordsCount } = lessons[ i ];
                if( isActive === true ){
                    active = active + wordsCount;
                };
                all = all + wordsCount;
            };

            setIsActiveValue( all );
            setIsAllValue( active );

        }

    }, [ testsListById, testId ] );


    return (
        <div className = 'APT_WordsCount' >
            <span className = 'APT_WC_title'>Слов:</span>
            <span className = 'APT_WC_num APT_WC_num_bold'>{ isActiveValue }</span>
            <span className = 'APT_WC_slesh'>/</span>
            <span className = 'APT_WC_num'>{ isAllValue }</span>
        </div>

    )

};


export function WordsCount( props ){

    const tests = useSelector( testsSlice );
    // const dispatch = useDispatch();

    return (
        <WordsCountComponent
            { ...props }
            testsListById = { tests.testsListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
