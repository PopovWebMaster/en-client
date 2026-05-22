

export const trim_spaces_str = ( str ) => {

    let result = str.trim();

    result = result.replace( '  ', ' ');

    function recursivReplace( val ){
        if( val.indexOf( '  ' ) === -1 ){

        }else{
            result = val.replace( '  ', ' ');
            recursivReplace( result )
        };
    };
    
    recursivReplace( result );

    return result;

};