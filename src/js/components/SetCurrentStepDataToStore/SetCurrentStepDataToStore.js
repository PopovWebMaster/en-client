
import React, { useEffect }   from "react";

import { 
    selectorData as appDataSlice,
    setCurrentStepTask,
    setCurrentProgress,
    setAppMessage,
    setCurrentGroupIndex,
    setCurrentLearnWordId,
    setCurrentLearnForeign,
    setCurrentLearnRu,
    setCurrentLearnTranscription,
    setLearnIsStarted,
} from './../../redux/appDataSlice.js';
import { selectorData as settingsSlice } from './../../redux/settingsSlice.js';
import { selectorData as appWordsSlice } from './../../redux/appWordsSlice.js';



import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './SetCurrentStepDataToStore.scss';

// import { update_learn_data_to_store } from './../../helpers/update_learn_data_to_store.js';

import { AppLearnModeClass } from './../../classes/AppLearnModeClass.js';


const SetCurrentStepDataToStoreComponent = ( props ) => {

    let {
        currentStepNomber,
        setCurrentStepTask,
        setCurrentProgress,
        setAppMessage,

        taskForStep_1,
        taskForStep_2,
        taskForStep_3,
        children,

        currentGroupIndex,
        learnWordsGroupe,

        setCurrentGroupIndex,

        setCurrentLearnWordId,
        setCurrentLearnForeign,
        setCurrentLearnRu,
        setCurrentLearnTranscription,


        appWordsListById,

        setLearnIsStarted,

    } = props;

    useEffect( () => {

        // setCurrentGroupIndex( null );
        // setCurrentLearnWordId( null );
        // setCurrentLearnForeign( '' );
        // setCurrentLearnRu( '' );
        // setCurrentLearnTranscription( '' );
        // setLearnIsStarted( false );

        // if( currentStepNomber === null ){
            
        // }else{
        //     let currentTask = '';

        //     if( currentStepNomber === 1 ){
        //         currentTask = taskForStep_1;
        //     }else if( currentStepNomber === 2 ){
        //         currentTask = taskForStep_2;
        //     }else if( currentStepNomber === 3 ){
        //         currentTask = taskForStep_3;
        //     };

        //     setCurrentStepTask( currentTask );
        //     // setCurrentProgress( 0 );
        //     // setAppMessage( '' );
        //     // update_learn_data_to_store();


        // };

        // let AppLearnMode = new AppLearnModeClass;
        // AppLearnMode.StartForStep( currentStepNomber );

        // console.dir( AppLearnMode );

        




    }, [ currentStepNomber ] );

    // useEffect( () => {
    //     if( currentGroupIndex !== null ){
    //         if( learnWordsGroupe[ currentGroupIndex ] ){
    //             let { wordId } = learnWordsGroupe[ currentGroupIndex ];
    //             if( appWordsListById[ wordId ] ){
    //                 let { foreign, ru, transcription } = appWordsListById[ wordId ];

    //                 setCurrentLearnWordId( wordId );
    //                 setCurrentLearnForeign( foreign );
    //                 setCurrentLearnRu( ru );
    //                 setCurrentLearnTranscription( transcription );
    //             };


    //         };
    //     };

    // }, [ currentGroupIndex ] );

    
    return (
       <>{ children }</>
    )

};



export function SetCurrentStepDataToStore( props ){

    const appData = useSelector( appDataSlice );
    const settings = useSelector( settingsSlice );
    const appWords = useSelector( appWordsSlice );


    

    
    const dispatch = useDispatch();

    return (
        <SetCurrentStepDataToStoreComponent
            { ...props }
            currentStepNomber = { appData.currentStepNomber }
            currentGroupIndex = { appData.currentGroupIndex }
            learnWordsGroupe = { appData.learnWordsGroupe }

            appWordsListById = { appWords.appWordsListById }



            taskForStep_1 = { settings.taskForStep_1 }
            taskForStep_2 = { settings.taskForStep_2 }
            taskForStep_3 = { settings.taskForStep_3 }

            setCurrentStepTask = { ( val ) => { dispatch( setCurrentStepTask( val ) ) } }
            setCurrentProgress = { ( val ) => { dispatch( setCurrentProgress( val ) ) } }
            setAppMessage = { ( val ) => { dispatch( setAppMessage( val ) ) } }
            setCurrentGroupIndex = { ( val ) => { dispatch( setCurrentGroupIndex( val ) ) } }


            setCurrentLearnWordId = { ( val ) => { dispatch( setCurrentLearnWordId( val ) ) } }
            setCurrentLearnForeign = { ( val ) => { dispatch( setCurrentLearnForeign( val ) ) } }
            setCurrentLearnRu = { ( val ) => { dispatch( setCurrentLearnRu( val ) ) } }
            setCurrentLearnTranscription = { ( val ) => { dispatch( setCurrentLearnTranscription( val ) ) } }
            setLearnIsStarted = { ( val ) => { dispatch( setLearnIsStarted( val ) ) } }




            




            

        />
    );


}
