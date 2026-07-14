
import React, { useRef, useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveMainChanges.scss';
import { selectorData as mainPageSlise, setMainPageDataIsChanged } from './../../../../../../redux/admin/mainPageSlise.js';

import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_main_page_data_on_server } from './../../../../../../helpers/save_main_page_data_on_server.js';
import { set_main_page_data_to_store } from './../../../../../../helpers/set_main_page_data_to_store.js';

const SaveMainChangesComponent = ( props ) => {

    let {
        mainPageDataIsChanged,
        setMainPageDataIsChanged,

    } = props;

  

    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( mainPageDataIsChanged ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            if( mainPageDataIsChanged){
                save_main_page_data_on_server();
            };

        }
    }, [ mainPageDataIsChanged ]);
  
    const click = () => {
        if( mainPageDataIsChanged ){

            setIsWaiting( true );

            save_main_page_data_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.mainPage ){
                        set_main_page_data_to_store( resp.mainPage );
                        setMainPageDataIsChanged( false );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { mainPageDataIsChanged }
            setIsChanges =  { setMainPageDataIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveMainChanges( props ){

    const mainPage = useSelector( mainPageSlise );



    const dispatch = useDispatch();

    return (
        <SaveMainChangesComponent
            { ...props }
            mainPageDataIsChanged =    { mainPage.mainPageDataIsChanged }

            setMainPageDataIsChanged = { ( val ) => { dispatch( setMainPageDataIsChanged( val ) ) } }


            // setWordListIsChanged

        />
    );


}
