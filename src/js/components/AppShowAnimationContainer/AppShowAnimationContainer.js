
import React, { useRef, useState, useEffect }   from "react";

import { selectorData as appControlSlise, setShowStatus } from './../../redux/appControlSlise.js';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './AppShowAnimationContainer.scss';

import { add_event_click_into_buttonStart } from './vendors/add_event_click_into_buttonStart.js';
import { appPlace_DOM_controller } from './vendors/appPlace_DOM_controller.js';
import { textPlace_DOM_controller } from './vendors/textPlace_DOM_controller.js';

const AppShowAnimationContainerComponent = ( props ) => {

    let {
        showStatus,
        setShowStatus,
        children,
    } = props;

    // let [ isOpen, setIsOpen ] = useState( false );

    useEffect( () => {
        add_event_click_into_buttonStart();
    }, [] );

    useEffect( () => {
        if( showStatus ){
            appPlace_DOM_controller.forAppShow();
        }else{
            appPlace_DOM_controller.forAppHide();
        }

    }, [ showStatus ]);

    const cancelClick = () => {
        textPlace_DOM_controller.show();
        setShowStatus( false );
    }



    return (
        <div id = 'appShowAnimation' className = { showStatus? 'appShow': 'appHide' }>
            <div className = 'ASA_cancel_place'>
                <div
                    className = 'ASA_cancel_wrap'
                    onClick = { cancelClick }
                >
                    <span className = 'icon-cancel-3'></span>
                </div>
            </div>
            <div className = 'ASA_work_place'>
                { children }
            </div>
        </div>

    )

};


export function AppShowAnimationContainer( props ){

    const appControl = useSelector( appControlSlise );
    const dispatch = useDispatch();

    return (
        <AppShowAnimationContainerComponent
            { ...props }
            showStatus = { appControl.showStatus }
            
            setShowStatus = { ( val ) => { dispatch( setShowStatus( val ) ) } }

        />
    );


}
