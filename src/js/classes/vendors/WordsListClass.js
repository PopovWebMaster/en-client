
import store from './../../redux/store.js';
import { setLearnWordsList, setNextLearnWordsIndex } from './../../redux/appDataSlice.js';
import { get_shuffle_array_from_array } from './../../helpers/get_shuffle_array_from_array.js';
import { OneWordClass } from './OneWordClass.js';


export class WordsListClass {
    constructor(){
        this.list = [];

        this.nextIndex = 0;

        this.except = [];
        /*
            this.except - это массив индексов
            Он используется, когда this.nextIndex уже равен null (то-есть уже всё перебрали)
            В него попадают те интексы самых трудных слов, которые уже были использованы повторно.
            Когда нужно взять повторно какое-то слово (в конце прогресса), то выбор идёт по максимальному параметру mistakes
            и, чтоб это слово, как чемпион по mistakes, не повторялось постоянно, оно попадает сюда, молв хватит его брать оно уже прорабатывалось второй раз.
        */

        this.Clear = this.Clear.bind( this );
        this.Create = this.Create.bind( this );
        this.SetToStore = this.SetToStore.bind( this );
        this.GetNextIndex = this.GetNextIndex.bind( this );
        this.GetWordData = this.GetWordData.bind( this );

        this.AddMistake = this.AddMistake.bind( this );
        this.AddAnswer = this.AddAnswer.bind( this );
        this.GetList = this.GetList.bind( this );

        this.GetMostDifficultWord = this.GetMostDifficultWord.bind( this );
        this.AddExcept = this.AddExcept.bind( this );




        

        

    }

    Clear(){
        store.dispatch( setLearnWordsList( [] ) );
        store.dispatch( setNextLearnWordsIndex( 0 ) );
    }

    Create(){
        this.except = [];
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
        let list = this.GetList();
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

    GetList(){
        let result = [];
        for( let i = 0; i < this.list.length; i++ ){
            result.push( this.list[ i ].GetData() );
        };
        return result;
    }

    GetMostDifficultWord( groupIndexList ){

        let result = null;

        let arr_justUnik = [];
        let arr_justNotGroup = [];

        for( let i = 0; i < this.list.length; i++ ){
            if( groupIndexList.indexOf( i ) === -1 ){ // здесь отсекаем сразу слова, которые в группе и которые уже брались повторно
                arr_justNotGroup.push( { ...this.list[ i ].GetData(), index: i } );
                if( this.except.indexOf( i ) === -1 ){
                    arr_justUnik.push( { ...this.list[ i ].GetData(), index: i } );
                };
            };
        };

        if( arr_justUnik.length > 0 ){ // если есть из чего перебирать
            let arr_sort = arr_justUnik.sort( ( a, b ) => {
                if( a.mistakes > b.mistakes ){
                    return -1;
                }else{
                    return 1;
                };
            });
            result = arr_sort[0].index;
        }else{ // всё уже перебрано, берём любое случайное
            let arr_shuff = get_shuffle_array_from_array( arr_justNotGroup );
            if( arr_shuff.length > 0 ){
                result = arr_shuff[0].index;
            };
        };

        this.AddExcept( result );

        return result;
    }

    AddExcept( index ){
        if( index === null ){
            // ничего не надо делать
        }else{
            if( this.except.indexOf( index ) === -1){
                this.except.push( index );
            };
        };
    }





}