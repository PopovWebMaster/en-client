

export const audio_play = ( data ) => {
    
    if( data.base64 ){
        const audio = new Audio();
        audio.src = data.base64;
        audio.play();
    };
      
};