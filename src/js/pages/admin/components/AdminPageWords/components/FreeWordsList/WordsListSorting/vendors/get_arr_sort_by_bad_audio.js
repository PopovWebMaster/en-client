

export const get_arr_sort_by_bad_audio = ( wordList ) => {
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