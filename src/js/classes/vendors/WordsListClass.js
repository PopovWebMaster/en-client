
import store from './../../redux/store.js';
import { setLearnWordsList, setNextLearnWordsIndex } from './../../redux/appDataSlice.js';
import { get_shuffle_array_from_array } from './../../helpers/get_shuffle_array_from_array.js';
import { OneWordClass } from './OneWordClass.js';


export class WordsListClass {
    constructor(){
        this.list = [];

        this.nextIndex = 0;
        this.Clear = this.Clear.bind( this );
        this.Create = this.Create.bind( this );
        this.SetToStore = this.SetToStore.bind( this );
        this.GetNextIndex = this.GetNextIndex.bind( this );
        this.GetWordData = this.GetWordData.bind( this );

        this.AddMistake = this.AddMistake.bind( this );
        this.AddAnswer = this.AddAnswer.bind( this );







    }

    Clear(){
        store.dispatch( setLearnWordsList( [] ) );
        store.dispatch( setNextLearnWordsIndex( 0 ) );
    }

    Create(){
        this.list = [];

        let { appWords } = store.getState();
        let { appWordsList } = appWords;

        let list_1 = [];
        for( let i = 0; i < appWordsList.length; i++ ){
            let { id } = appWordsList[ i ];
            list_1.push({
                wordId: id,
                mistakes: 0,
                answers: 0,
            });

        };

        let list_shuffle = get_shuffle_array_from_array( list_1 );

        for( let i = 0; i < list_shuffle.length; i++ ){
            let {
                wordId,
                mistakes,
                answers,
            } = list_shuffle[ i ];

            this.list.push( new OneWordClass({
                wordId,
                mistakes,
                answers,
            }) );

        }

    }

    SetToStore(){
        let list = [];
        for( let i = 0; i < this.list.length; i++ ){
            list.push( this.list[ i ].GetData() );
        };
        store.dispatch( setLearnWordsList( list ) );
        store.dispatch( setNextLearnWordsIndex( this.nextIndex ) );
    }

    GetNextIndex(){
        let result = null;
        if( this.list[ this.nextIndex ] ){
            result = this.nextIndex;
            this.nextIndex = this.nextIndex + 1;
        };
        return result;
    }

    GetWordData( index ){

        let result = this.list[ index ].GetData();
        return result;

    }

    AddMistake( index ){
        this.list[ index ].AddMistake();
    }

    AddAnswer( index ){
        this.list[ index ].AddAnswer();
    }




}