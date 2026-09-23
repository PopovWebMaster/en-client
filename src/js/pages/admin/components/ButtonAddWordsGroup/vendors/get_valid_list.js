
// import store from './../../../../../redux/admin/store.js';

import { OneWordClass } from './../../../../../components/AlertWindowContainer/AWGWordsSelectedList/vendors/OneWordClass.js';

import { get_one_item_data } from './get_one_item_data.js';

export const get_valid_list = ( arr ) => {

    let result = [];

    if( Array.isArray( arr ) ){

        let arr_sort = arr.sort( ( a, b ) => {
            if( a.foreign > b.foreign ){
                return 1;
            }else{
                return -1;
            };
        } );

        for( let i = 0; i < arr_sort.length; i++ ){
            let {
                transcription,
                ru,
                foreign,
                audio,
                part_of_speech_id,
                topic_id,
                isSelected,
                message,
            } = get_one_item_data( arr_sort[ i ] );

            let OneWord = new OneWordClass({
                isSelected: message === ''? true: false,
                foreign,
                part_of_speech_id,
                ru,
                transcription,
                topic_id,
                message,
            });

            OneWord.SetAudio( audio );

            result.push( OneWord.GetData() );

        };


    };

    return result;

}