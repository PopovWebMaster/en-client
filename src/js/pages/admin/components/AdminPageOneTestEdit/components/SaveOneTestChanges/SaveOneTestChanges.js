
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveOneTestChanges.scss';

import { selectorData as testsSlice, setCurrentTestIsChanged } from './../../../../../../redux/admin/testsSlice.js';

import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_one_test_data_on_server } from './../../../../../../helpers/save_one_test_data_on_server.js';
import { set_one_test_data_to_store } from './../../../../../../helpers/set_one_test_data_to_store.js';

const SaveOneTestChangesComponent = ( props ) => {

    let {
        currentTestIsChanged,
        setCurrentTestIsChanged,

    } = props;

    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( currentTestIsChanged ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            if( currentTestIsChanged){
                save_one_test_data_on_server();
            };

        }
    }, [ currentTestIsChanged ]);
  
    const click = () => {
        if( currentTestIsChanged ){

            setIsWaiting( true );

            save_one_test_data_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.oneTestData ){
                        set_one_test_data_to_store( resp.oneTestData );
                        setCurrentTestIsChanged( false );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { currentTestIsChanged }
            setIsChanges =  { setCurrentTestIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveOneTestChanges( props ){

    const tests = useSelector( testsSlice );



    const dispatch = useDispatch();

    return (
        <SaveOneTestChangesComponent
            { ...props }
            currentTestIsChanged =    { tests.currentTestIsChanged }

            setCurrentTestIsChanged = { ( val ) => { dispatch( setCurrentTestIsChanged( val ) ) } }


            // setWordListIsChanged

        />
    );


}
