
import React, { useState, useEffect }   from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BDWG_SelectAll.scss';



const BDWG_SelectAllComponent = ( props ) => {

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
        <div className = 'BDWG_SelectAll'>
            <div
                className = 'BDWG_SelectAll_selected'
                onClick = { click }
            >
                <span className = { `icon ${isAllSelected? 'icon-ok': '' }` }></span>
            </div>
            <div className = 'BDWG_SelectAll_title'>
                <span className = 'text'>все { `(${count}/${list.length})` }</span>
            </div>
            
        </div>
    )

};


export function BDWG_SelectAll( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <BDWG_SelectAllComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
