
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectorData as wordsSelectedListSlice, setList } from './../../../../../redux/admin/wordsSelectedListSlice.js';

import './AWGWSL_SelectAll.scss';



const AWGWSL_SelectAllComponent = ( props ) => {

    let {
        list,
        setList,

    } = props;

    let [ isAllSelected, setIsAllSelected ] = useState( true );
    let [ count, setCount ] = useState( 0 );
    let [ moreSelected, setMoreSelected ] = useState( false );


    useEffect( () => {
        let len = 0;

        for( let i = 0; i < list.length; i++ ){
            let { isSelected } = list[ i ];
            if( isSelected ){
                len = len + 1;
            };
        };
        setCount( len );
        if( len === list.length ){
            setIsAllSelected( true );
        }else{
            setIsAllSelected( false );
        };

        setMoreSelected( (list.length / 2 ) <  len );


    }, [ list ] );

    const click = () => {
        let all = true;
        if( count === list.length ){
            all = false;
        }else{
            if( count === 0 ){
                all = true;
            }else{
                all = moreSelected;
            };
            
        };
        let arr = [];
        for( let i = 0; i < list.length; i++ ){
            let item = structuredClone( list[ i ] );
            item.isSelected = all;
            arr.push( item );
        };
        setList( arr );
    }


    return (
        <div className = 'AWGWSL_SelectAll'>
            <div
                className = 'AWGWSL_SelectAll_selected'
                onClick = { click }
            >
                <span className = { `icon ${isAllSelected? 'icon-ok': '' }` }></span>
            </div>
            <div className = 'AWGWSL_SelectAll_title'>
                <span className = 'text'>все { `(${count}/${list.length})` }</span>
            </div>
            
        </div>
    )

};


export function AWGWSL_SelectAll( props ){

    const wordsSelectedList = useSelector( wordsSelectedListSlice );
    const dispatch = useDispatch();

    return (
        <AWGWSL_SelectAllComponent
            { ...props }
            list = { wordsSelectedList.list }
            setList = { ( val ) => { dispatch( setList( val ) ) } }

        />
    );


}
