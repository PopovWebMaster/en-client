
import store from './../../../../redux/admin/store.js';

import { setList } from './../../../../redux/admin/wordsSelectedListSlice.js';

import { OneWordClass } from './OneWordClass.js';


export const create_list_from_wordsList = ( alIsSelected = true ) => {
    let result = [];

    let { words } = store.getState();
    let { wordList } = words;


    let arr = structuredClone( wordList );

    let arr_sort = arr.sort( ( a, b ) => {
        if( a.foreign > b.foreign ){
            return 1;
        }else{
            return -1;
        };

    } );

    for( let i = 0; i < arr_sort.length; i++ ){
        let {
            audio,
            foreign,
            id,
            part_of_speech_id,
            ru,
            transcription,
            topic_id,
            message,
        } = arr_sort[ i ];

        let OneWord = new OneWordClass( {
            // audio,
            foreign,
            id,
            part_of_speech_id,
            ru,
            transcription,
            topic_id,
            message,
        } );

        OneWord.SetIsSelected( message === ''? alIsSelected: false );
        OneWord.SetAudioLength( audio.length );

        result.push( OneWord.GetData() );

    };

    store.dispatch( setList( result ) );


};