
import React from "react";

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './AdminPageTopic.scss';

import { selectorData as appWordsSlice } from './../../../../redux/appWordsSlice.js';

import { AdminPageContainer } from './../AdminPageContainer/AdminPageContainer.js';
import { A_TopButtonsContainer } from './../AdminPageContainer/A_TopButtonsContainer/A_TopButtonsContainer.js';
import { GetStartingAdminDataFromServer } from './../GetStartingAdminDataFromServer/GetStartingAdminDataFromServer.js';
// import { SaveMainChanges } from './components/SaveMainChanges/SaveMainChanges.js';

// import { SaveTestsChanges } from './components/SaveTestsChanges/SaveTestsChanges.js';
// import { AddNewTestButton } from './components/AddNewTestButton/AddNewTestButton.js';
// import { TestsList } from './components/TestsList/TestsList.js';

// import { TestsCount } from './components/TestsCount/TestsCount.js';

import { SaveTopicChanges } from './components/SaveTopicChanges/SaveTopicChanges.js';
import { AddNewTopicButton } from './components/AddNewTopicButton/AddNewTopicButton.js';
import { TopicsCount } from './components/TopicsCount/TopicsCount.js';
import { OneTopicEdit } from './components/OneTopicEdit/OneTopicEdit.js';


const AdminPageTopicComponent = ( props ) => {

    let {
        topicsList,
    } = props;

    let what_to_take = [
        'topicsList',
    ];


    const create = ( arr ) => {

        let div = arr.map( ( item, index ) => {

            let { id, name } = item;

            return (
                <OneTopicEdit
                    key = { index }
                    topicId = { id }
                    topicName = { name }
                />
            );

        } );

        return div;

    }


    return (
        <AdminPageContainer>
            <GetStartingAdminDataFromServer 
                what_to_take =      { what_to_take }
            >


                <A_TopButtonsContainer>

                    <div className = 'A_TopButtonsLeftBlock'>
                        <TopicsCount />
                    </div>
                    
                    <AddNewTopicButton />
                    <SaveTopicChanges />

                </A_TopButtonsContainer>

                <div className = 'AMP_AdminPageTopic'>
                    { create( topicsList ) }
                </div>

            </GetStartingAdminDataFromServer>
        </AdminPageContainer>
    )

};

export function AdminPageTopic( props ){

    const appWords = useSelector( appWordsSlice );
    // const dispatch = useDispatch();

    return (
        <AdminPageTopicComponent
            { ...props }
            topicsList = { appWords.topicsList }
            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
