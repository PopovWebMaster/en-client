

export const get_arr_sort_foreign_length = ( wordList ) => {
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