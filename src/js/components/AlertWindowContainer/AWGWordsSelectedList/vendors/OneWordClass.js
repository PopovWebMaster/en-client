

export class OneWordClass {
    constructor( params ){
        let {
            isSelected = true,
            id = null,
            audio = [],
            foreign = '',
            part_of_speech_id = null,
            ru = '',
            transcription = '',
            topic_id = null,
            message = '',


            
        } = params;


        this.isSelected =           isSelected;
        this.id =                   id;
        this.audioLength =          audio.length;
        this.foreign =              foreign;
        this.part_of_speech_id =    part_of_speech_id;
        this.ru =                   ru;
        this.transcription =        transcription;
        this.topic_id =             topic_id;
        this.message =              message;

        this.GetData = this.GetData.bind( this );
        this.SetIsSelected = this.SetIsSelected.bind( this );
        this.SetAudio = this.SetAudio.bind( this );
        this.SetAudioLength = this.SetAudioLength.bind( this );


        



    }

    SetIsSelected( isSelected ){
        this.isSelected = isSelected;
    }

    SetAudio( audio ){
        this.audio = audio;
        this.audioLength = this.audio.length;
    }

    SetAudioLength( audioLength ){
        this.audioLength = audioLength;
    }

    GetData(){
        return {
            isSelected:         this.isSelected,
            audioLength:        this.audioLength,
            foreign:            this.foreign,
            id:                 this.id,
            part_of_speech_id:  this.part_of_speech_id,
            ru:                 this.ru,
            transcription:      this.transcription,
            topic_id:           this.topic_id,
            message:            this.message,
            audio:              this.audio,
        };

    }
}