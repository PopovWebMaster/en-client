

export const convert_array_to_string = ( arr ) => {

    let result = '';

    if( arr.length === 1 ){
        result = arr[ 0 ];
    }else{
        for( let i = 0; i < arr.length; i++ ){
            if( i === 0 ){
                result = arr[ i ];
            }else{
                result = `${ result }\n${arr[ i ]}`;
            };
        };
    };


    return result;

}