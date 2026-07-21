

export const convert_string_to_array = ( str ) => {
    let result = [];

    let str_trim = str.trim();
    if( str_trim.length > 0 ){
    let arr = str_trim.split( '\n' );
        for( let i = 0; i < arr.length; i++ ){
            let item = arr[ i ].trim();
            if( item.charCodeAt( 0 ) !== 10 ){
                result.push( item );
            };
        };
    };

    


    return result;

};