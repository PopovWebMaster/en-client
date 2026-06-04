

export const get_parent_container = ( elem ) => {

    let result = null;

    function recursiveSearche( childElem ){

        if( childElem ){
            if( childElem.parentElement ){
                let parent = childElem.parentElement;

                let classList = parent.classList;

                let issset = false;

                for( let i = 0; i < classList.length; i++ ){
                    if( classList[ i ] === 'oneWordEditor' ){
                        issset = true;
                        break;
                    };
                }

                if( issset ){
                    result = parent;
                }else{
                    recursiveSearche( parent );
                };

            };

        }else{
            
        };

    };

    recursiveSearche( elem );

    return result;


};