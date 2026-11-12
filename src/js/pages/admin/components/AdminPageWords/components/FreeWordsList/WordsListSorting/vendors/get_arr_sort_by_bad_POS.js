

export const get_arr_sort_by_bad_POS = ( wordList ) => {
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