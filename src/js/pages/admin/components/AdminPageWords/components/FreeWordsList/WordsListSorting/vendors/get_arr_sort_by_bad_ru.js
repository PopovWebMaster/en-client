

export const get_arr_sort_by_bad_ru = ( wordList ) => {
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