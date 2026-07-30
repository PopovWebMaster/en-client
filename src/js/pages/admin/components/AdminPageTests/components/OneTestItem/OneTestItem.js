
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneTestItem.scss';

import { useNavigate } from "react-router-dom";

import { selectorData as testsSlice, setCurrentTestId } from './../../../../../../redux/admin/testsSlice.js';

import { ActiveSwichButton } from './ActiveSwichButton/ActiveSwichButton.js';
import { TitleInput } from './TitleInput/TitleInput.js';
import { WordsCount } from './WordsCount/WordsCount.js';
import { ItemOrder } from './ItemOrder/ItemOrder.js';
import { LevelName } from  './LevelName/LevelName.js';
import { LessonsCount } from './LessonsCount/LessonsCount.js';

import { ADMIN_ROUTES } from './../../../../config/routes.js';


const OneTestItemComponent = ( props ) => {

    let {
        testId,

        testsListById,

        setCurrentTestId,

    } = props;

    let [ classNameValue, setClassNameValue ] = useState( '' );
    let [ isActiveValue, setIsActiveValue ] = useState( false );

    let [ titleValue, setTitleValue ] = useState( false );
    let [ wordsCountValue, setWordsCountValue ] = useState( 0 );
    let [ orderValue, setOrderValue ] = useState( 0 );
    let [ levelNameValue, setLevelNameValue ] = useState( '' );
    let [ lessonsCountValue, setLessonsCountValue ] = useState( 0 );

    let navigate = useNavigate();


    useEffect( () => {
        if( testsListById[ testId ] ){
            let {
                title,
                // description,
                lessons,
                levelName,
                isActive,
                wordsCount,
                order,
            } = testsListById[ testId ];


            setTitleValue( title );
            setIsActiveValue( isActive );
            setClassNameValue( `APL_OLI_order_${order}` );
            setWordsCountValue( wordsCount );

            setOrderValue( order );
            setLevelNameValue( levelName );
            setLessonsCountValue( lessons.length );

        }else{

            setTitleValue( '' );
            setIsActiveValue( false );
            setClassNameValue( '' );
            setWordsCountValue( 0 );
            setOrderValue( 0 );
            setLevelNameValue('');
            setLessonsCountValue( 0 );

        };

        setCurrentTestId( null );

    }, [ testsListById, testId ] );



    const click = ( e ) => {
        let no_react_list = [ 
            'TSB_circle',
            'toggleSwitchButton',
            'TSB_left',
            'APL_ItemOrder_btn',
            'APL_TitleInput_inp',
        ];
        let { classList } = e.target;

        let isActual = true;
        for( let i = 0; i < classList.length; i++ ){
            let CN = classList[ i ];
            if( no_react_list.indexOf( CN ) !== -1){
                isActual = false;
            };
        };
        if( isActual ){
            setCurrentTestId( testId );
            let timerId = setTimeout( () => {
                navigate( `${ADMIN_ROUTES.TESTS.ROUTE}/${testId}` );
                clearTimeout( timerId );
            }, 200 );
            
            
        };

    };

    return (
        <div className = 'APL_OneLessonItem_wrap'>
            <div 
                className = { `APL_OneLessonItem ${classNameValue} ${isActiveValue? 'APL_OLI_isActive': '' }` }
            >
                <div
                    className = 'APL_OLI_wrap'
                    onClick = { click }
                >
                    <ActiveSwichButton
                        testId = { testId }
                        isActiveValue = { isActiveValue }
                    />
                    <TitleInput
                        testId = { testId }
                        value = { titleValue }
                    />

                    <LevelName 
                        testId = { testId }
                        value = { levelNameValue }
                    />

                    <LessonsCount
                        value = { lessonsCountValue }
                    />

                    <WordsCount
                        value = { wordsCountValue }
                    />

                    <ItemOrder
                        testId = { testId }
                        value = { orderValue }
                    />

                </div>
                
            </div>
        </div>
        

    )

};


export function OneTestItem( props ){

    const tests = useSelector( testsSlice );
    const dispatch = useDispatch();

    return (
        <OneTestItemComponent
            { ...props }
            testsListById = { tests.testsListById }


            setCurrentTestId = { ( val ) => { dispatch( setCurrentTestId( val ) ) } }

        />
    );


}
