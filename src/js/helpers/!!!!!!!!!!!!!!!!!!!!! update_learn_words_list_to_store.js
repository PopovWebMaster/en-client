
import store from './../redux/store.js';
import { setLearnWordsList } from './../redux/appDataSlice.js';
import { get_shuffle_array_from_array } from './get_shuffle_array_from_array.js';

export const update_learn_words_list_to_store = () => {

    
    /*
    
    Устарела не брать
    
    */

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

    store.dispatch( setLearnWordsList( list_shuffle ) );

    return list_shuffle;


};