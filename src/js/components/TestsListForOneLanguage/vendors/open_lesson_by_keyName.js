
export const open_lesson_by_keyName = ( keyName ) => {
    let listElem = document.querySelectorAll( '.testsListForOneLanguage' );
    for( let i = 0; i < listElem.length; i++ ){
        let elem = listElem[ i ];
        if( elem.dataset.language ){
            if( elem.dataset.language === keyName ){
                elem.classList.add( 'isOpen' );
                break;
            };
        };
        
    };

};