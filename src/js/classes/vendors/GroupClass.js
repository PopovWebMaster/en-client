
import store from './../../redux/store.js';


export class GroupClass {
    constructor(){
        this.WordsList = null;


        this.queue = 0;
        this.indexList = [];
        this.circleLength = 0;
        this.maxAnswers = 0;


        this.Bind = this.Bind.bind( this );
        this.Create = this.Create.bind( this );
        this.AcceptResponse = this.AcceptResponse.bind( this );
        this.GetCurrentWordId = this.GetCurrentWordId.bind( this );
        this.SetNextQueue = this.SetNextQueue.bind( this );


        



        

    }

    Bind( params ){
        let {
            WordsList,
        } = params;
        this.WordsList = WordsList;

    }

    Create(){

        this.indexList = [];

        let { settings } = store.getState();
        let { repeatCircleLength, correctAnswersLength } = settings;
        this.circleLength = repeatCircleLength;
        this.maxAnswers = correctAnswersLength;

        for( let i = 0; i < this.circleLength; i++ ){
            let index = this.WordsList.GetNextIndex();
            if( index === null ){
                // здесь ничего не должно быть
            }else{
                this.indexList.push( index );
            };
        };

    }

    AcceptResponse( isAccess ){
        let index = this.indexList[ this.queue ];
        if( isAccess === true ){
            this.WordsList.AddAnswer( index );
        }else{
            this.WordsList.AddMistake( index );
        };

        let { answers } = this.WordsList.GetWordData( index );
        if( answers < this.maxAnswers + 1 ){
            this.SetNextQueue();
        }else{

        };

    }

    GetCurrentWordId(){
        let index = this.indexList[ this.queue ];
        let { wordId } = this.WordsList.GetWordData( index );
        return wordId;

    }

    SetNextQueue(){
        if( this.queue < this.indexList.length - 1 ){
            this.queue = this.queue + 1;
        }else{
            this.queue = 0;
        };
    }



}