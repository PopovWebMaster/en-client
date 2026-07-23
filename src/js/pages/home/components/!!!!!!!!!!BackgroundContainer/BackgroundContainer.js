
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BackgroundContainer.scss';

if( IS_DEVELOPMENT ){
    require( './bd_media_screen_dev.scss' );
}else{
    require( './bd_media_screen_prod.scss' );
};


export const BackgroundContainer = ( props ) => {

    let {
        children
    } = props;


    return (
        <div className = 'backgroundContainer'>
            { children }
        </div>
    )

};

