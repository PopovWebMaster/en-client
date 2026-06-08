
import store from './../redux/admin/store.js';
import { setWordList, setWordListById } from './../redux/admin/wordsSlice.js';

export const set_word_list_to_store = ( word_list, onlyValue = null ) => {

    /*
        onlyValue = [ 'audio' ];

        если не передать, то запишет массив wordList целиком.
        если передать массив со значениями, то запишет в сушествующий массив только значения из этого массив, 
        остальное оставит прежним
    
    */

    let arr = [];
    let obj = {};

    if( onlyValue === null ){
        for( let i = 0; i < word_list.length; i++ ){
            let item = structuredClone( word_list[ i ] );
            let { id } = item;
            arr.push( item );
            obj[ id ] = item;
        };
    }else{
        let { words } = store.getState();
        let { wordList } = words;
        let oldObj = {};
        for( let i = 0; i < wordList.length; i++ ){
            let { id } = wordList[ i ] ;
            let item = structuredClone( wordList[ i ] );
            oldObj[ id ] = item;
        };

        let newObj = {};
        for( let i = 0; i < word_list.length; i++ ){
            let { id } = wordList[ i ] ;
            let item = structuredClone( word_list[ i ] );
            newObj[ id ] = item;
        };

        let mergObj = {};
        for( let id in oldObj ){
            let item = structuredClone( oldObj[ id ] );
            for( let i = 0; i < onlyValue.length; i++ ){
                let valueName = onlyValue[ i ];
                item[ valueName ] = structuredClone( newObj[ id ][ valueName ] );
            };
            mergObj[ id ] = item;
        };

        for( let i = 0; i < wordList.length; i++ ){
            let { id } = wordList[ i ] ;
            let item = structuredClone( mergObj[ id ] );
            arr.push( item );
            obj[ id ] = item;
        };


    };

    

    store.dispatch( setWordList( arr ) );
    store.dispatch( setWordListById( obj ) );

   


};