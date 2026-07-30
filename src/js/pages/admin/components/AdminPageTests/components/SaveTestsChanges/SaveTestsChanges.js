
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveTestsChanges.scss';
import { selectorData as testsSlice, setTestsListIsChanged } from './../../../../../../redux/admin/testsSlice.js';

import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_tests_data_on_server } from './../../../../../../helpers/save_tests_data_on_server.js';
import { set_tests_list_to_store } from './../../../../../../helpers/set_tests_list_to_store.js';


const SaveTestsChangesComponent = ( props ) => {

    let {
        testsListIsChanged,
        setTestsListIsChanged,

    } = props;

  

    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( testsListIsChanged ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            if( testsListIsChanged){
                save_tests_data_on_server();
            };

        }
    }, [ testsListIsChanged ]);
  
    const click = () => {
        if( testsListIsChanged ){

            setIsWaiting( true );

            save_tests_data_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.mainPage ){
                        set_tests_list_to_store( resp.mainPage );
                        setTestsListIsChanged( false );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { testsListIsChanged }
            setIsChanges =  { setTestsListIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveTestsChanges( props ){

    const tests = useSelector( testsSlice );



    const dispatch = useDispatch();

    return (
        <SaveTestsChangesComponent
            { ...props }
            testsListIsChanged =    { tests.testsListIsChanged }

            setTestsListIsChanged = { ( val ) => { dispatch( setTestsListIsChanged( val ) ) } }


        />
    );


}
