

export const get_arr_sort_ru_alpha = ( wordList ) => {
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