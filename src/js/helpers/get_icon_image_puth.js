

export const get_icon_image_puth = ( fileName ) => {
    
    let result = '/assets/img/' + fileName;

    if( IS_DEVELOPMENT === false){
        result = '/public/' + result;
    };

    return result;

};