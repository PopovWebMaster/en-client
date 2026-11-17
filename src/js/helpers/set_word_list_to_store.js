
import store from './../redux/admin/store.js';
import { setWordList, setWordListById } from './../redux/admin/wordsSlice.js';

// import { WORDS_LIST_SORT_BY } from './../config/wordsList.js';
import { WORDS_LIST_SORT_BY } from './../pages/admin/config/wordsList.js';


export const set_word_list_to_store = ( word_list ) => {

    let { words } = store.getState();
    let { wordsListSortingValue } = words;


    let sort_result = [];
    
    switch( wordsListSortingValue ){
        case WORDS_LIST_SORT_BY.FOREIGN_ALPHABET:
            sort_result = get_arr_sort_foreign_alpha( word_list );
            break;

        case WORDS_LIST_SORT_BY.RU_ALPHABET:
            sort_result = get_arr_sort_ru_alpha( word_list );
            break;

        case WORDS_LIST_SORT_BY.FOREIGN_LENGTH:
            sort_result = get_arr_sort_foreign_length( word_list );
            break;

        case WORDS_LIST_SORT_BY.TOPIC:
            sort_result = get_arr_sort_by_topics( word_list );
            break;

        case WORDS_LIST_SORT_BY.REPEATS:
            sort_result = get_arr_sort_by_repeats( word_list );
            break;

        case WORDS_LIST_SORT_BY.BAD_POS:
            sort_result = get_arr_sort_by_bad_POS( word_list );
            break;

        case WORDS_LIST_SORT_BY.BAD_AUDIO:
            sort_result = get_arr_sort_by_bad_audio( word_list );
            break;

        case WORDS_LIST_SORT_BY.BAD_FOREIGN:
            sort_result = get_arr_sort_by_bad_foreign( word_list );
            break;

        case WORDS_LIST_SORT_BY.BAD_RU:
            sort_result = get_arr_sort_by_bad_ru( word_list );
            break;

        case WORDS_LIST_SORT_BY.BAD_TRANSCRIPTION:
            result = get_arr_sort_by_bad_transctipt( word_list );
            break;

        default:
            sort_result = word_list;

    };

    let arr = [];
    let obj = {};

    for( let i = 0; i < sort_result.length; i++ ){
        let item = structuredClone( sort_result[ i ] );
        let { id } = item;
        arr.push( item );
        obj[ id ] = item;
    };
    

    store.dispatch( setWordList( arr ) );
    store.dispatch( setWordListById( obj ) );

   


};


function get_arr_sort_by_bad_audio( wordList ){
    let arr = structuredClone( wordList );
    let result = arr.sort( ( a, b ) => {
        if( a.audio.length === 0 && b.audio.length === 0 ){
            return -1;
        }else{
            if( a.audio.length === 0 && b.audio.length !== 0 ){
                return -1;
            }else{
                return 1;
            };
        };
    } );

    return result;
};

function get_arr_sort_by_bad_foreign( wordList ){
    let arr = structuredClone( wordList );
    let result = arr.sort( ( a, b ) => {
        if( a.foreign.length > b.foreign.length ){
            return 1;
        }else{

            return -1;
        };
    } );
    return result;
}

function get_arr_sort_by_bad_POS( wordList ){
    let arr = structuredClone( wordList );
    let result = arr.sort( ( a, b ) => {
        if( a.part_of_speech_id === null && b.part_of_speech_id === null ){
            return -1;
        }else{
            if( a.part_of_speech_id === null && b.part_of_speech_id !== null){
                return -1;
            }else{
                return 1;
            };
        };
    } );

    return result;
};

function get_arr_sort_by_bad_ru( wordList ){
    let arr = structuredClone( wordList );
    let result = arr.sort( ( a, b ) => {
        if( a.ru.length > b.ru.length ){
            return 1;
        }else{

            return -1;
        };
    } );
    return result;

}

function get_arr_sort_by_bad_transctipt( wordList ){
    let arr = structuredClone( wordList );
    let result = arr.sort( ( a, b ) => {

        if( a.transcription.length > b.transcription.length ){
            return 1;
        }else{

            return -1;
        };
    } );

    return result;
};

function get_arr_sort_by_repeats( wordList ){
    let arr = structuredClone( wordList );
    let result = arr.sort( ( a, b ) => {
        if( a.message === '' && b.message === '' ){
            return -1;
        }else{
            if( a.message.length > b.message.length ){
                return -1;
            }else{
                return 1;
            };
        };
    } );

    return result;
};


function get_arr_sort_by_topics( wordList ){

    let arr = structuredClone( wordList );

    let { appWords } = store.getState();
    let { topicsListById } = appWords;

    let result = [];
    
    if( arr[ 0 ] ){
        if( arr[ 0 ].topic_id === null ){
            result = arr.sort( ( a, b ) => {
                if( a.topic_id === null && b.topic_id !== null ){
                    return 1;
                }else{
                    if( a.topic_id !== null && b.topic_id !== null){
                        if( topicsListById[ a.topic_id ].name > topicsListById[ b.topic_id ].name){
                            return 1;
                        }else{
                            return -1;
                        };
                    }else{
                        return -1;
                    };
                };
            } );
        }else{
            result = arr.sort( ( a, b ) => {
                if( a.topic_id === null && b.topic_id !== null ){
                    return -1;
                }else{
                    if( a.topic_id !== null && b.topic_id !== null){
                        if( topicsListById[ a.topic_id ].name > topicsListById[ b.topic_id ].name){
                            return 1;
                        }else{
                            return -1;
                        };
                    }else{
                        return 1;
                    };
                };
            } );
        }
    };
    return result;

};

function get_arr_sort_foreign_alpha( wordList ){
    let arr = structuredClone( wordList );
    
    let result = arr.sort( ( a, b ) => {
        if( a.foreign > b.foreign ){
            return 1;
        }else{
            return -1;
        };
    } );

    return result;
};

function get_arr_sort_foreign_length( wordList ){
    let arr = structuredClone( wordList );
    
    let result = arr.sort( ( a, b ) => {
        if( a.foreign.length > b.foreign.length ){
            return 1;
        }else{
            return -1;
        };
    } );

    return result;
};

function get_arr_sort_ru_alpha( wordList ){
    let arr = structuredClone( wordList );
    
    let result = arr.sort( ( a, b ) => {
        if( a.ru > b.ru ){
            return 1;
        }else{
            return -1;
        };
    } );

    return result;
};