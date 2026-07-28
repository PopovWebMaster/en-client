

export const get_keyName = ( e ) => {

    let result = null;

    let count = 0;

    const recursiveSearce = ( parrent ) => {
        if( count < 10 ){
            count++;
            if( parrent.dataset.language ){
                result = parrent.dataset.language;

            }else{
                recursiveSearce( parrent.parentElement );
            };
        };
    }

    recursiveSearce( e.target.parentElement );

    return result;

}