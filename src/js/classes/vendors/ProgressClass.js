
import store from './../../redux/store.js';

import { setCurrentProgress } from './../../redux/appDataSlice.js';

export class ProgressClass {
     constructor(){

        this.WordsList = null;


        this.procent = 0;
        this.maxAnswers = 0;
        this.isFinish = false;

        this.Bind = this.Bind.bind( this );

        this.Update = this.Update.bind( this );
        this.SetToStore = this.SetToStore.bind( this );
        this.SetMaxAnswers = this.SetMaxAnswers.bind( this );
        this.SetStartData = this.SetStartData.bind( this );
        this.GetFinishStatus = this.GetFinishStatus.bind( this );

    }

    Bind( params ){
        let {
            WordsList,
        } = params;
        this.WordsList = WordsList;
    }

    SetStartData(){
        this.SetMaxAnswers();
        this.isFinish = false;
        this.procent = 0;
    }

    SetMaxAnswers(){
        let { settings } = store.getState();
        let { correctAnswersLength } = settings;
        this.maxAnswers = correctAnswersLength;
    }

    Update(){
        let list = this.WordsList.GetList();
        let allLength = list.length;

        let aswersCount = 0;

        for( let i = 0; i < list.length; i++ ){
            let { answers } = list[ i ];
            if( answers >= this.maxAnswers ){
                aswersCount = aswersCount + 1;
            };
        };

        this.procent = (aswersCount*100)/allLength;
        if( this.procent === 100 ){
            this.isFinish = true;
        }else{
            this.isFinish = false;
        };

    }

    GetFinishStatus(){
        return this.isFinish;
    }

    SetToStore(){
        store.dispatch( setCurrentProgress( this.procent ) );
    }

}