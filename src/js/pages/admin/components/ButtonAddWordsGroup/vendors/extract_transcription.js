

export const extract_transcription = ( str ) => {
    let result = {
        transcription: null,
        remainder: '',
    };

    let pos_1 = str.indexOf( '/' );
    let pos_2 = str.indexOf( '/', 1 );
    if( pos_1 !== -1 && pos_2 !== -1 ){
        let val = str.slice( pos_1 + 1, pos_2 );
        let remVal = str.slice( pos_2 + 1 );
        result.transcription = val.trim();
        result.remainder = remVal.trim();
    };

    return result;
}