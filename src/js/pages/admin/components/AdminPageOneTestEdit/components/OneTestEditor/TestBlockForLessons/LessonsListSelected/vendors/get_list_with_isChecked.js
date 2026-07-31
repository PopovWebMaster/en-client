

export const get_list_with_isChecked = ( list ) => {
    let result = [];

    for( let i = 0; i < list.length; i++ ){
        let item = structuredClone( list[ i ] );
        item.isChecked = false;
        result.push( item );

    };


    return result;

};