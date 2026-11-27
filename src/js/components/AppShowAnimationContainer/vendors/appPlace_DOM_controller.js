

export const appPlace_DOM_controller = {

    forAppShow: () => {
        let appPlace = document.getElementById( 'appPlace' );
        if( appPlace ){
            if( appPlace ){
                appPlace.style.width = '100%';
                appPlace.style.height = '100%';

                let main_DOM = document.querySelector( 'main' );
                if( main_DOM ){
                    let scrollContainer_DOM = main_DOM.querySelector( '.scrollContainer' );
                    if( scrollContainer_DOM ){
                        scrollContainer_DOM.style.overflow = 'hidden';
                        // let elem = blockRef.current;
                        scrollContainer_DOM.scrollIntoView( {behavior: "smooth", block: "center", inline: "start"}); 
                    };
                };
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

            let main_DOM = document.querySelector( 'main' );
            if( main_DOM ){
                let scrollContainer_DOM = main_DOM.querySelector( '.scrollContainer' );
                if( scrollContainer_DOM ){
                    scrollContainer_DOM.style.overflow = 'auto';
                };
            };
        }else{
            console.error( 'не найден елемент с id="appPlace"' );
        };
    },

};