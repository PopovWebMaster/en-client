

export const move_lesson_item = ( order, where, callback = () => {} ) => { // up down

    if( where === 'up' ){
        
        if( document.querySelector( `.APL_OLI_order_${order - 1}` ) ){

            moveActiveElem( order, where );
            moveAPassivElem( order, where );

            let timerId = setTimeout( () => {
                callback();
                clearTimeout( timerId );
            }, 200 );

        };

    }else if( where === 'down' ){

        if( document.querySelector( `.APL_OLI_order_${order + 1}` ) ){

            moveActiveElem( order, where );
            moveAPassivElem( order, where );

            let timerId = setTimeout( () => {
                callback();
                clearTimeout( timerId );
            }, 200 );

        };

    };

    

    

}

function moveActiveElem( order, where ){
    let elemActive = document.querySelector( `.APL_OLI_order_${order}` );
    let style = window.getComputedStyle( elemActive );
    let { width, height, paddingTop, paddingLeft } = style;
    let parrentElem = elemActive.parentElement;
    parrentElem.style.width = parseFloat( width ) + parseFloat( paddingLeft ) + parseFloat( paddingLeft ) + 'px';
    parrentElem.style.height = parseFloat( height ) + parseFloat( paddingTop ) + parseFloat( paddingTop ) + 'px';

    elemActive.style.position = 'absolute';
    elemActive.style.width = width;
    if( where === 'up'){
        elemActive.style.top = '-100%';
    }else if( where === 'down' ){
        elemActive.style.top = '100%';
    };
    
    elemActive.style.zIndex = '2000';

    let timerId = setTimeout( () => {
        parrentElem.style.width = null;
        parrentElem.style.height = null;

        elemActive.style.position = null;
        elemActive.style.width = null;
        elemActive.style.top = null;
        elemActive.style.zIndex = null;

        clearTimeout( timerId );

    }, 200);
}


function moveAPassivElem( order, where ){
    let nextOrder = order

    if( where === 'up'){
        nextOrder  = order - 1;
    }else if( where === 'down' ){
        nextOrder = order + 1;
    };

    let passivElem = document.querySelector( `.APL_OLI_order_${nextOrder}` );


    let style_passive = window.getComputedStyle( passivElem );
    let { width, height, paddingTop, paddingLeft } = style_passive;
    let parrentPassElem = passivElem.parentElement;
    parrentPassElem.style.width = parseFloat( width ) + parseFloat( paddingLeft ) + parseFloat( paddingLeft ) + 'px';
    parrentPassElem.style.height = parseFloat( height ) + parseFloat( paddingTop ) + parseFloat( paddingTop ) + 'px';

    passivElem.style.position = 'absolute';
    passivElem.style.width = width;
    // passivElem.style.top = '100%';

    if( where === 'up'){
        passivElem.style.top = '100%';
    }else if( where === 'down' ){
        passivElem.style.top = '-100%';
    };




    passivElem.style.zIndex = '1000';

    let timerId = setTimeout( () => {
        parrentPassElem.style.width = null;
        parrentPassElem.style.height = null;

        passivElem.style.position = null;
        passivElem.style.width = null;
        passivElem.style.top = null;
        passivElem.style.zIndex = null;

        clearTimeout( timerId );

    }, 200);
}


