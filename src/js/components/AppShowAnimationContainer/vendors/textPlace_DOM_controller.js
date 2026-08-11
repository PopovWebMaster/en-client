

export const textPlace_DOM_controller = {
    hide: () => {
        let elem = document.getElementById( 'textPlace' );

        if( elem ){

            elem.classList.add( 'textPlaceHide' );
            elem.classList.remove( 'textPlaceShow' );

        }else{
            console.error( 'не найден елемент с id="textPlace"' );
        };

    },
    show: () => {
        let elem = document.getElementById( 'textPlace' );

        if( elem ){

            elem.classList.remove( 'textPlaceHide' );
            elem.classList.add( 'textPlaceShow' );

        }else{
            console.error( 'не найден елемент с id="textPlace"' );
        };
        
    },
}