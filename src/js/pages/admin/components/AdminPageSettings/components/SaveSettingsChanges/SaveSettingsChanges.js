
import React, { useState, useEffect }   from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SaveSettingsChanges.scss';
import { selectorData as settingsSlice, setSettingsIsChanged } from './../../../../../../redux/settingsSlice.js';

import { SaveChangesButton } from './../../../SaveChangesButton/SaveChangesButton.js';

import { save_settings_data_on_server } from './../../../../../../helpers/save_settings_data_on_server.js';
import { set_app_data_to_store } from './../../../../../../helpers/set_app_data_to_store.js';


const SaveSettingsChangesComponent = ( props ) => {

    let {
        settingsIsChanged,
        setSettingsIsChanged,

    } = props;

    let [ isWaiting, setIsWaiting ] = useState( false );

    useEffect(() => {

        if( IS_DEVELOPMENT === false ){
            if( settingsIsChanged ){
                window.onbeforeunload = ( ev ) => {
                    ev.preventDefault();
                    ev.returnValue = 'Are you sure you want to close?';
                };
            }else{
                window.onbeforeunload = null
            };
        };
        
        return () => {
            if( settingsIsChanged){
                save_settings_data_on_server();
            };

        }
    }, [ settingsIsChanged ]);
  
    const click = () => {
        if( settingsIsChanged ){

            setIsWaiting( true );

            save_settings_data_on_server(( resp ) => {
                setIsWaiting( false );
                if( resp.ok ){
                    if( resp.appData ){
                        set_app_data_to_store( resp.appData );
                        setSettingsIsChanged( false );
                    };
                };
            });

        };
    }

    return (
        <SaveChangesButton
            fontSize = { '0.75em' }
            isChenges =     { settingsIsChanged }
            setIsChanges =  { setSettingsIsChanged }
            isWaiting =     { isWaiting }
            clickHandler =  { click }
        />
    )

};


export function SaveSettingsChanges( props ){

    const settings = useSelector( settingsSlice );



    const dispatch = useDispatch();

    return (
        <SaveSettingsChangesComponent
            { ...props }
            settingsIsChanged =    { settings.settingsIsChanged }

            setSettingsIsChanged = { ( val ) => { dispatch( setSettingsIsChanged( val ) ) } }


            // setWordListIsChanged

        />
    );


}
