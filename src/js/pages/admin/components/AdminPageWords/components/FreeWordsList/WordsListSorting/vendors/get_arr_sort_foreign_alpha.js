

export const get_arr_sort_foreign_alpha = ( wordList ) => {
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