
import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './OC_InputFiles.scss';

import { get_file_names_list } from './vendors/get_file_names_list.js';


const OC_InputFilesComponent = ( props ) => {

    let {

        change,
        fileNames,
       
        multiple = false,

        

    } = props;

    let inpRef = useRef();


    const click = () => {

        let accept = [ '.mp3', '.mov' ];
        let input = inpRef.current;
        input.setAttribute('accept', accept.join(',') );
        input.click();

    };


    const inputHandler = (e) => {

        if( !e.target.files.length ){
            return;
        };
        let files = e.target.files;

        change( files );

    }

    const createList = ( arr ) => {

        let p = arr.map( ( item, index ) => {

            return (<p key = { index }>{ item }</p>);

        } );

        return p;

    };






    return (
        <div className = 'OC_InputFiles'>

           <span
                onClick = { click }
                className = 'OC_InputFiles_btn'
            >Загрузить аудио</span>

            <div className = 'OC_InputFiles_list'>
                { createList( fileNames ) }
            </div>

            <input 
                type =          'file' 
                ref =           { inpRef }
                className =     'hiddenInput'
                onChange =      { inputHandler }
                multiple =      { multiple }
            />

        </div>

    )

};


export function OC_InputFiles( props ){

    // const userInfo = useSelector( userInfoSlice );
    // const dispatch = useDispatch();

    return (
        <OC_InputFilesComponent
            { ...props }
            // userInfo = { userInfo }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
