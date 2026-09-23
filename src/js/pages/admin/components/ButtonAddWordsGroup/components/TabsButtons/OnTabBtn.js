import React from "react";

export const OnTabBtn = ( props ) => {
    let {
        title,
        tabName,
        activeTabName,
        setActiveTabName
    } = props;

    const click = () => {
        setActiveTabName( tabName );
    }


    return (
        <div 
            className = { `AWG_OnTabBtn ${ activeTabName === tabName? 'isActive': ''}` }
            onClick = { click }
        >
            <span>{ title }</span>

        </div>
    );
}