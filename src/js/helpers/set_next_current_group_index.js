import store from './../redux/store.js';

import {
    setLearnWordsGroupe,
    setLearnWordsList,
    setCurrentGroupIndex,
    setNextLearnWordsIndex,
    setAppMessage,
    setCurrentProgress,
} from './../redux/appDataSlice.js';

export const set_next_current_group_index = ( isAccess = false ) => {

    let { appData, settings } = store.getState();
    let { 
        // learnIsStarted,
        learnWordsGroupe,
        learnWordsList,
        nextLearnWordsIndex,
        // currentProgress,
        currentGroupIndex,
        currentStepNomber,
    } = appData;
    let { correctAnswersLength } = settings;



    let grouge_with_score = add_a_score_to_a_group({
        isAccess,
        currentIndex:   currentGroupIndex,
        groupe:         learnWordsGroupe,
        maxAnswers:     correctAnswersLength,
    });

    let new_group = replace_word_if_necessary({
        currentIndex:   currentGroupIndex,
        groupe:         grouge_with_score,
        maxAnswers:     correctAnswersLength,
        nextLearnWordsIndex,
        learnWordsList,
    });

    let new_currentGroupIndex = get_next_group_index( new_group, currentGroupIndex );

    store.dispatch( setLearnWordsGroupe( new_group ) );

    set_progress();


    console.dir( 'new_group' );
    console.dir( new_group );
    // console.log( 'new_currentGroupIndex', new_currentGroupIndex );



    console.dir({
        // learnIsStarted,
        learnWordsGroupe,
        learnWordsList,
        nextLearnWordsIndex,
        // currentProgress,
        currentGroupIndex,
        correctAnswersLength,
    });
    console.log( '' );

    if( new_currentGroupIndex === null ){

        if( currentStepNomber === null ){

        }else{
            let text = '';
            if( currentStepNomber === 1 ){
                let { messageAfterStep_1 } = settings;
                text = messageAfterStep_1;
            }else if( currentStepNomber === 2 ){
                let { messageAfterStep_2 } = settings;
                text = messageAfterStep_2;
            }else if( currentStepNomber === 3 ){
                let { messageAfterStep_3 } = settings;
                text = messageAfterStep_3;
            };
            if( text.trim() === '' ){
                store.dispatch( setAppMessage( 'Задание пройдено успешно!' ) );
            }else{
                store.dispatch( setAppMessage( text ) );
            }
            
        };

    }else{
        store.dispatch( setCurrentGroupIndex( new_currentGroupIndex ) );
    };



}

function add_a_score_to_a_group( params ){
    let {
        isAccess,
        currentIndex,
        groupe,

    } = params;

    let list = structuredClone( groupe );
    if( list[ currentIndex ] ){
        let mistakes = list[ currentIndex ].mistakes;
        let answers = list[ currentIndex ].answers;

        if( isAccess === true ){
            // if( answers < maxAnswers + 1 ){
                answers = answers + 1;
            // }else{
            //     // answers = maxAnswers;
            // };
        }else{
            if( answers > 0 ){
                answers = answers - 1;
            }else{
                answers = 0;
            };
            mistakes = mistakes + 1;
        };

        list[ currentIndex ].mistakes = mistakes;
        list[ currentIndex ].answers = answers;
    };

    

    return list;

}

function replace_word_if_necessary( params ){
    let {
        currentIndex,
        groupe,
        maxAnswers,
        nextLearnWordsIndex,
        learnWordsList,
    } = params;

    let nextGroupe = [];

    if( groupe[ currentIndex ] ){
        let group_item = groupe[ currentIndex ];

        if( group_item.answers > maxAnswers ){


            let { answers, mistakes, wordId } = group_item;

            let learnWords = [];
            for( let i = 0; i < learnWordsList.length; i++ ){
                let item_2 = structuredClone( learnWordsList[ i ] );
                if( learnWordsList[ i ].wordId === wordId ){
                    item_2.mistakes = mistakes;
                    item_2.answers = answers;
                };
                learnWords.push( item_2 );
            };
            store.dispatch( setLearnWordsList( learnWords ) );


            let new_group = [];
            if( learnWords[ nextLearnWordsIndex ] ){
                // let next_groupe_item = structuredClone( learnWords[ nextLearnWordsIndex + 1 ] );
                let next_groupe_item = structuredClone( learnWords[ nextLearnWordsIndex ] );

                for( let i = 0; i < groupe.length; i++ ){
                    if( groupe[ i ].wordId === wordId ){
                        new_group.push( next_groupe_item );
                    }else{
                        new_group.push( { ...groupe[ i ] } );
                    };
                };
                store.dispatch( setNextLearnWordsIndex( nextLearnWordsIndex + 1 ) );
            }else{
                for( let i = 0; i < groupe.length; i++ ){
                    if( groupe[ i ].wordId !== wordId ){
                        new_group.push( { ...groupe[ i ] } );
                    };
                };
            };
            nextGroupe = structuredClone( new_group );
            
        }else{
            nextGroupe = structuredClone( groupe );
        };
    };

    return nextGroupe;

}

function get_next_group_index( group, currentGroupIndex ){
    let result = null;
    if( group[ currentGroupIndex + 1 ] ){
        result = currentGroupIndex + 1;
    }else{

        if( group.length > 0 ){
            result = 0;
        };

    };

    return result;

}

function set_progress(){
        let { appData, settings } = store.getState();
    let { 
        // learnIsStarted,
        // learnWordsGroupe,
        learnWordsList,
        // nextLearnWordsIndex,
        // currentProgress,
        // currentGroupIndex,
        // currentStepNomber,
    } = appData;
    let { correctAnswersLength } = settings;

    let procent = 0;

    let all = learnWordsList.length;
    let count = 0;
    for( let i = 0; i < learnWordsList.length; i++ ){
        if( learnWordsList[ i ].answers >= correctAnswersLength ){
            count++;
        };
    };

    if( all === count ){
        procent = 100;
    }else{
        procent = (count / all)*100;
    };

    // console.dir( 'learnWordsList' );
    // console.dir( learnWordsList );
    // console.dir( 'learnWordsList' );
    // console.dir( correctAnswersLength );
    // console.dir( {
    //     all, count
    // } );

    store.dispatch( setCurrentProgress( procent ) );

}

