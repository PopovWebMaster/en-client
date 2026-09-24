
export const get_topic_from_row = ( str ) => {

    let result = null;

    if( str.indexOf( '(' ) !== -1 && str.indexOf( ')' ) !== -1 ){
        let val = str.slice( str.indexOf('(') + 1, str.lastIndexOf(')') );
        result = val.trim();
    };

    return result;

}