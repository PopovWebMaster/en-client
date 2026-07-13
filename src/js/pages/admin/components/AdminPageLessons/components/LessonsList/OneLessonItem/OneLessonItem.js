
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneLessonItem.scss';

import { useNavigate } from "react-router-dom";

import { selectorData as lessonsSlice, setCurrentLessonId } from './../../../../../../../redux/admin/lessonsSlice.js';

import { ActiveSwichButton } from './ActiveSwichButton/ActiveSwichButton.js';
import { TitleInput } from './TitleInput/TitleInput.js';
import { WordsCount } from './WordsCount/WordsCount.js';
import { ItemOrder } from './ItemOrder/ItemOrder.js';
import { LevelName } from  './LevelName/LevelName.js';
import { IsPaid } from './IsPaid/IsPaid.js';

import { ADMIN_ROUTES } from './../../../../../config/routes.js';


const OneLessonItemComponent = ( props ) => {

    let {
        lessonId,
        lessonListById,

        setCurrentLessonId,

    } = props;

    let [ classNameValue, setClassNameValue ] = useState( '' );
    let [ isActiveValue, setIsActiveValue ] = useState( false );
    let [ isPaidValue, setIsPaidValue ] = useState( false );

    let [ titleValue, setTitleValue ] = useState( false );
    let [ wordsCountValue, setWordsCountValue ] = useState( 0 );
    let [ orderValue, setOrderValue ] = useState( 0 );
    let [ levelNameValue, setLevelNameValue ] = useState( '' );

    let navigate = useNavigate();


    useEffect( () => {
        if( lessonListById[ lessonId ] ){
            let {
                title,
                description,
                level_name,
                is_active,
                wordsCount,
                order,
                isPaid,
            } = lessonListById[ lessonId ];


            setTitleValue( title );
            setIsActiveValue( is_active );
            setClassNameValue( `APL_OLI_order_${order}` );
            setWordsCountValue( wordsCount );

            setOrderValue( order );
            setLevelNameValue( level_name );
            setIsPaidValue( isPaid );

        }else{

            setTitleValue( '' );
            setIsActiveValue( false );
            setClassNameValue( '' );
            setWordsCountValue( 0 );
            setOrderValue( 0 );
            setLevelNameValue('');
            setIsPaidValue( false );

        };

        setCurrentLessonId( null );

    }, [ lessonListById, lessonId ] );



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
            setCurrentLessonId( lessonId );
            let timerId = setTimeout( () => {
                navigate( `${ADMIN_ROUTES.LESSONS.ROUTE}/${lessonId}` );
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
                        lessonId = { lessonId }
                        isActiveValue = { isActiveValue }
                    />

                    <IsPaid
                        lessonId = { lessonId }
                        value = { isPaidValue }
                    />

                    <TitleInput
                        lessonId = { lessonId }
                        value = { titleValue }
                    />
                    

                    <LevelName 
                        lessonId = { lessonId }
                        value = { levelNameValue }
                    />

                    <WordsCount
                        value = { wordsCountValue }
                    />

                    <ItemOrder
                        lessonId = { lessonId }
                        value = { orderValue }
                    />
                </div>
                
            </div>
        </div>
        

    )

};


export function OneLessonItem( props ){

    const lessons = useSelector( lessonsSlice );
    const dispatch = useDispatch();

    return (
        <OneLessonItemComponent
            { ...props }
            lessonListById = { lessons.lessonListById }


            setCurrentLessonId = { ( val ) => { dispatch( setCurrentLessonId( val ) ) } }

        />
    );


}
