

export const get_arr_sort_by_repeats = ( wordList ) => {
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