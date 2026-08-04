

export const close_all_lessons_lists = () => {

    let listElem = document.querySelectorAll( '.testsListForOneLanguage' );
    for( let i = 0; i < listElem.length; i++ ){
        listElem[ i ].classList.remove( 'isOpen' );
    };

};