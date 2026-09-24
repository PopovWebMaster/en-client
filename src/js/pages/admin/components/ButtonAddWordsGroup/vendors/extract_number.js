

export const extract_number = ( str ) => {
    
    let result = {
        number: null,
        remainder: '',
    };

    let pos = str.indexOf( ' ' );
    if( pos !== -1 ){

        let val = str.slice( 0, pos );
        let remVal = str.slice( pos + 1 );

        if( Number( val ) ){
            result.number = Number( val );
            result.remainder = remVal.trim();
        };

    };

    return result;

};