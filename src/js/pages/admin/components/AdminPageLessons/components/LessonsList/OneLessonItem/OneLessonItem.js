
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './OneLessonItem.scss';

import { selectorData as lessonsSlice } from './../../../../../../../redux/admin/lessonsSlice.js';

import { ActiveSwichButton } from './ActiveSwichButton/ActiveSwichButton.js';
import { TitleInput } from './TitleInput/TitleInput.js';
import { WordsCount } from './WordsCount/WordsCount.js';
import { ItemOrder } from './ItemOrder/ItemOrder.js';


const OneLessonItemComponent = ( props ) => {

    let {
        lessonId,
        lessonListById,

    } = props;

    let [ classNameValue, setClassNameValue ] = useState( '' );
    let [ isActiveValue, setIsActiveValue ] = useState( false );
    let [ titleValue, setTitleValue ] = useState( false );
    let [ wordsCountValue, setWordsCountValue ] = useState( 0 );
    let [ orderValue, setOrderValue ] = useState( 0 );




    useEffect( () => {
        if( lessonListById[ lessonId ] ){
            let {
                title,
                description,
                level_name,
                is_active,
                wordsCount,
                order,
            } = lessonListById[ lessonId ];


            setTitleValue( title );
            setIsActiveValue( is_active );
            setClassNameValue( `APL_OLI_order_${order}` );
            setWordsCountValue( wordsCount );

            setOrderValue( order );

        }else{

            setTitleValue( '' );
            setIsActiveValue( false );
            setClassNameValue( '' );
            setWordsCountValue( 0 );
            setOrderValue( 0 );

        };

    }, [ lessonListById, lessonId ] );

    return (
        <div className = 'APL_OneLessonItem_wrap'>
            <div 
                className = { `APL_OneLessonItem ${classNameValue} ${isActiveValue? 'APL_OLI_isActive': '' }` }
            >
                <div className = 'APL_OLI_wrap'>
                    <ActiveSwichButton
                        lessonId = { lessonId }
                        isActiveValue = { isActiveValue }
                    />

                    <TitleInput
                        lessonId = { lessonId }
                        value = { titleValue }
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
    // const dispatch = useDispatch();

    return (
        <OneLessonItemComponent
            { ...props }
            lessonListById = { lessons.lessonListById }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
