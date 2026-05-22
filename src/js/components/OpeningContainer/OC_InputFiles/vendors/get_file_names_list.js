

export const get_file_names_list = ( files ) => {

    let result = [];

    for( let i = 0; i < files.length; i++ ){
        let { name } = files[ i ];
        
        result.push( name );

    };


    return result;

};