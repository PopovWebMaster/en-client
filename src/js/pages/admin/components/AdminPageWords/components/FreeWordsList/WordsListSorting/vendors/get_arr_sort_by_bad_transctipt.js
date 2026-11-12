

export const get_arr_sort_by_bad_transctipt = ( wordList ) => {
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