
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TabsButtons.scss';

// import { selectorData as wordEditSlice } from './../../../../../../redux/admin/wordEditSlice.js';

import { OnTabBtn } from './OnTabBtn.js';



const TabsButtonsComponent = ( props ) => {

    let {
        activeTabName,
        setActiveTabName

    } = props;

    


    return (
        <div className = 'AWG_TabsButtons'>

            <OnTabBtn
                title = { 'Из файла' }
                tabName = { 'from_file' }
                activeTabName = { activeTabName }
                setActiveTabName = { setActiveTabName }
            />

            <OnTabBtn
                title = { 'Из текста' }
                tabName = { 'from_text' }
                activeTabName = { activeTabName }
                setActiveTabName = { setActiveTabName }
            />

           
        </div>
    )

};


export function TabsButtons( props ){

    // const wordEdit = useSelector( wordEditSlice );
    // const dispatch = useDispatch();

    return (
        <TabsButtonsComponent
            { ...props }
            // newWordContainerIsOpen = { wordEdit.newWordContainerIsOpen }
            // setNewWordContainerIsOpen = { ( val ) => { dispatch( setNewWordContainerIsOpen( val ) ) } }

        />
    );


}
