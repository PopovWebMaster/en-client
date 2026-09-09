

import store from './../redux/admin/store.js';
import { set_part_of_speech_list_to_store } from './set_part_of_speech_list_to_store.js';
import { setMainPageDataIsChanged } from './../redux/admin/mainPageSlise.js';

export const set_POS_value_into_store = ( POS_id, objValues = {} ) => {

    let { appWords } = store.getState();
    let { partOfSpeechList } = appWords;

    let arr = [];

    for( let i = 0; i < partOfSpeechList.length; i++ ){
        let { id } = partOfSpeechList[ i ] ;
        let item = {};
        if( POS_id === id ){
            item = { ...partOfSpeechList[ i ], ...objValues };
        }else{
            item = { ...partOfSpeechList[ i ] };
        };

        arr.push( item );
        
    };

    set_part_of_speech_list_to_store( arr );
    store.dispatch( setMainPageDataIsChanged( true ) )

}