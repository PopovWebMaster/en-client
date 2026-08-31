
import store from './../../redux/store.js';

export class AppMetodsClass {

    constructor(){
        // console.dir( 'this' );
        // console.dir( this );

        

        this.SetCurrentDataFromStore = this.SetCurrentDataFromStore.bind( this );
        this.ClearAll = this.ClearAll.bind( this );
        // this.RunForStep = this.RunForStep.bind( this );




    }

    SetCurrentDataFromStore( stepNomber ){

        let { appData } = store.getState();
        let {
            // currentStepNomber,
            // currentStepTask,
            // currentProgress,

            // appMessage,

            // learnWordsList,
            // learnWordsGroupe,
            // currentGroupIndex,
            // nextLearnWordsIndex,

            // currentLearnWordId,
            // currentLearnForeign,
            // currentLearnRu,
            // currentLearnTranscription,

            // learnIsStarted,
        } = appData;

        if( stepNomber === null ){

        }else{

        };

        console.dir( 'appData' );
        console.dir( appData );

    }

    ClearAll(){

    }


    
}