
import store from './../../redux/store.js';

export class OneWordClass {
    constructor( props ){
        let {
            wordId,
            mistakes,
            answers,
        } = props;

        this.wordId =   wordId;
        this.mistakes = mistakes;
        this.answers =  answers;
        this.maxAnswers = 0;


        this.GetData = this.GetData.bind( this );

        this.AddAnswer = this.AddAnswer.bind( this );
        this.AddMistake = this.AddMistake.bind( this );

        let { settings } = store.getState();
        let { correctAnswersLength } = settings;
        this.maxAnswers = correctAnswersLength;



    }

    GetData(){
        return {
            wordId:   this.wordId,
            mistakes: this.mistakes,
            answers:  this.answers,
        };
    }

    AddMistake(){
        this.mistakes = this.mistakes + 1;
        if( this.answers > 0 ){
            this.answers = this.answers - 1;
        }else{
            this.answers = 0;
        };
    }

    AddAnswer(){
        if( this.answers < this.maxAnswers ){
            this.answers = this.answers + 1;
        };
    }
}