
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './WordsListAsText.scss';

const WordsListAsTextComponent = ( props ) => {

    let {
        
        
    } = props;

    let list = [
        'access','hot','reason','brain','academic','acre','amuse','beg','blind','breakfast','cable','camp','carry','case','chat','deer','define','dive','divide','except',
        'access','hot','reason','brain','academic','acre','amuse','beg','blind','breakfast','cable','camp','carry','case','chat','deer','define','dive','divide','except',
        'access','hot','reason','brain','academic','acre','amuse','beg','blind','breakfast','cable','camp','carry','case','chat','deer','define','dive','divide','except',

    ]; 

    const create = ( arr  ) => {

        let  span = arr.map( ( item, index ) => {
            return (
                <span key = { index }>{ item },</span>
            );

        } );

        return span;

    };






    return (
        <div className = 'wordsListAsText'>
            
            { create( list ) }
        </div>

    )

};


export function WordsListAsText( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <WordsListAsTextComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
