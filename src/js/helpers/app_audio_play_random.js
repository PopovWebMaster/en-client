
import store from './../redux/store.js';
import { audio_play } from './audio_play.js';

export const app_audio_play_random = ( word_id ) => {
    let { appWords } = store.getState();
    let { appWordsListById } = appWords;
    if( appWordsListById[ word_id ] ){

        function getRandomInt( min, max ) {
            min = Math.ceil( min ); // Округляем min вверх, чтобы гарантировать целое число
            max = Math.floor( max ); // Округляем max вниз по той же причине
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        if( appWordsListById[ word_id ].audio.length > 0 ){
            let min = 0;
            let max = appWordsListById[ word_id ].audio.length - 1;
            let randomIndex = getRandomInt( min, max );

            audio_play( appWordsListById[ word_id ].audio[ randomIndex ] );

            

        };




    }else{
        console.error( 'Тревога! Нельзя пвоспроизвести аудио' );
        console.dir( 'word_id' );
        console.dir( word_id );
        console.dir( 'appWordsListById' );
        console.dir( appWordsListById );

    };
    
    // if( data.base64 ){
    //     const audio = new Audio();
    //     audio.src = data.base64;
    //     audio.play();
    // };
      
};