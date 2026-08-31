

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

        this.GetData = this.GetData.bind( this );

        this.AddAnswer = this.AddAnswer.bind( this );
        this.AddMistake = this.AddMistake.bind( this );



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
        this.answers = this.answers + 1;
    }
}