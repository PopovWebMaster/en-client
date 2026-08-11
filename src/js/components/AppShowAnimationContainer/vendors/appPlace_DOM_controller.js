

export const appPlace_DOM_controller = {

    forAppShow: () => {
        let appPlace = document.getElementById( 'appPlace' );
        if( appPlace ){
            if( appPlace ){
                appPlace.style.width = '100%';
                appPlace.style.height = '100%';
            };
        }else{
            console.error( 'не найден елемент с id="appPlace"' );
        };

    },

    forAppHide: () => {
        let appPlace = document.getElementById( 'appPlace' );
        if( appPlace ){
            let timerId = setTimeout( () => {
                if( appPlace ){
                    appPlace.style.width = '0%';
                    appPlace.style.height = '0%';
                };
                clearTimeout( timerId );
            }, 200 );
        }else{
            console.error( 'не найден елемент с id="appPlace"' );
        };
    },

};