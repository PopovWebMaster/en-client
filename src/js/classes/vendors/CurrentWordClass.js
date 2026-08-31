
import store from './../../redux/store.js';
import { 
    setCurrentLearnWordId,
    setCurrentLearnForeign,
    setCurrentLearnRu,
    setCurrentLearnTranscription,
} from './../../redux/appDataSlice.js';

export class CurrentWordClass {
    constructor(){

        this.WordsList = null;
        this.Group = null;

        this.Bind = this.Bind.bind( this );
        this.SetToStore = this.SetToStore.bind( this );

    }

    Bind( params ){
        let {
            WordsList,
            Group,
        } = params;
        this.WordsList = WordsList;
        this.Group = Group;
    }

    SetToStore(){

        let wordId = this.Group.GetCurrentWordId();

        let { appWords } = store.getState();
        let { appWordsListById } = appWords;
        let {
            foreign,
            ru,
            transcription,
        } = appWordsListById[ wordId ];

        store.dispatch( setCurrentLearnWordId( wordId ) );
        store.dispatch( setCurrentLearnForeign( foreign ) );
        store.dispatch( setCurrentLearnRu( ru ) );
        store.dispatch( setCurrentLearnTranscription( transcription ) );

    }
}