
import React from "react";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './BodyContainer.scss';
import './bс_media_screen.scss';

import { ScrollContainer } from './../../ScrollContainer/ScrollContainer.js';

export const BodyContainer = ( props ) => {

    let {
        children
    } = props;


    return (
        <div className = 'bodyContainer'>
            <div className = 'contentArea'>
                <header>
                    <nav>
                        <div className = 'header_left_wrap'>
                            <a href = '#' className = 'isActive' >Главная</a>
                            <a href = '#' >Список уроков</a>

                        </div>

                        <div className = 'header_right_wrap'>
                            <a href = '#' className = 'BC_CA_nav_login'>login</a>

                        </div>

                    </nav>

                    <h1>Изучение английских слов самостоятельно</h1>

                    <div className = 'BC_CA_header_info'>
                        <div className = 'BC_CA_header_info_levelName'>
                            <span>A2 (Элементарный уровень)</span>
                        </div>
                        <div className = 'BC_CA_header_info_wordsCount'>
                            <span>Cлов:</span>
                            <span>211</span>
                        </div>
                
                    </div>
                    
                </header>

                <main>

                    <ScrollContainer height = 'calc( 100vh - 9em )'>

                        { children }
                    </ScrollContainer>

                    
                </main>

                <footer>
                    <span>2026г.</span>
                    
                </footer>
            </div>
        </div>
    )

};

